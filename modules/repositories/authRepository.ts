import { IUser } from "@/database/user-model";
import { findUserByEmail } from "../services/authServices";
import { generateCode, generateToken, isValidPassword, sendEmail } from "@/utils/auth";
import bcrypt from "bcryptjs";

export const loginUser = async (
  email: string,
  password: string,
): Promise<{ user: IUser; token: string }> => {
  if(!email || !password) throw new Error("email and password are required");
  
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid Credentials");

  const match = await isValidPassword(password, user.password);
  if(!match) throw new Error("Invalid Credentials");

  const token = generateToken(user);

  return { user, token };
};

export const forgotPassword = async (email : string) =>{
  const user = await findUserByEmail(email);
  if(!user) throw new Error("Invalid Email");

  const code = generateCode();
  user.sendCode = code;
  await user.save();

  await sendEmail(email, "Password Reset Code", `Your password reset code is ${code}`);
}

export const verifyCode = async (email : string, code : string, password : string) =>{
  const user = await findUserByEmail(email);
  if(!user || user.sendCode !== code) throw new Error("Invalid Code");

  const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
  user.password = hashedPassword;
  user.sendCode = ''; 
  await user.save();
  return true;
}