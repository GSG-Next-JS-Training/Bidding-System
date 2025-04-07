import { IOffer } from "@/database/offer-model";
import { createOffer } from "../services/offerService";

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