"use client";
import { useFormik } from "formik";
import { validationSchema } from "../validationSchema";
import { INITIAL_VALUES } from "../constant";
import { IBiddingCompany } from "../types";
import useSnackbar from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { addBiddingCompany } from "../api";

const useBiddingForm = () => {
  const { displaySnackbar } = useSnackbar();
  
  const { mutate: submitCompany, isPending } = useMutation({
    mutationFn: addBiddingCompany,
    onSuccess: () => {
      displaySnackbar({ type: "success", message: "Company added successfully" });
    },
    onError: () => {
      displaySnackbar({ type: "error", message: "Failed to add company" });
    },
  });

  const formik = useFormik<IBiddingCompany>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      submitCompany(values);
    },
  });

  return { formik, isPending };
};

export default useBiddingForm;