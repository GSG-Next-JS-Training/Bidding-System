import { useFormik } from "formik";
import { INITIAL_VALUES } from "../constant";
import { LoginValues } from "../types";
import { validationSchema } from "../validationSchema";

const useLogin = () => {
  const handleLogin = (values: LoginValues) => {
    console.log(values);
  };

  const formik = useFormik<LoginValues>({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      handleLogin(values);
    },
    validationSchema,
    validateOnMount: true,
  });

  return { formik };
};

export default useLogin;
