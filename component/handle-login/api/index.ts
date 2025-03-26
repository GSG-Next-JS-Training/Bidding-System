import { LoginRequestBody } from "./request.dto";
import { LoginResponse } from "./response.dto";

export const login = async (body: LoginRequestBody) => {
  const res = await fetch("/api/data", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res.json() as Promise<LoginResponse>;
};
