import "dotenv/config";
import * as jose from "jose";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { customAlphabet } from "nanoid";
import { IUser } from "@/database/user-model";

const JOSE_SIGNATURE = process.env.JOSE_SIGNATURE || "";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "";
const SENDER_PASSWORD = process.env.SENDER_PASSWORD || "";

export const generateToken = async (user: IUser) => {
  const token = await new jose.SignJWT({ email: user.email, role: user.role })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1w")
    .sign(new TextEncoder().encode(JOSE_SIGNATURE));
  return token;
};

export const isValidPassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const sendEmail = async (
  to: string,
  subject: string,
  message: string
) => {
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
    from: `"Bidding System" <${process.env.SENDER_EMAIL}>`,
    to,
    subject,
    html: message,
  });
};

export const generateCode = () => {
  return customAlphabet("1234567890", 4)();
};

export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, Number(process.env.SALT_ROUND));
};

export const verifyToken = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JOSE_SIGNATURE);

  try {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Invalid or expired token");
  }
};
