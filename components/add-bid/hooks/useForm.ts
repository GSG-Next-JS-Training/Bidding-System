"use client";
import { useFormik } from "formik";
import { addBidding } from "../api";
import { INITIAL_VALUES } from "../constant";
import { useMutation } from "@tanstack/react-query";
import { validationSchema } from "../validationSchema";
import { AddBiddingRequestBody } from "../api/request.dto";
import useSnackbar from "@/hooks/useSnackbar";
import { useAppSelector } from "@/store";

const useForm = () => {
  const { displaySnackbar } = useSnackbar();
  const { id } = useAppSelector((state) => state.company);

  const { mutate: submitBid, isPending } = useMutation({
    mutationFn: addBidding,
    onSuccess: () => {
      displaySnackbar({
        type: "success",
        message: "Bid submitted successfully",
      });
    },
    onError: () => {
      displaySnackbar({ type: "error", message: "Failed to submit bid" });
    },
  });

  const formik = useFormik<AddBiddingRequestBody>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: (values) => {
      submitBid({ ...values, biddingCompanyId: id });
    },
  });

  return { formik, isPending };
};

export default useForm;
