import { getCompanyByUserId } from "@/modules/services/biddingCompanyServices";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  const { userId } = await params;

  try {
  const biddingCompany = await getCompanyByUserId(userId);

    return NextResponse.json(
      {
        company:biddingCompany,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching companies", error);
    throw new Error("Internal server error");
  }
};
