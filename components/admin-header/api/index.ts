import { IBid } from "@/database/bid-model";
import { IBiddingCompany } from "@/database/bidding-company-model";
import { IOffer } from "@/database/offer-model";
import axios from "axios";

export const fetchBiddingCompanies = async () => {
  const response = await axios.get<{ companies: IBiddingCompany[] }>(
    "api/bidding-company"
  );
  return response.data;
};

export const fetchofferCompanies = async () => {
  const response = await axios.get<{ companies: IBiddingCompany[] }>(
    "api/offer-company"
  );
  return response.data;
};

export const fetchBids = async () => {
  const response = await axios.get<{ bids: IBid[] }>("api/bidding/get-bids");
  return response.data;
};

export const fetchOffers = async () => {
  const response = await axios.get<{ offers: IOffer[] }>("api/offer/get-offer");
  return response.data;
};
