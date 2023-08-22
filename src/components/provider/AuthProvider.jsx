import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext("");
// type Props = {
//   children: string | JSX.Element | JSX.Element[];
// };

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState();

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["accessToken"] = token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["accessToken"];
      localStorage.removeItem("token");
    }
  }, [token]);

  // Memoized value of the authentication context
  // Optimization technique used when calling values and func
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
