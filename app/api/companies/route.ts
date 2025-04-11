import { BiddingCompanyModel } from "@/database/bidding-company-model";
import { OffersCompanyModel } from "@/database/offers-company-model";
import { NextResponse } from "next/server";

export const GET = async () => {
  const offersCompanies = await OffersCompanyModel.find({});
  const biddingCompanies = await BiddingCompanyModel.find({});
  const companies = offersCompanies.concat(biddingCompanies);
  return NextResponse.json(
    {
      companies,
    },
    { status: 200 }
  );
};
