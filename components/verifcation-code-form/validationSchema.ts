import * as Yup from "yup";

export const validationSchema = Yup.object({
  string: Yup.string()
    .required("Code is required check your email"),
});