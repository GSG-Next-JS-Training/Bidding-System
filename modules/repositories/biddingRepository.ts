import { IBid } from "@/database/bid-model";
import { createBid } from "../services/biddingService";

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