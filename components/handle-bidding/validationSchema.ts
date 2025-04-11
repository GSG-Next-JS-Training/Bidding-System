import * as Yup from "yup";

export const validationSchema = Yup.object({
    companyName: Yup.string().required("Company name is required"),
    registrationNumber: Yup.string().required("Registration number is required"),
    location: Yup.string().required("Location is required"),
    bidsWon: Yup.number().min(0, "Must be 0 or more").required("Bids won is required"),
    bidsSubmitted: Yup.number().min(0, "Must be 0 or more").required("Bids submitted is required"),
    servicesOffered: Yup.array().of(Yup.string().required()).min(1, "At least one service is required"),
  });