import { IUser } from "@/database/user-model";
import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get<IUser[]>("api/user");
  return response.data;
};
