import { useQuery } from "@tanstack/react-query";
import { getNews } from "./api";

export function useNews() {
  return useQuery({
    queryKey: ["users/list"],
    queryFn: async () => await getNews(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    //refetchInterval: 2000,
  });
}
