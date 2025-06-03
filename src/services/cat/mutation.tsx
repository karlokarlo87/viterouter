import { useMutation } from "@tanstack/react-query";

import {
  createCat,
 
} from "./api";

import { Cat } from "../../types/Cat";
 

 
 
export function useCreateCat() {
  return useMutation({
    mutationKey: ["categories/"],
    mutationFn: async (data: Cat) => {
      console.log(data);
      await createCat(data);
    },
    onSettled: (data, error) => {
      console.log(data);
      console.log(error);
    },
  });
}
 
 

 
 
