import axios from "axios";
import { IUser } from "../types";
import { AddUserResponse } from "./response.dto";

export const addUser = async (body: IUser) => {
  const res = await axios.post<AddUserResponse>("/api/user", body);
  return res.data;
};