import { AsyncLocalStorage } from "async_hooks";
import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

// A context object which can share the auth state between components
const AuthContext = createContext();

// Now we initiate the actual provider
// Which in its turn provide the auth context
const AuthProvider = ({ children }) => {
  // Defining token state from localStorage
  const [token, setToken_] = useState(localStorage.getItem("token"));

  // setToken will be used to update the token
  const setToken = (newToken: string) => {
    setToken_(newToken);
  };
  // This will extract the token from the headers
  // and store it in localStorage
  // If it doesnt exist it deletes it from localStorage and axios
  // Also runs whenever the token value changes

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["accessToken"] = token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["accessToken"];
      localStorage.removeItem("token");
    }
  }, [token]);

  /*memoization is an optimization technique 
        that makes applications more efficient and hence faster. 
        It does this by storing computation results in cache, 
        and retrieving that same information from the cache the next time it's 
        needed instead of computing it again*/
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  //
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Accessing auth context custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
