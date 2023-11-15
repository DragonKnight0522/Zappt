const db = require("../../config/postgredb");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const ErrorResponse = require("../../utils/errorResponse"); // As we will handle errors using "next()"
const {
  isEmpty,
  errorResponse,
  forgotMessage,
  sendEmail,
} = require("../../utils/util");

const { getProfileInfo } = require("../../utils/googleOAuth");

// @description     SignUp
// @route           POST /api/auth/signUp
// @access          Public
const handleSignUp = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, id } = req.body;
    // Check if any of them is undefined
    if (!firstName || !lastName || !email || !password) {
      return errorRespdecodeonse(
        "Please provide name, email and password",
        400,
        res
      );
    }

    // Check if user already exists in our DB
    const query_find_user = `SELECT first_name, last_name, email FROM persons WHERE email = '${email}'`;
    const userExists = await db.query(query_find_user);

    if (!isEmpty(userExists)) {
      return errorResponse(
        `An account with email ${email} already exists`,
        400,
        res
      );
    }

    // Register and store the new user
    const query_insert_user =
      "INSERT INTO persons (first_name, last_name, email, password, id) VALUES ($1, $2, $3, $4, $5) RETURNING *";

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const users = await db.query(query_insert_user, [
      firstName,
      lastName,
      email,
      hashedPassword,
      id,
    ]);
    return sendAuth(users[0], 201, res);
  } catch (error) {
    return next(error);
  }
};

// @description     Sign In
// @route           POST /api/auth/signIn
// @access          Public
const handleSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse("Please provide email and password", 400, res);
    }

    const query_find_user = `SELECT first_name, last_name, email, is_admin, password, id, intake FROM persons WHERE email = '${email}'`;
    const users = await db.query(query_find_user);

    if (isEmpty(users)) {
      return errorResponse("Invalid credentials", 401, res);
    }
    const user = users[0];

    // Using our own custom method to compare passwords
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return errorResponse("Invalid credentials", 401, res);
    }

    return sendAuth(user, 200, res);
  } catch (error) {
    return next(error);
  }
};

// @description     Google Sign
// @route           POST /api/auth/googleSign
// @access          Public
const handleGoogleSign = async (req, res, next) => {
  try {
    const credentials = req.body;
    const profile = await getProfileInfo(credentials);
    const { email, given_name, family_name } = profile;

    const query_find_user = `SELECT first_name, last_name, email, is_admin, password, id, intake FROM persons WHERE email = '${email}'`;
    let users = await db.query(query_find_user);

    if (isEmpty(users)) {
      const query_insert_user =
        "INSERT INTO persons (first_name, last_name, email, password, id, intake) VALUES ($1, $2, $3, $4, $5) RETURNING *";

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("gmail", salt);

      users = await db.query(query_insert_user, [
        given_name,
        family_name,
        email,
        hashedPassword,
        credentials.id,
      ]);
    }

    return sendAuth(users[0], 200, res);
  } catch (error) {
    return next(error);
  }
};

async function getUserDetailByID(req, res, next) {
  const { id } = req.params;
  let sqlQuery = `SELECT * FROM persons WHERE id = '${id}'`;
  try {
    const result = await db.query(sqlQuery);
    res.json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

const sendAuth = (user, statusCode, res) => {
  const expiresIn = process.env.JWT_EXPIRE * 1000;
  return res.status(statusCode).json({
    success: true,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    id: user.id,
    isAdmin: user.is_admin,
    intake: user.intake,
    token: jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_SECRET,
      { expiresIn }
    ),
    expires_at: new Date(Date.now() + expiresIn),
  });
};

// @description     Update Intake Form
// @route           POST /api/auth/intake
// @access          Public
const handleUpdateIntake = async (req, res, next) => {
  try {
    const { email } = req.user;
    const { intake, gender, identify, age, reason, ideal } = req.body.formData;

    const updateQuery = `UPDATE persons SET intake=$1, gender=$2, identify=$3, age=$4, reason=$5, ideal=$6 WHERE email=$7`;

    const values = [intake, gender, identify, age, reason, ideal, email];
    await db.query(updateQuery, values);

    const query_find_user = `SELECT first_name, last_name, email, is_admin, password, intake FROM persons WHERE email = '${email}'`;
    const users = await db.query(query_find_user);

    return sendAuth(users[0], 200, res);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

// @description     Forget Password
// @route           POST /api/auth/forget-password
// @access          Public
const handleForgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return errorResponse("Please provide email", 400, res);
    }

    const query_find_user = `SELECT first_name, last_name, email, is_admin, password, id, intake FROM persons WHERE email = '${email}'`;
    const users = await db.query(query_find_user);

    if (isEmpty(users)) {
      return errorResponse("Invalid Email", 401, res);
    }
    const user = users[0];

    const resetToken = await jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "10min",
    });

    const resetUrl = `${process.env.APP_BASE_URL}/reset-password/${resetToken}`;
    const message = forgotMessage(resetUrl, user);

    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      text: message,
    });

    return res.status(200).json({
      message: `An email has been sent to ${email} with further instructions.`,
    });
  } catch (error) {
    return next(error);
  }
};

// @description     Reset Password
// @route           POST /api/auth/reset-password
// @access          Public
const handleResetPassword = async (req, res, next) => {
  try {
    const { password, resetToken } = req.body;
    const { id } = jwt.verify(resetToken, process.env.JWT_SECRET);

    if (!password) {
      return errorResponse("Please provide credential", 400, res);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updateQuery = `UPDATE persons SET password=$1 WHERE id=$2`;

    const values = [hashedPassword, id];

    await db.query(updateQuery, values);

    return res.status(200).json({ status: "Password reset successfully!" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  signIn: [handleSignIn],
  signUp: [handleSignUp],
  googleSign: [handleGoogleSign],
  updateIntake: [handleUpdateIntake],
  detail: [getUserDetailByID],
  forgetPassword: [handleForgetPassword],
  resetPassword: [handleResetPassword],
};
