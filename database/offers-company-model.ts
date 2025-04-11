import { Schema, model, Document, Types, models } from "mongoose";

export interface IOffersCompany extends Document {
  userId: Types.ObjectId;
  companyName: string;
  registrationNumber: string;
  location: string;
  servicesProvided: string[];
}

const offersCompanySchema = new Schema<IOffersCompany>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    companyName: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    servicesProvided: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const OffersCompanyModel =
  models.offersCompany ??
  model<IOffersCompany>("offersCompany", offersCompanySchema);
