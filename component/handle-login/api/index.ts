import axios from "axios";
import { LoginRequestBody } from "./request.dto";
import { LoginResponse } from "./response.dto";

export const login = async (body: LoginRequestBody) => {
  const res = await axios.post<LoginResponse>("/api/auth/login", body);
  return res.data;
};
