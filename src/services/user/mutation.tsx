import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  authUser,
  createUser,
  updateUser,
  ressetPassword,
  getSendMail,
  ressetPasswordAuth,
} from "./api";
import { Auth } from "../../types/Auth";
import { Resset } from "../../types/Resset";
import { UserCreate } from "../../types/UserCreate";

import { useAuth } from "../../context/AuthContext";

export function useAuthUser() {
  const { setValue_ }: any = useAuth();

  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationKey: ["auth/login"],
    mutationFn: (data: Auth) => {
      return authUser(data);
    },

    onSettled: async (data, error) => {
      console.log(data);
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
    onError: (error) => {
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
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["profile", { id: variables.id }],
        });
      }
    },
  });
}
export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { setValue_ }: any = useAuth();
  return useMutation({
    mutationFn: (data: Resset) => ressetPassword(data),
    onSettled: async (data, error, variables) => {
      console.log(data);
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: [
            "passwordchange",
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
    onSuccess: async (data) => {
      localStorage.setItem("token", data.data.tocken);
      setValue_(data.data.tocken);
    },
  });
}
export function useUpdatePasswordAuth() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Resset) => ressetPasswordAuth(data),
    onSettled: async (data, error, variables) => {
      console.log(data);
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: [
            "auth/updatePassword",

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
