import { createContext, useContext, useEffect, useState } from "react";

//import AuthLogin from "../components/auth/AuthLogin.tsx";
import axios from "axios";
import { tokenDecode, isTokenExpired } from "../functions/tokenDecode";

export const AuthContext1 = createContext({});

export const AuthContext = ({ children }: any) => {
  const [auth, setIsAuth] = useState(true);
  const [value1, setValue_] = useState(localStorage.getItem("token") || null);
  const payload = tokenDecode(value1);
  const istockenexpared = isTokenExpired(value1);

  const BASE_URL = "http://localhost:3000/api"; // "https://shoppingcart.ge/api";
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
      // Handle other errors here
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
