"use client";
import { useFormik } from "formik";
import { validationSchema } from "../validationSchema";
import useSnackbar from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordValues } from "../types";
import { INITIAL_VALUES } from "@/component/handle-login/constant";
import { sendResetLink } from "../api";

const useForm = () => {
  const { displaySnackbar } = useSnackbar();

  const { mutate, isPending } = useMutation({
    mutationFn: sendResetLink,
    onSuccess: () => {
      displaySnackbar({ type: "success", message: "reset link has been sent" });
    },
    onError: () => {
      displaySnackbar({
        type: "error",
        message: "an error occer",
      });
    },
  });

  const formik = useFormik<ForgotPasswordValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      mutate(values);
    },
    validationSchema,
    validateOnMount: true,
  });

  return { formik, isPending };
};

export default useForm;
