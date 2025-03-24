import "dotenv/config";
import * as jose from 'jose';
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { IUser } from "@/database/user-model";

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
  
  const emailHtml = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h2 style="text-align: center; color: #333;">Password Reset Request</h2>
    <p style="font-size: 16px; color: #555;">Hello,</p>
    <p style="font-size: 16px; color: #555;">You recently requested to reset your password. Use the code below to proceed:</p>
    
    <div style="text-align: center; margin: 20px 0;">
      <span style="background-color: #007bff; color: white; padding: 10px 20px; font-size: 24px; font-weight: bold; border-radius: 5px; display: inline-block;">
        ${html}
      </span>
    </div>
    
    <p style="font-size: 16px; color: #555;">If you did not request a password reset, please ignore this email.</p>
    <p style="font-size: 16px; color: #555;">Thank you,</p>
    <p style="font-size: 16px; font-weight: bold; color: #333;">Bidding System Team</p>
  </div>`
  ;

  await transporter.sendMail({
    from: `"Bidding System" <${process.env.SENDER_EMAIL}>`, // sender address
    to,
    subject,
    html : emailHtml,
  });
};

export const generateCode = () =>{
  return customAlphabet("1234567890", 4)();
} 

export const hashPassword = async (password : string) =>{
  return bcrypt.hash(password, Number(process.env.SALT_ROUND));
}