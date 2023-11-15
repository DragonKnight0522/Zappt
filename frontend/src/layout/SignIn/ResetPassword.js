import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { AuthState } from "../../context/AuthProvider";
import notify from "../../utils/notify";
import { resetPassword } from "../../utils/api";
import { isEmpty } from "../../utils/util";

const ResetPassword = () => {
  const [credentials, setCredentials] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const param = useParams();
  const { auth } = AuthState();

  const { resetToken } = param;

  useEffect(() => {
    if (!isEmpty(auth)) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [auth]);

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (!credentials.password || !credentials.confirmPassword) {
      setIsLoading(false);
      return notify("Please Fill the Password", "warn");
    }

    // If password and confirm password doesn't match
    if (credentials.password !== credentials.confirmPassword) {
      setIsLoading(false);
      return notify("Passwords Do Not Match", "warn");
    }

    try {
      await resetPassword({ resetToken, password: credentials.password });
      setIsLoading(false);
      notify("Password Reset Success!", "success");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      return notify("Internal server error", "error");
    }
  };

  return (
    <Form className="w-sm-50 m-auto" onSubmit={handleResetPassword}>
      <h3 className="text-center mb-5">Reset Password</h3>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          tabIndex="1"
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
          tabIndex="2"
          placeholder="Confirm password"
          value={credentials.confirmPassword}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Button type="submit" tabIndex="3" className="mb-3" disabled={isLoading}>
        Continue
      </Button>
    </Form>
  );
};

export default ResetPassword;
