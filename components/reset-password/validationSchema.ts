import * as Yup from "yup";

export const validationSchema = Yup.object({
  password: Yup.string().required("Email is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
