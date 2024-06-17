import { createContext, useContext, useState } from "react";

//import AuthLogin from "../components/auth/AuthLogin.tsx";
import axios from "axios";
//import { tokenDecode, isTokenExpired } from "../functions/tokenDecode";

export const AuthContext1 = createContext({});

export const AuthContext = ({ children }: any) => {
  //const [value1, setValue_] = useState(localStorage.getItem("token") || null);
  const [value1, setValue_] = useState(localStorage.getItem("token") || null);
  //const payload = tokenDecode(value1);
  //const istockenexpared = isTokenExpired(value1);
  console.log(axios);
  // const BASE_URL = "https://shoppingcart.ge/api";
  // axios.defaults.baseURL = BASE_URL;
  // axios.defaults.headers.common["Authorization"] = "Bearer " + value1;
  // axios.defaults.headers.common["Content-Type"] = "application/json";

  // useEffect(() => {
  //   if (istockenexpared || payload.active === 0) {
  //     axios.defaults.headers.common["Authorization"] = "";
  //     localStorage.removeItem("token");
  //   }
  // }, [value1]);

  // const contextValue = useMemo(
  //   () => ({
  //     value1,
  //     setValue_,
  //   }),
  //   [value1]
  // );
  return (
    <AuthContext1.Provider value={{ value1, setValue_ }}>
      {children}
    </AuthContext1.Provider>
  );

  // if (istockenexpared || payload.active === 0) {
  //   return (
  //     <AuthContext1.Provider value={{ value1, setValue_ }}>
  //       {children}
  //     </AuthContext1.Provider>
  //   );
  // } else
  //   return (
  //     <AuthContext1.Provider value={{ value1, setValue_ }}>
  //       {children}
  //     </AuthContext1.Provider>
  //   );
};

export const useAuth = () => {
  return useContext(AuthContext1);
};
