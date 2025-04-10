import { handlerWrapper } from "@/lib/apiHandler";
import { createCompany } from "@/modules/services/biddingCompanyServices";
import { NextRequest, NextResponse } from "next/server";

export const addBiddingCompanyHandler = async (req: NextRequest) => {
  const body = await req.json();
  const company = await createCompany(body);

  return NextResponse.json({
    message: "Bidding company created successfully",
    company,
  });
};

export const POST = handlerWrapper(addBiddingCompanyHandler);
