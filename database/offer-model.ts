import { OfferStatus } from "@/@types";
import { Schema, model, Document, Types ,models} from "mongoose";

export interface IOffer extends Document {
  offersCompanyId: Types.ObjectId;
  offerDiscount: number;
  serviceOffered: string;
  offerStatus: OfferStatus;
}

const offerSchema = new Schema<IOffer>(
  {
    offersCompanyId: {
      type: Schema.Types.ObjectId,
      ref: "OffersCompany",
      required: true,
    },
    offerDiscount: { type: Number, required: true },
    serviceOffered: { type: String, required: true },
    offerStatus: {
      type: String,
      required: true,
      enum: ["active", "expired"],
      default: "active",
    },
  },
  { timestamps: true }
);

export const OfferModel = models.offer ?? model<IOffer>("Offer", offerSchema);
