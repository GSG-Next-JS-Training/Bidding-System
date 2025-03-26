import "dotenv/config";
import * as jose from 'jose';
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { IUser } from "@/database/user-model";
import { getEmailHtml } from "@/lib/emailMessage";

const JOSE_SIGNATURE = process.env.JOSE_SIGNATURE || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "";
const SENDER_PASSWORD = process.env.SENDER_PASSWORD || "";

export const generateToken = async (user: IUser) => {
  const token = await new jose.SignJWT({ email: user.email, role: user.role })
  .setProtectedHeader({ alg: 'HS256' })
  .setExpirationTime('1w')
  .sign(new TextEncoder().encode(JOSE_SIGNATURE));
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
  

  ;

  await transporter.sendMail({
    from: `"Bidding System" <${process.env.SENDER_EMAIL}>`, // sender address
    to,
    subject,
    html : getEmailHtml(html),
  });
};

export const generateCode = () =>{
  return customAlphabet("1234567890", 4)();
} 

export const hashPassword = async (password : string) =>{
  return bcrypt.hash(password, Number(process.env.SALT_ROUND));
}