import { handlerWrapper } from "@/lib/apiHandler";
import { createCompany, fetchCompanies } from "@/modules/services/offerCompanyServices";
import { NextRequest, NextResponse } from "next/server";

export const addOfferCompanyHandler = async (req: NextRequest) => {
  const body = await req.json();
  const company = await createCompany(body);

  return NextResponse.json({
    message: "Offer company created successfully",
    company,
  });
};


const getCompanies = async () => {
  const companies = await fetchCompanies();
  return NextResponse.json({ companies }, { status: 200 });
};

export const POST = handlerWrapper(addOfferCompanyHandler);
export const GET = handlerWrapper(getCompanies);
