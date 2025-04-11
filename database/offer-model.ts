import { OfferStatus } from "@/@types";
import { Schema, model, Document, Types ,models} from "mongoose";

export interface IOffer extends Document {
  offersCompanyId: Types.ObjectId;
  ammount:string;
  description: string;
  offerStatus: OfferStatus;
  bidId: Types.ObjectId
}

const offerSchema = new Schema<IOffer>(
  {
    offersCompanyId: {
      type: Schema.Types.ObjectId,
      ref: "OffersCompany",
      required: true,
    },
    ammount: { type: String, required: true },
    description: { type: String, required: true },
    offerStatus: {
      type: String,
      required: true,
      enum: ["active", "expired"],
      default: "active",
    },
    bidId:{
      type: Schema.Types.ObjectId,
      ref: "bid",
      required: true,
    }
  },
  { timestamps: true }
);

export const OfferModel = models.Offer ?? model<IOffer>("Offer", offerSchema);
