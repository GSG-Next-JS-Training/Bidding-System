import { IBid } from "@/database/bid-model";
import { createBid, fetchBids, findBidById } from "../services/biddingService";
import { Types } from "mongoose";

export const addBidding = async (body: IBid) => {
  const { biddingCompanyId, title, description } = body;
  const newBid = await createBid(biddingCompanyId, title, description);
  return newBid;
};

export const getBids = async () => {
  const bids = await fetchBids();
  if (!bids) throw new Error("No bids found");
  return bids;
};

export const getBidById = async (userId: Types.ObjectId) => {
  const bid = await findBidById(userId);
  return bid;
};
