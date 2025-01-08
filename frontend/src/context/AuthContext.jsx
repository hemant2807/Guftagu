import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("gupshup-user")) || null
  );
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("gupshup-user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("gupshup-user");
    }
  }, [authUser]);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
