import {
  BiddingCompanyModel,
  IBiddingCompany,
} from "@/database/bidding-company-model";

export const getCompanyByUserId = async (userId: string) => {
  const biddingCompany = await BiddingCompanyModel.find({ userId }).select(
    "companyName"
  );
  return biddingCompany;
};

export const createCompany = async (body: Partial<IBiddingCompany>) => {
  const newCompany = await BiddingCompanyModel.create(body);
  return newCompany;
};
