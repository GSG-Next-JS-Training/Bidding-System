import { BidModel } from "@/database/bid-model";
import { AddBiddingRequestBody } from "@/components/add-bid/api/request.dto";
import { Types } from "mongoose";
import { BiddingCompanyModel } from "@/database/bidding-company-model";

export const createBid = async (
  biddingCompanyId: Types.ObjectId,
  title: string,
  description: string
): Promise<AddBiddingRequestBody> => {
  const newBid = await BidModel.create({
    biddingCompanyId,
    title,
    description,
  });
  return newBid;
};

export const fetchBids = async () => {
  const bids = await BidModel.find({}).select(
    "bidAmount serviceOffered bidStatus"
  );
  return bids;
};

export const findBidById = async (userId: Types.ObjectId) => {
  const bid = await BiddingCompanyModel.findById({ userId });
  return bid;
};

export const fetchCompanies = async () => {
  const companies = await BiddingCompanyModel.find({});
  return companies;
};
