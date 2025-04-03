"use client";
import { useFormik } from "formik";
import { FormValues } from "../type";
import { INITIAL_FORM } from "../constant";
const offerFormik = () => {
  const formik = useFormik<FormValues>({
    initialValues: INITIAL_FORM,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  return { formik };
};
export default offerFormik;
