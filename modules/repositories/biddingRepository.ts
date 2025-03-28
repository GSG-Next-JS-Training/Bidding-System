import { createBid } from "../services/biddingService";
import { AddBiddingRequestBody } from "@/components/add-bid/api/request.dto";

export const addBidding = async (body: AddBiddingRequestBody) => {
  const { biddingCompanyId, bidAmount, serviceOffered, bidStatus } = body;
const newBid = createBid(biddingCompanyId, bidAmount, serviceOffered, bidStatus);
return newBid;
};