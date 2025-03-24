import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { IUser } from "@/database/user-model";

const JWT_SIGNATURE = process.env.JWT_SIGNATURE || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "";
const SENDER_PASSWORD = process.env.SENDER_PASSWORD || "";

export const generateToken = (user: IUser) => {
  const token = jwt.sign({ email: user.email, role: user.role },JWT_SIGNATURE,{ expiresIn: "1w" });
  return token;
};

export const isValidPassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASSWORD,
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