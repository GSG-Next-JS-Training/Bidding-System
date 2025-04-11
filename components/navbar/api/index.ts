import { IBiddingCompany } from "@/database/bidding-company-model";
import { IOffersCompany } from "@/database/offers-company-model";
import axios from "axios";

export const fetchBiddingCompanyByUserId = async (userId: string) => {
  const response = await axios.get<{ company: IBiddingCompany[] }>(
    `api/bidding-company-by-user/${userId}`
  );
  return response.data;
};


export const fetchOfferCompanyByUserId = async (userId: string) => {
    const response = await axios.get<{ company: IOffersCompany[] }>(
      `api/offer-company-by-userId/${userId}`
    );
    return response.data;
  };
  