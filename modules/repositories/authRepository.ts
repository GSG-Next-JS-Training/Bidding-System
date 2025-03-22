import { IUser } from "@/database/user-model";
import { findUserByEmail } from "../services/authServices";
import { generateToken, isValidPassword } from "@/utils/auth";

export const loginUser = async (
  email: string,
  password: string,
): Promise<{ user: IUser; token: string }> => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid Credentials");

  const match = isValidPassword(password, user.password);
  if(!match) throw new Error("Invalid Credentials");

  const token = generateToken(user);

  return { user, token };
};
