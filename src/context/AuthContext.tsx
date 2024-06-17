import { createContext, useContext, useEffect, useState, useMemo } from "react";

import AuthLogin from "../components/auth/AuthLogin.tsx";
import axios from "axios";
import { tokenDecode, isTokenExpired } from "../functions/tokenDecode";

export const AuthContext1 = createContext(null);

export const AuthContext = ({ children }) => {
  const [value, setValue_] = useState(localStorage.getItem("token") || null);

  const payload = tokenDecode(value);
  const istockenexpared = isTokenExpired(value);

  const BASE_URL = "http://localhost:3000/api";
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Authorization"] = "Bearer " + value;
  axios.defaults.headers.common["Content-Type"] = "application/json";
  useEffect(() => {
    if (istockenexpared || payload.active === 0) {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
    }
  }, [value]);

  const contextValue = useMemo(
    () => ({
      value,
      setValue_,
    }),
    [value]
  );

  if (istockenexpared || payload.active === 0) {
    return (
      <AuthContext1.Provider value={contextValue}>
        <AuthLogin />
      </AuthContext1.Provider>
    );
  } else
    return (
      <AuthContext1.Provider value={contextValue}>
        {children}
      </AuthContext1.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext1);
};
