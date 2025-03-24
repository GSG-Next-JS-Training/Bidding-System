import { IUser } from "@/database/user-model";
import { findUserByEmail } from "../services/authServices";
import { generateCode, generateToken, hashPassword, isValidPassword, sendEmail } from "@/utils/auth";

export const loginUser = async (email: string, password: string) : Promise<{ user: IUser; token : string }> => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid Credentials");

  const match = await isValidPassword(password, user.password);
  if(!match) throw new Error("Invalid Credentials");

  const token = await generateToken(user);

  return { user, token };
};

export const forgotPassword = async (email : string) =>{
  if(!email) throw new Error("Email is required");
  const user = await findUserByEmail(email);
  if(!user) throw new Error("Invalid Email");

  const code = generateCode();
  user.sendCode = code;
  await user.save();

  await sendEmail(email, "Password Reset Code", `Your password reset code is ${code}`);
}

export const verifyCode = async (email : string, code : string) =>{
  const user = await findUserByEmail(email);
  if(!user || user.sendCode !== code) throw new Error("Invalid Code");

  user.sendCode = ''; 
  await user.save();
  return true;
}

export const resetPassword = async (email : string, password : string) =>{
  const user = await findUserByEmail(email);
  if(!user) throw new Error("Invalid Email");

  const hashedPassword = await hashPassword(password);
  user.password = hashedPassword;
  await user.save();
  return true;
}