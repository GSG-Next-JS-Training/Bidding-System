import { BidModel } from "@/database/bid-model";
import { AddBiddingRequestBody } from "@/components/add-bid/api/request.dto";
import { Types } from "mongoose";

export const createBid = async (biddingCompanyId : Types.ObjectId, bidAmount : number, serviceOffered :string, bidStatus? : string ) : Promise<AddBiddingRequestBody>  =>{
  const newBid = await BidModel.create({
    biddingCompanyId,
    bidAmount,
    serviceOffered,
    bidStatus: bidStatus || "pending",
  });
  return newBid;
}

export const fetchBids = async () => {
  const bids = await BidModel.find({}).select('bidAmount serviceOffered bidStatus');
  return bids;
}