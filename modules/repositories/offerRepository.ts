import { IOffer } from "@/database/offer-model";
import { createOffer, fetchOffers } from "../services/offerService";

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