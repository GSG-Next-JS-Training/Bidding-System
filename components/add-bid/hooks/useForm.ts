"use client";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import useSnackbar from "@/hooks/useSnackbar";
import { validationSchema } from "../validationSchema";
import { FormValues } from "../types";
import { INITIAL_VALUES } from "../constant";
import { addBidding } from "../api";

const useForm = () => {
  const { displaySnackbar } = useSnackbar();

  const { mutate: submitBid, isPending } = useMutation({
    mutationFn: addBidding,
    onSuccess: () => {
      displaySnackbar({ type: "success", message: "Bid submitted successfully" });
    },
    onError: () => {
      displaySnackbar({ type: "error", message: "Failed to submit bid" });
    },
  });

  const formik = useFormik<FormValues>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
        submitBid(values);
    },
  });

  return { formik, isPending };
};

export default useForm;