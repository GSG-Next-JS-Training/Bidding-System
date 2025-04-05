import { IOffersCompany } from "@/database/offers-company-model";
import { createCompany } from "../services/offerCompanyServices";

export const createOfferCompany = async (body: Partial<IOffersCompany>) => {
  const company = await createCompany(body);
  return company;
};
