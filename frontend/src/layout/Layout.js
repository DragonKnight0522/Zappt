import React, { useEffect } from "react";
import { Menu } from "./Menu/Menu";
import RoutesPicker from "./RoutesPicker";
import { ToastContainer } from "react-toastify";
import { AuthState } from "../context/AuthProvider";
import MHeader from "../design_system/MHeader";
import ReactGA from "react-ga";
import { setAPIHeader } from "../utils/api";
import { isEmpty } from "../utils/util";

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID, {
  // debug: true,
});

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

export const Layout = () => {
  const { setAuth } = AuthState();
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!isEmpty(auth)) {
      const authData = JSON.parse(auth);
      setAuth(authData);
      if (authData?.token) {
        setAPIHeader(authData?.token);
      }
    }
  }, [setAuth]);

  return (
    <div>
      <MHeader />
      <div className="container-fluid homepage-bgimage h-100 px-sm-5 py-3">
        <Menu />
        <div className="container-xl mt-5">
          <RoutesPicker />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
