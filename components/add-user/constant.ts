import { IUser } from "./types";

export const INITIAL_VALUES : IUser = {
    fullName: "",
    email: "",
    password: "",
    address: "",
    birthDate: new Date(),
    phoneNumber: "",
    confirmEmail: false,
    role: "bedding-company",
  };