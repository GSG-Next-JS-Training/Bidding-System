import { IBid } from "@/database/bid-model";
import { createBid, fetchBids } from "../services/biddingService";

export const addBidding = async (body: IBid) => {
  const { biddingCompanyId, bidAmount, serviceOffered, bidStatus } = body;
  const newBid = await createBid(
    biddingCompanyId,
    bidAmount,
    serviceOffered,
    bidStatus
  );
  return newBid;
};

export const getBids = async () => {
  const bids = await fetchBids();
  if(!bids) throw new Error("No bids found");
  return bids;
}