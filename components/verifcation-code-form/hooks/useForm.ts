"use client";
import { useFormik } from "formik";
import { validationSchema } from "../validationSchema";
import useSnackbar from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { VerifcationCodeValues } from "../types";
import { INITIAL_VALUES } from "../constants";
import { checkVerficationCode } from "../api";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store";

const useForm = () => {
  const router = useRouter();
  const { displaySnackbar } = useSnackbar();
  const { email } = useAppSelector((state) => state.email);

  const { mutate, isPending } = useMutation({
    mutationFn: checkVerficationCode,
    onSuccess: () => {
      displaySnackbar({
        message: "password reset succefully ",
        type: "success",
      });
      setTimeout(() => {
        router?.push("/reset-password");
      }, 3000);
    },
    onError: () => {
      displaySnackbar({
        type: "error",
        message: "an error occurred",
      });
    },
  });

  const formik = useFormik<VerifcationCodeValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      mutate({ code: values.code, email });
    },
    validationSchema,
    validateOnMount: true,
  });

  return { formik, isPending };
};

export default useForm;
