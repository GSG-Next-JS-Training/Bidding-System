import { Schema, model, Document, Types, models } from "mongoose";

export interface IBiddingCompany extends Document {
  userId: Types.ObjectId;
  companyName: string;
  registrationNumber: string;
  location: string;
  bidsWon: number;
  bidsSubmitted: number;
  servicesOffered: string[];
}

const biddingCompanySchema = new Schema<IBiddingCompany>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    companyName: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    bidsWon: { type: Number, required: true, default: 0 },
    bidsSubmitted: { type: Number, required: true, default: 0 },
    servicesOffered: [{ type: String, required: true }],
  },
  { timestamps: true }
);

export const BiddingCompanyModel =
  models.biddingCompany ??
  model<IBiddingCompany>("biddingCompany", biddingCompanySchema);
