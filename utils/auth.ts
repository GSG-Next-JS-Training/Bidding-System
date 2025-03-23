import jwt from "jsonwebtoken";
import 'dotenv/config';
import { IUser } from "@/database/user-model";
import bcrypt from "bcryptjs";

const JWT_SIGNATURE = process.env.JWT_SIGNATURE || '';

export const generateToken = (user : IUser) => {
    const token = jwt.sign({email : user.email, role : user.role},JWT_SIGNATURE, {expiresIn : '1w'});
    return token;
}

export const isValidPassword = async (password : string, hashedPassword : string) =>{
    return bcrypt.compare(password, hashedPassword);
  }

