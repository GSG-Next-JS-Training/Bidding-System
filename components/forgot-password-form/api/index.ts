import axios from "axios";
import { setCookie } from "@/utils/cookies";
export const sendResetLink = async (body: { email: string }) => {
  const res = await axios.post("/api/auth/forgot-password", body);

  if (res.status === 200) {
   setCookie("resetEmail",body.email)
  }

  return res.data;
};
