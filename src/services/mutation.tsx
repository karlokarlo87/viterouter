import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useAuth } from "../context/AuthContext";
import {
  authUser,
  createUser,
  updateUser,
  ressetPassword,
  getSendMail,
} from "./api";
import { Auth } from "../types/Auth";
import { Resset } from "../types/Resset";
import { UserCreate } from "../types/UserCreate";

export function useAuthUser() {
  const { setValue_ } = useAuth();

  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationKey: ["auth/login"],
    mutationFn: (data: Auth) => {
      return authUser(data);
    },

    onSettled: async (data, error) => {
      if (data?.data.status == 400) {
        return await queryClient.invalidateQueries({
          queryKey: ["auth/login"],
        });
      } else {
        if (!error) {
        }
      }
    },
    onSuccess: async (data) => {
      if (data?.data.status != 401 && data?.data.status != "deactivate") {
        localStorage.setItem("token", data?.data);
        setValue_(data?.data);
      }
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(error);
    },
  });

  return loginMutation;
}
export function useCreateUser() {
  return useMutation({
    mutationKey: ["users/create"],

    mutationFn: async (data: UserCreate) => {
      await createUser(data);
    },

    onSettled: (data, error) => {
      console.log(data);
      console.log(error);
    },
  });
}
export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => updateUser(data),
    onSettled: async (_, error, variables) => {
      console.log(variables);
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["users/update", { id: variables.id }],
        });
      }
    },
  });
}
export function useUpdatePassword() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Resset) => ressetPassword(data),
    onSettled: async (data, error, variables) => {
      console.log(data);
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: [
            "users/updatePassword",
            {
              password: variables.password,
              ressetPassword: variables.repeatpassword,
              tocken: variables.tocken,
              passwort_update: variables.passwort_update,
            },
          ],
        });
      }
    },
  });
}
export function useEamilFindUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => getSendMail(data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: [
            "users/email",
            {
              variables,
            },
          ],
        });
      }
    },
  });
}
export function useSendMail() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: string) => getSendMail(data),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: [
            "auth/sendemail",
            {
              variables,
            },
          ],
        });
      }
    },
  });
}
