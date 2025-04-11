import * as Yup from "yup";
export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().min(5).required("description is required").trim(),
});
