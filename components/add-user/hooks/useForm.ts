"use client";
import { useFormik } from "formik";
import useSnackbar from "@/hooks/useSnackbar";
import { IUser } from "../types";
import { INITIAL_VALUES } from "../constant";
import { validationSchema } from "../validationSchema";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../api";

const useUserForm = () => {
  const { displaySnackbar } = useSnackbar();

  const { mutate: submitUser, isPending } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      displaySnackbar({ type: "success", message: "User created successfully" });
    },
    onError: () => {
      displaySnackbar({ type: "error", message: "Failed to create user" });
    },
  });

  const formik = useFormik<IUser>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      submitUser(values);
    },
  });

  return { formik, isPending };
};

export default useUserForm;