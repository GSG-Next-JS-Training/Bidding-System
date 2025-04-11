import { handlerWrapper } from "@/lib/apiHandler";
import { createCompany } from "@/modules/services/biddingCompanyServices";
import { fetchCompanies } from "@/modules/services/biddingService";
import { NextRequest, NextResponse } from "next/server";

const addBiddingCompanyHandler = async (req: NextRequest) => {
  const body = await req.json();
  const company = await createCompany(body);

  return NextResponse.json({
    message: "Bidding company created successfully",
    company,
  });
};

const getCompanies = async () => {
  const companies = await fetchCompanies();
  return NextResponse.json({ companies }, { status: 200 });
};

export const POST = handlerWrapper(addBiddingCompanyHandler);
export const GET = handlerWrapper(getCompanies);
