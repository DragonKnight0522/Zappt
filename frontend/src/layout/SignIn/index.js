import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

import { AuthState } from "../../context/AuthProvider";
import notify from "../../utils/notify";
import { googleSign, signIn } from "../../utils/api";
import GoogleLogin from "./GoogleLogin";
import { isEmpty } from "../../utils/util";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (!credentials.email || !credentials.password) {
      setIsLoading(false);
      return notify("Please Fill all the Feilds", "warn");
    }

    try {
      const data = await signIn(credentials);
      handleSignSuccess(data);
    } catch (error) {
      setIsLoading(false);
      return notify("Internal server error", "error");
    }
  };

  const handleGoogleLogin = async (credentials) => {
    try {
      const data = await googleSign(credentials);
      handleSignSuccess(data);
    } catch (error) {
      setIsLoading(false);
      return notify("Internal server error", "error");
    }
  };

  const handleSignSuccess = (data) => {
    if (data.success) {
      localStorage.setItem("auth", JSON.stringify(data)); // Save auth details in local storage
      setAuth(data);
      setIsLoading(false);
      navigate(-1); // Go to page user was previously on
      // navigate(0);
      return notify("You are successfully logged in", "success");
    } else {
      setIsLoading(false);
      return notify(data.error, "warn");
    }
  };

  return (
    <Form className="w-sm-50 m-auto" onSubmit={loginHandler}>
      <h3 className="text-center mb-5">Login to Your Account</h3>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          tabIndex="1"
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
          tabIndex="2"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="my-3 text-end" controlId="signUp">
        <Link
          to="/forget-password"
          tabIndex="5"
          className="text-decoration-none"
        >
          Forget Password
        </Link>
      </Form.Group>

      <Button type="submit" tabIndex="3" className="mb-3" disabled={isLoading}>
        {isLoading ? (
          <Spinner animation="border" role="status" size="sm" />
        ) : (
          "Continue"
        )}
      </Button>

      <GoogleLogin handleGoogleLogin={handleGoogleLogin} useOneTap />

      <Form.Group className="my-3 text-center" controlId="signUp">
        <span>
          Don't have an account?&nbsp;
          <Link to="/signUp" tabIndex="5" className="text-decoration-none">
            SignUp now
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
};

export default SignIn;
