import { OfferModel } from "@/database/offer-model";

export const fetchOffers = async () =>{
    const offer = await OfferModel.find({});
    return offer;
  }