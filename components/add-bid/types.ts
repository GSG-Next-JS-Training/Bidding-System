import { BiddingStatus } from "@/@types";

export interface FormValues {
    biddingCompanyId : string,
    bidAmount : number,
    serviceOffered : string,
    bidStatus?: BiddingStatus; 
  }