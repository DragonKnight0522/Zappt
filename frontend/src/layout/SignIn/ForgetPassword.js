import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { AuthState } from "../../context/AuthProvider";
import notify from "../../utils/notify";
import { forgetPassword } from "../../utils/api";
import { isEmpty } from "../../utils/util";

const ForgetPassword = () => {
  const [credentials, setCredentials] = useState({ email: "" });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { auth } = AuthState();

  useEffect(() => {
    if (!isEmpty(auth)) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [auth]);

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (!credentials.email) {
      setIsLoading(false);
      return notify("Please Fill all the Feilds", "warn");
    }

    try {
      await forgetPassword(credentials);
      setIsLoading(false);
    } catch (error) {
      return notify("Internal server error", "error");
    }
  };

  return (
    <Form className="w-sm-50 m-auto" onSubmit={handleSubmit}>
      <h3 className="text-center mb-5">Forget Password</h3>
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

      <Button type="submit" tabIndex="3" className="mb-3" disabled={isLoading}>
        Send
      </Button>
    </Form>
  );
};

export default ForgetPassword;
