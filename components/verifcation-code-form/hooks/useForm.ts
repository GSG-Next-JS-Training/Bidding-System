"use client";
import { useFormik } from "formik";
import { validationSchema } from "../validationSchema";
import useSnackbar from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { VerifcationCodeValues } from "../types";
import { INITIAL_VALUES } from "../constants";
import { checkVerficationCode } from "../api";
import { useRouter } from "next/navigation";

const useForm = () => {
  const router = useRouter();
  

  const { displaySnackbar } = useSnackbar();

  const { mutate, isPending } = useMutation({
    mutationFn: checkVerficationCode,
    onSuccess: () => {
      displaySnackbar({message:"password reset succefully ", type: "success"});
      setTimeout(()=>{router?.push("/reset-password")},3000)
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
      mutate(values);
    },
    validationSchema,
    validateOnMount: true,
  });

  return { formik, isPending };
};

export default useForm;
