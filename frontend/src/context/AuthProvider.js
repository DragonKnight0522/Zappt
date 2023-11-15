import { useContext, useState } from "react";
import { createContext } from "react";
import { isEmpty } from "../utils/util";

const AuthContext = createContext();
const SidebarContext = createContext();
const DataContext = createContext();

const AuthProvider = ({ children }) => {
  // If "auth" !== null and token is not expired, save the auth details inside "auth" state else set it to null
  const [auth, setAuth] = useState(
    !isEmpty(localStorage.getItem("auth")) &&
      new Date() < new Date(JSON.parse(localStorage.getItem("auth")).expires_at)
      ? JSON.parse(localStorage.getItem("auth"))
      : null
  );
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
        <DataContext.Provider value={{ tableData, setTableData }}>
          {children}
        </DataContext.Provider>
      </SidebarContext.Provider>
    </AuthContext.Provider>
  );
};

export const AuthState = () => {
  return useContext(AuthContext);
};

export const SidebarState = () => {
  return useContext(SidebarContext);
};

export const DataState = () => {
  return useContext(DataContext);
};

export default AuthProvider;
