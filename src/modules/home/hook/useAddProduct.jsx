import { useMutation } from "@tanstack/react-query";
import supabase from "../../../config/supabase";

export default function useAddProduct({ onSuccess }) {
    const addProductMutation = useMutation({

        mutationFn: (newProduct) => supabase.from("product").insert(newProduct),
        ...options,
    });
    return addProductMutation;
}