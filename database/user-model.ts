import { UserRoles } from "@/@types";
import { Schema, model, Document, models, Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  fullName: string;
  password: string;
  email: string;
  address: string;
  birthDate: Date;
  phoneNumber: string;
  confirmEmail: boolean;
  sendCode?: string | null;
  role: UserRoles;
}

const userSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    address: { type: String, required: true },
    birthDate: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    confirmEmail: { type: Boolean, default: false },
    sendCode: { type: String, default: null },
    role: {
      type: String,
      enum: Object.values<UserRoles>({
        bedding: "bedding-company",
        offer: "offer-company",
        admin: "admin",
      }),
      default: "bedding-company",
    },
  },
  { timestamps: true }
);

export const userModel = models.user ?? model<IUser>("user", userSchema);
