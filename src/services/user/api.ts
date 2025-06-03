import axios from "axios";
import { Users } from "../../types/Users";
import { Auth } from "../../types/Auth";
import { Resset } from "../../types/Resset";
import { UserCreate } from "../../types/UserCreate";

const BASE_URL = "https://sakpatentapi-production.up.railway.app/api"; //"http://localhost:3000/api"; //
const axiosInstance = axios;

const axiosInstanceCheck = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsersIds = async () => {
  return (await axiosInstance.get<Users[]>("users")).data.map(
    (todo) => todo.id
  );
};
export const getUser = async (from: number) => {
  return (await axiosInstance.get(`users/limit/${from}`)).data;
};
export const getUserById = async (id: string) => {
  return (
    await axiosInstance.get<Users>(`users/${id}`, {
      withCredentials: true,
    })
  ).data;
};

export const deleteUser = async (id: number) => {
  await axiosInstance.delete(`users/${id}`);
};
export const getUserByEmail = async (email: string, id: number) => {
  return (await axiosInstance.get<Users>(`users/email/${email}/${id}`)).data;
};
export const getUserByPhone = async (phone: string, id: number) => {
  return (await axiosInstance.get<Users>(`users/phone/${phone}/${id}`)).data;
};
export const getUserByPersonal = async (
  personal_number: string,
  id: number
) => {
  return (
    await axiosInstance.get<Users>(`users/personal/${personal_number}/${id}`)
  ).data;
};
export const getUserByEmailCreate = async (email: string) => {
  return (await axiosInstance.get<Users>(`users/emailcreate/${email}`)).data;
};
export const getUserByPhoneCreate = async (phone: string) => {
  return (await axiosInstance.get<Users>(`users/phonecreate/${phone}`)).data;
};
export const getUserByPersonalCreate = async (presonal: string) => {
  return (await axiosInstance.get<Users>(`users/personalCreate/${presonal}`))
    .data;
};
export const createUser = async (data: UserCreate) => {
  return axiosInstance.post("users/create", data);
};
export const authUser = async (data: Auth) => {
  return await axiosInstance.post("auth/login", data);
};
export const updateUser = async (data: any) => {
  // let getToken = localStorage.getItem("token");
  // const axiosInstanceFile = axios.create({
  //   baseURL: BASE_URL,
  //   headers: {
  //     Authorization: `Bearer ${getToken}`,
  //     "Content-Type": "multipart/form-data",
  //   },
  // });
  return await axiosInstance.patch(`users/update`, data);
};
export const ressetPassword = async (data: Resset) => {
  return await axiosInstance.patch(`users/updatePassword`, data);
};
export const ressetPasswordAuth = async (data: Resset) => {
  const axiosInstanceStatus = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${data.tocken}`,
      "Content-Type": "application/json",
    },
  });
  return await axiosInstanceStatus.patch(`users/updatePassword`, data);
};
export const getStauts = async (tocken: string) => {
  const axiosInstanceStatus = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${tocken}`,
      "Content-Type": "application/json",
    },
  });
  return await axiosInstanceStatus.get(`auth/status`);
};
export const getSendMail = async (email: string) => {
  return await axiosInstance.get(`sendmail/ressetpassword/${email}`);
};
export const getStatusUser = async (tocken: string) => {
  return (
    await axiosInstanceCheck.get(`users/check/${tocken}`, {
      withCredentials: true,
    })
  ).data;
};
