import { OfferModel } from "@/database/offer-model"
import { OffersCompanyModel } from "@/database/offers-company-model";
import { Types } from "mongoose";

export const createOffer = async (offersCompanyId : Types.ObjectId, offerDiscount : number, serviceOffered : string, offerStatus : string) =>{
    const newOffer = await OfferModel.create({
        offersCompanyId,
        offerDiscount,
        serviceOffered,
        offerStatus
    });
    return newOffer;
}

export const fetchOffers = async () =>{
    const offer = await OfferModel.find({}).select('offerDiscount serviceOffered offerStatus');
    return offer;
}


export const findOfferById = async (userId: Types.ObjectId) => {
    const bid = await OffersCompanyModel.findById({userId})
    return bid;
  }