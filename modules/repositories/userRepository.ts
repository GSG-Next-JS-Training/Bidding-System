import { IUser, userModel } from "@/database/user-model";
import {
  generateToken,
  hashPassword,
  sendEmail,
  verifyToken,
} from "@/utils/auth";
import { createUser, updateConfirmEmailRecord } from "../services/userServices";
import { getConfirmEmailMessage } from "@/lib/emailMessage";
import { getCompanyByUserId } from "../services/biddingCompanyServices";
import { fetchCompanyByUserId } from "../services/offerCompanyServices";

export const addUser = async (
  body: IUser,
  protocol: string,
  host: string | null
) => {
  const existingUser = await userModel.findOne({ email: body.email });
  if (existingUser) {
    throw new Error("user already exists");
  }

  const hashedPassword = await hashPassword(body.password);

  const user = await createUser({
    ...body,
    password: hashedPassword,
  });
  const token = await generateToken(user);

  await sendEmail(
    body.email,
    "Confirm your email",
    getConfirmEmailMessage(protocol, host, token)
  );
  return { user, token };
};

export const confirmEmail = async (token: string) => {
  const decode = await verifyToken(token);

  if (!decode) throw new Error("Invalid token");
  const user = updateConfirmEmailRecord(decode.email);
  return user;
};

export const getCompaniesByUserId = async (userId: string) => {
  const biddingCompanies = await getCompanyByUserId(userId);
  const offerCompanies = await fetchCompanyByUserId(userId);
  return { biddingCompanies, offerCompanies };
};
