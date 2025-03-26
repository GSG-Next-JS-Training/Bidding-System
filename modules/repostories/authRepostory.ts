import { IUser } from "@/database/user-model";
import { findUserByEmail } from "../services/authServices";

export const loginUser = async (
  email: string,
  password: string
): Promise<{ user: IUser; token: string }> => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User not found");
  const token = "token";

  return { user, token };
};

