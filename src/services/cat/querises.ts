import { useQuery } from "@tanstack/react-query";
import {
  getCatsIds,
} from "./api";

 
 

export function useCatById() {
  return useQuery({
    queryKey: ["categories/"],
    queryFn: async () => await getCatsIds(),
    refetchOnWindowFocus: false,
  });
}
 