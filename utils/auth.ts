import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUser } from "@/database/user-model";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";

const JWT_SIGNATURE = process.env.JWT_SIGNATURE || "";

export const generateToken = (user: IUser) => {
  const token = jwt.sign({ email: user.email, role: user.role },JWT_SIGNATURE,{ expiresIn: "1w" });
  return token;
};

export const isValidPassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
    port: 587,
    secure: false,
  });
  await transporter.sendMail({
    from: `"Bidding System" <${process.env.SENDER_EMAIL}>`, // sender address
    to,
    subject,
    html,
  });
};

export const generateCode = () =>{
  return customAlphabet("1234567890", 4)();
} 
