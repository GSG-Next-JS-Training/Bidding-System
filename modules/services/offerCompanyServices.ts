import { IOffersCompany, OffersCompanyModel } from "@/database/offers-company-model";


export const fetchCompanyByUserId = async (userId: string) => {
  const offerCompany = await OffersCompanyModel.find({ userId }).select(
    "companyName"
  );
  return offerCompany;
};

export const createCompany = async (body: Partial<IOffersCompany>) => {
  const newCompany = await OffersCompanyModel.create(body);
  return newCompany; 
};
