import { useMutation } from "@tanstack/react-query";
import { UserCreate } from "../../types/UserCreate";
import { createUser } from "./api";

export function useCreateUser() {
  return useMutation({
    mutationKey: ["auth/reg"],

    mutationFn: async (data: UserCreate) => {
      await createUser(data);
    },

    onSettled: (data, error) => {
      console.log(data);
      console.log(error);
    },
  });
}
