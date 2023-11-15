import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { useRoutes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { BoysNight } from "./BoysNight";
import { Dates } from "./Dates";
import { Events } from "./Events";
import { Food } from "./Food/Food";
import { GirlsNight } from "./GirlsNight";
import { Search } from "./Search";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Detail from "./Food/Detail";
import UserPage from "./User";
import { AuthState } from "../context/AuthProvider";
import ForgetPassword from "./SignIn/ForgetPassword";
import ResetPassword from "./SignIn/ResetPassword";

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
// function RoutesPicker() {
//   return (
//     <Routes>
//       <Route exact={true} path="/">
//         <Navigate to={"/dashboard"} />
//       </Route>
//       <Route exact={true} path="/boysnight" element={<BoysNight/>}>
//       </Route>
//       <Route exact={true} path="/dates" element={<Dates/>}>
//       </Route>
//       <Route exact={true} path="/events" element={<Events/>}>
//       </Route>
//       <Route exact={true} path="/dashboard" element={<Dashboard/>}>
//       </Route>
//       <Route exact={true} path="/food" element={<Food/>}>
//       </Route>
//       <Route exact={true} path="/girlsnight" element={<GirlsNight/>}>
//       </Route>
//     </Routes>
//   );
// }

const PrivateRoute = ({ path, element }) => {
  const { auth } = AuthState();
  return auth !== null && new Date() < new Date(auth.expires_at) ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace state={{ from: path }} />
  );
};

const AdminPrivateRoute = ({ path, element }) => {
  const { auth } = AuthState();
  return auth !== null &&
    new Date() < new Date(auth.expires_at) &&
    auth.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace state={{ from: path }} />
  );
};

const RoutesPicker = () => {
  const routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/signIn", element: <SignIn /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/reset-password/:resetToken", element: <ResetPassword /> },
    { path: "/signUp", element: <SignUp /> },
    { path: "/search", element: <Search /> },
    {
      path: "",
      element: <PrivateRoute />,
      children: [
        { path: "food/:id", element: <Detail /> },
        { path: "auth/:id", element: <UserPage /> },

        { path: "boysnight", element: <BoysNight /> },
        { path: "dates", element: <Dates /> },
        { path: "events", element: <Events /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "girlsnight", element: <GirlsNight /> },
      ],
    },
    {
      path: "",
      element: <AdminPrivateRoute />,
      children: [{ path: "food", element: <Food /> }],
    },
  ]);

  return routes;
};

export default RoutesPicker;
