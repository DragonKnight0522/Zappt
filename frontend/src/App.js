import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Layout } from "./layout/Layout";
import AuthProvider from "./context/AuthProvider";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
const App = () => {
  const routes = useRoutes([
    {
      path: "/*",
      element: (
        <AuthProvider>
          <Layout />
        </AuthProvider>
      ),
    },
  ]);
  return routes;
};

export default App;
