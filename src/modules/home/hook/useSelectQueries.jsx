import { useQueries } from "@tanstack/react-query";
import supabase from "../../../config/supabase";
export default function useSelectQueries() {
  const [categoryQuery, brandQuery] = useQueries({
    queries: [
      {
        queryKey: ["categories"],
        queryFn: () => supabase.from("category").select(),
        select: (res) => res.data,
      },
      {
        queryKey: ["brands"],
        queryFn: () => supabase.from("brand").select(),
        select: (res) => res.data,
      },
    ],
  });
  return [categoryQuery, brandQuery]
}