"use client";
import { useFormik } from "formik";
import { FormValues } from "../type";
import { INITIAL_FORM } from "../constant";
import { validationSchema } from "../validationSchema";

const OfferFormik = () => {
  const formik = useFormik<FormValues>({
    initialValues: INITIAL_FORM,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  return { formik };
};
export default OfferFormik;
