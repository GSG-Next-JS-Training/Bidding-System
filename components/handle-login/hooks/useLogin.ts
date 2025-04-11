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
import { useRouter } from "next/navigation";
import { redirectByRole } from "@/lib";

const useLogin = () => {
  const { displaySnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(loginSuccess({userName:data.userName, token: data.token, userType: data.userType,userId:data.userId }));
      displaySnackbar({ type: "success", message: "success login" });
      redirectByRole(data.userType, router);
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

  return { formik, isPending };
};

export default useLogin;
