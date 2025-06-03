import { useQuery } from "@tanstack/react-query";
import {
  getUsersIds,
  getUser,
  getUserByEmail,
  getUserById,
  getStauts,
  getUserByPhone,
  getStatusUser,
  getUserByEmailCreate,
  getUserByPhoneCreate,
  getUserByPersonalCreate,
  getUserByPersonal,
} from "./api";

export function useUsersIds() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsersIds,
  });
}
export function useUsersId(from: number) {
  return useQuery({
    queryKey: ["users/limit", { from }],
    queryFn: async () => await getUser(from!),
    staleTime: Infinity,
    refetchInterval: 2000,
  });
}

export function useUserById(id: string) {
  return useQuery({
    queryKey: ["users/", { id }],
    queryFn: async () => await getUserById(id),
    refetchOnWindowFocus: false,
  });
}

export function cheskstatus(tocken: string) {
  return useQuery({
    queryKey: ["auth/status"],
    queryFn: async () => await getStauts(tocken),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function EamilFindUser(email: string, id: number) {
  if (email == "") email = " ";
  return useQuery({
    queryKey: ["users/email", { email, id }],
    queryFn: async () => await getUserByEmail(email, id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function PhoneFindUser(phone: string, id: number) {
  if (phone == "") phone = " ";
  return useQuery({
    queryKey: ["users/phone", { phone, id }],
    queryFn: async () => await getUserByPhone(phone, id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function PersonalFindUser(personal_number: string, id: number) {
  if (personal_number == "") personal_number = " ";
  return useQuery({
    queryKey: ["users/phone", { personal_number, id }],
    queryFn: async () => await getUserByPersonal(personal_number, id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function EamilFindUserCreate(email: string) {
  if (email == "") email = " ";
  return useQuery({
    queryKey: ["users/emailcreate", { email }],
    queryFn: async () => await getUserByEmailCreate(email),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function PhoneFindUserCreate(phone: string) {
  if (phone == "") phone = " ";
  return useQuery({
    queryKey: ["users/phonecreate", { phone }],
    queryFn: async () => await getUserByPhoneCreate(phone),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function PersonalFindUserCreate(presonal: string) {
  if (presonal == "") presonal = " ";
  return useQuery({
    queryKey: ["users/phonecreate", { presonal }],
    queryFn: async () => await getUserByPersonalCreate(presonal),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
export function cheskstatusUser(tocken: string) {
  return useQuery({
    queryKey: ["user/check", { tocken }],
    queryFn: async () => await getStatusUser(tocken),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
