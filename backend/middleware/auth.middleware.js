const jwt = require("jsonwebtoken");
const db = require("../config/postgredb");
const { errorResponse } = require("../utils/util");

module.exports = async (req, res, next) => {
  const authorization = req.header("Authorization");
  if (authorization) {
    let token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    // // Check if user already exists in our DB
    // const query_find_user = `SELECT first_name, last_name, email FROM persons WHERE email = '${decode.email}'`;
    // const user = await db.query(query_find_user);

    // if (user) {
    req.user = decode;
    next();
    // } else {
    //   return errorResponse("User Not Found", 401, res);
    // }
  } else {
    return errorResponse("Authorization header is not found", 401, res);
  }
};
