import { handlerWrapper } from "@/lib/apiHandler";
import { createCompany } from "@/modules/services/offerCompanyServices";
import { NextRequest, NextResponse } from "next/server";

export const addOfferCompanyHandler = async (req: NextRequest) => {
  const body = await req.json();
  const company = await createCompany(body);

  return NextResponse.json({
    message: "Offer company created successfully",
    company,
  });
};

export const POST = handlerWrapper(addOfferCompanyHandler);
