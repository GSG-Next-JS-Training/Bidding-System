import { IOffer } from "@/database/offer-model";
import { createOffer, fetchOffers, findOfferById } from "../services/offerService";
import { Types } from "mongoose";

export const addOffer = async (body : IOffer) => {
    const { offersCompanyId, offerDiscount, serviceOffered, offerStatus } = body;
    const newOffer = await createOffer(
        offersCompanyId,
        offerDiscount,
        serviceOffered,
        offerStatus
    );
    return newOffer;
    }

export const getOffers = async () =>{
    const offer = await fetchOffers();
    if(!offer) throw new Error("No offers found");
    return offer;
}

export const getOfferById = async (userId: Types.ObjectId) => {
    const bid = await findOfferById(userId);
    return bid
  }