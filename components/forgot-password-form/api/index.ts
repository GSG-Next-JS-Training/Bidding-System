import axios from "axios";

export const sendResetLink = async (body: { email: string }) => {
  const res = await axios.post("/api/auth/forgot-password", body);
  return res.data;
};
