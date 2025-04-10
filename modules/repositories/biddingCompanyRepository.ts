import { IBiddingCompany } from "@/database/bidding-company-model";
import { createCompany } from "../services/biddingCompanyServices";

export const createBiddingCompany = async (body: Partial<IBiddingCompany>) => {
  const company = await createCompany(body);
  return company;
};
