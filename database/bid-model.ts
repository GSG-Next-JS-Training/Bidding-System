import { BiddingStatus } from "@/@types";
import { Schema, model, Document, Types, models } from "mongoose";

export interface IBid extends Document {
  biddingCompanyId: Types.ObjectId;
  bidAmount: number;
  description: string;
  bidStatus: BiddingStatus;
  title: string;
}

const bidSchema = new Schema<IBid>(
  {
    biddingCompanyId: {
      type: Schema.Types.ObjectId,
      ref: "BiddingCompany",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    bidStatus: {
      type: String,
      required: true,
      enum: ["pending", "finished"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const BidModel = models.bid ?? model<IBid>("bid", bidSchema);
