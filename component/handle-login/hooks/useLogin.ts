"use client";
import { useFormik } from "formik";
import { INITIAL_VALUES } from "../constant";
import { LoginValues } from "../types";
import { validationSchema } from "../validationSchema";
import useSnackbar from "@/hooks/useSnackbar";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api";
import { useAppDispatch } from "@/store";
import { loginSuccess } from "@/feaures/authSlice/authSlice";

const useLogin = () => {
  const { displaySnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const {
    mutate: loginMutate,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(
        loginSuccess({ token: data.authentication, userType: data.userType })
      );
      displaySnackbar({ type: "success", message: "success login" });
    },
    onError: () => {
      displaySnackbar({
        type: "error",
        message: "Error logging in",
      });
    },
  });

  const formik = useFormik<LoginValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      loginMutate(values);
    },
    validationSchema,
    validateOnMount: true,
  });

  return { formik, isPending, isSuccess };
};

export default useLogin;
