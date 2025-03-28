import * as Yup from "yup";
export const validationSchema = Yup.object({
    biddingCompanyId: Yup.string().required("Company is required"),
    bidAmount: Yup.number()
      .required("Bid amount is required")
      .positive("Bid amount must be positive"),
    serviceOffered: Yup.string().min(5).required("Service is required").trim(),
    bidStatus: Yup.string()
      .oneOf(["pending", "won", "lost"], "Invalid status")
      .required("Bid status is required"),
  });