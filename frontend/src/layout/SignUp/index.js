import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { AuthState } from "../../context/AuthProvider";
import notify from "../../utils/notify";
import { googleSign, setAPIHeader, signUp } from "../../utils/api";
import GoogleLogin from "../SignIn/GoogleLogin";
import { v4 as uuidv4 } from "uuid";
import { isEmpty } from "../../utils/util";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  useEffect(() => {
    if (!isEmpty(auth)) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [auth]);

  const handleCredentials = (e) => {
    if (!credentials.id) {
      const myUUID = uuidv4();
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
        id: myUUID,
      });
    } else {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
      });
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (
      !credentials.firstName ||
      !credentials.lastName ||
      !credentials.email ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      setIsLoading(false);
      return notify("Please Fill all the Feilds", "warn");
    }

    // If password and confirm password doesn't match
    if (credentials.password !== credentials.confirmPassword) {
      setIsLoading(false);
      return notify("Passwords Do Not Match", "warn");
    }

    // If password is less than 8 characters
    if (credentials.password.length < 8) {
      setIsLoading(false);
      return notify("Password must be at least 8 characters", "warn");
    }

    try {
      // Register user
      const data = await signUp(credentials);
      handleSignUpSuccess(data);
    } catch (error) {
      setIsLoading(false);
      return notify("Internal server error", "error");
    }
  };

  const handleGoogleSignUp = async (credentials) => {
    try {
      const data = await googleSign(credentials);
      handleSignUpSuccess(data);
    } catch (error) {
      setIsLoading(false);
      return notify("Internal server error", "error");
    }
  };

  const handleSignUpSuccess = (data) => {
    if (data.success) {
      localStorage.setItem("auth", JSON.stringify(data));
      setAuth(data);
      setIsLoading(false);
      setAPIHeader(data.token);
      navigate(-1); // Go to page user was previously on
      return notify("Your account has been successfully created", "success");
    } else {
      setIsLoading(false);
      return notify(data.error, "error");
    }
  };

  return (
    <Form className="w-sm-50 m-auto" onSubmit={registerHandler}>
      <h2 className="text-center mb-5">Create new account</h2>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          tabIndex="1"
          placeholder="First name"
          value={credentials.firstName}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          tabIndex="1"
          placeholder="Last name"
          value={credentials.lastName}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          tabIndex="2"
          placeholder="Enter email"
          value={credentials.email}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          tabIndex="3"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          tabIndex="4"
          placeholder="Confirm password"
          value={credentials.confirmPassword}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Button tabIndex="6" type="submit" className="mb-3" disabled={isLoading}>
        {isLoading ? (
          <Spinner animation="border" role="status" size="sm" />
        ) : (
          "Create Account"
        )}
      </Button>

      <GoogleLogin handleGoogleLogin={handleGoogleSignUp} />

      <Form.Group className="mb-3 text-center" controlId="signIn">
        <span>
          Already have an account?&nbsp;
          <Link to="/signIn" tabIndex="6" className="text-decoration-none">
            Sign In
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
};

export default SignUp;
