import { OfferModel } from "@/database/offer-model"
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