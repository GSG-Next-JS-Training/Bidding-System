import axios from "axios";

export const checkVerficationCode = async (body: {
  code: string;
  email: string;
}) => {
  const res = await axios.post("/api/auth/send-code", body);

  return res.data;
};
