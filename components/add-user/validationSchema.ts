import * as Yup from "yup";

export const validationSchema = Yup.object({
  fullName: Yup.string().required("name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  address: Yup.string().required("Address is required"),
  birthDate: Yup.date().required("Birth date is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 to 15 digits")
    .required("Phone number is required"),
  confirmEmail: Yup.boolean(),
  role: Yup.string()
    .oneOf(["bedding-company", "offer-company", "admin"], "Invalid role")
    .required("Role is required"),
});
