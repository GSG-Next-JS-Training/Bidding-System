import { BiddingStatus } from "@/@types";
import { Schema, model, Document, Types, models } from "mongoose";

export interface IBid extends Document {
  biddingCompanyId: Types.ObjectId;
  bidAmount: number;
  serviceOffered: string;
  bidStatus: BiddingStatus;
}

const bidSchema = new Schema<IBid>(
  {
    biddingCompanyId: {
      type: Schema.Types.ObjectId,
      ref: "BiddingCompany",
      required: true,
    },
    bidAmount: { type: Number, required: true },
    serviceOffered: { type: String, required: true },
    bidStatus: {
      type: String,
      required: true,
      enum: ["pending", "won", "lost"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const BidModel = models.bid ?? model<IBid>("bid", bidSchema);
