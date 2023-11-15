import React from "react";
import "./Menu.css";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthState, SidebarState } from "../../context/AuthProvider";
import { googleLogout } from "@react-oauth/google";
import Offcanvas from "react-bootstrap/Offcanvas";

/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */

export const Menu = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const { auth, setAuth } = AuthState();
  const { isSidebarOpen, setSidebarOpen } = SidebarState();
  const handleAnyClick = () => {
    setSidebarOpen(false);
  };

  React.useEffect(() => {
    // Google Analytics
    setSidebarOpen(false);
    // eslint-disable-next-line
  }, [location.pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("auth");
    googleLogout();
    setAuth({});
    navigate("/");
  };

  return (
    <Offcanvas show={isSidebarOpen} onHide={setSidebarOpen}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <nav className="navbar navbar-dark align-items-start p-0">
          <div className="container-fluid d-flex flex-column p-0">
            <div>
              <img
                src={require("../../images/zappt-logo.png")}
                style={{
                  width: "auto",
                  height: "60px",
                  color: "black",
                }}
                alt="zappt"
              />
            </div>
            <Link
              className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
              to="/"
            >
              <div className="sidebar-brand-text mx-3 mt-3">
                <span>
                  <h3 className="header-item">Home</h3>
                </span>
              </div>
            </Link>
            <hr className="sidebar-divider my-0" />
            <ul className="w-100" id="accordionSidebar">
              <li className="nav-item" onClick={handleAnyClick}>
                <Link className="nav-link" to="/search">
                  <span className="oi oi-dashboard" />
                  &nbsp;Search
                </Link>
              </li>
              {auth?.isAdmin && (
                <li className="nav-item" onClick={handleAnyClick}>
                  <Link className="nav-link" to="/food">
                    <span className="oi oi-layers" />
                    &nbsp;Admin
                  </Link>
                </li>
              )}
              {auth?.success ? (
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={handleSignOut}>
                    <span className="oi oi-layers" />
                    &nbsp;Sign Out
                  </a>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signIn">
                      <span className="oi oi-layers" />
                      &nbsp;Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signUp">
                      <span className="oi oi-layers" />
                      &nbsp;Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="text-center d-none d-md-inline"></div>
          </div>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
