import axios from "axios";
 
 
 
const axiosInstance = axios;
import { Cat } from "../../types/Cat";
 

export const getCatsIds = async () => {
  
  return (await axiosInstance.get("cat/all")).data;
};
export const createCat = async (data:Cat) => {
  return axiosInstance.post("cat/create", data);
};


