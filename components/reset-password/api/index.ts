import axios from "axios";
import { ResetPasswordValues } from "../types";
import { getCookie } from "@/utils/cookies";

export const resetPassword = async (body: ResetPasswordValues) => {
  const email = getCookie("resetEmail");

  const res = await axios.post("/api/auth/reset-password", {
    newPassword: body.newPassword,
    email,
  });

  return res.data;
};
