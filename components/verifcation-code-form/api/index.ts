import axios from "axios";
import { getCookie } from "@/utils/cookies";

export const checkVerficationCode = async (body: { code: string }) => {
  const email = getCookie("resetEmail");

  const res = await axios.post("/api/auth/send-code", {
    code: body.code,
    email,
  });

  return res.data;
};
