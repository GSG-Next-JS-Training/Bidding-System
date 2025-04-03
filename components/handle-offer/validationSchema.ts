import * as Yup from "yup";
export const validationSchema = Yup.object({
    name: Yup.string().min(3,"Name must be at least 3 characters").required("Company Name is required"),
    number: Yup.string()
        .matches(/^[0-9]+$/, "Only numbers are allowed")
        .min(10, "Number must be  10 characters")
        .required("Required"),
    location: Yup.string().required("Location is required"),
    discount: Yup.number()
        .min(0, "Discount cannot be negative")
        .max(100, "Discount cannot exceed 100%")
        .required("Discount is required"), 
    service: Yup.string()
        .min(5, "Service description must be at least 5 characters")
        .required("Service is required"),
    
})