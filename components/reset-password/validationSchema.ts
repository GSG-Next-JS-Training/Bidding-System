import * as Yup from "yup";

export const validationSchema = Yup.object({
  string: Yup.string()
    .required("Email is required"),
});