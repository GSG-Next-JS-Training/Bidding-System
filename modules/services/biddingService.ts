import { BidModel } from "@/database/bid-model";
import { OfferModel } from "@/database/offer-model";
import { AddBiddingRequestBody } from "@/components/add-bid/api/request.dto";

export const fetchOffers = async () =>{
    const offer = await OfferModel.find({});
    return offer;
  }

export const createBid = async (biddingCompanyId : string, bidAmount : number, serviceOffered :string, bidStatus? : string ) : Promise<AddBiddingRequestBody>  =>{
  const newBid = await BidModel.create({
    biddingCompanyId,
    bidAmount,
    serviceOffered,
    bidStatus: bidStatus || "pending",
  });
  return newBid;
}