import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import notify from "../../utils/notify";

const google = ({ handleGoogleLogin, ...props }) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        handleGoogleLogin(credentialResponse);
      }}
      onError={() => {
        notify("Login Failed", "error");
      }}
      text="continue_with"
      auto_select
      {...props}
    />
  );
};

export default google;
