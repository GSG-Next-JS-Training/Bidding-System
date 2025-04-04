import { BiddingStatus } from "@/@types";

export interface AddBiddingRequestBody {
  biddingCompanyId: string;
  bidAmount: number;
  serviceOffered: string;
  bidStatus?: BiddingStatus; 
}