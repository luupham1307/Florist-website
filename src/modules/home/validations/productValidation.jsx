import * as yup from "yup";
export const productSchema = yup
    .object({
        title: yup
            .string()
            .required("Please enter a title")
            .min(10, "Length at least 10 characters")
            .max(70, "Length limits 70 characters"),
        price: yup
            .number()
            .typeError("Please choose a price")
            .required("Please choose a price")
            .positive("Number must be positive"),
        description: yup
            .string()
            .required("Please choose a description")
            .min(30, "Length at least 30 characters")
            .max(300, "Length limits 300 characters"),
        category_id: yup
            .mixed()
            .oneOf([1, 2, 3, 4], "Please choose a category")
            .required("Please choose a category"),
        brand_id: yup
            .mixed()
            .oneOf([1, 2, 3, 4], "Please choose a brand")
            .required("Please choose a brand"),
        imageFile: yup.mixed().required("Please choose a image file")
    })
    .required();