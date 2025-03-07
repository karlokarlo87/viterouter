import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { tokenDecode, isTokenExpired } from "../functions/tokenDecode";

export const AuthContext1 = createContext({});

export const AuthContext = ({ children }: any) => {
  const [auth, setIsAuth] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [value1, setValue_] = useState(localStorage.getItem("token") || null);
  const payload = tokenDecode(value1);
  const istockenexpared = isTokenExpired(value1);

  const BASE_URL =  "https://shopapi-production-be4f.up.railway.app/api"; // "https://shoppingcart.ge/api";
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Authorization"] = "Bearer " + value1;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  useEffect(() => {
    if (istockenexpared || payload.active === 0) {
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("token");
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [value1]);

  axios.interceptors.response.use(
    (response) => {
      setIsAuth(true);
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        setIsAuth(false);
      }
    }
  );

  return (
    <AuthContext1.Provider value={{ value1, setValue_, auth }}>
      {children}
    </AuthContext1.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext1);
};
