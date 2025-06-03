import { UserCreate } from "../../types/UserCreate";
import axios from "axios";

export interface News {
  id: number;
  name: string;
}

const BASE_URL2 = "https://658c1908859b3491d3f579ee.mockapi.io/api/v1"; //"http://localhost:3000/api"; //

const axiosInstanceCheck = axios.create({
  baseURL: BASE_URL2,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (data: UserCreate) => {
  return axios.post("users/create", data);
};

export const getNews = async () => {
  return (await axiosInstanceCheck.get<News>(`news`)).data;
};
