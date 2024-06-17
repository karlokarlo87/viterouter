import { useQuery } from "@tanstack/react-query";
import {
  getUsersIds,
  getUser,
  getUserByEmail,
  getUserById,
  getStauts,
  getUserByPhone,
  getStatusUser,
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
    staleTime: Infinity,
    //refetchInterval: 1000,
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
export function cheskstatusUser(tocken: string) {
  return useQuery({
    queryKey: ["user/check", { tocken }],
    queryFn: async () => await getStatusUser(tocken),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
}
// export function useSendMail(email: string) {
//   return useQuery({
//     queryKey: ["auth/sendemail/", { email }],
//     queryFn: async () => await getSendMail(email),
//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//   });
// }

// export function useUsers(id: any) {
//   return useQueries({
//     queries: (id ?? []).map((id) => {
//       return {
//         queryKey: ["users", { id }],
//         queryFn: () => getUser(id!),
//       };
//     }),
//   });
// }
