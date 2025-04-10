import { getCompaniesByUserId } from "@/modules/repositories/userRepository";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  const { userId } = await params;

  try {
    const { biddingCompanies, offerCompanies } = await getCompaniesByUserId(
      userId
    );

    return NextResponse.json(
      {
        biddingCompanies,
        offerCompanies,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching companies", error);
    throw new Error("Internal server error");
  }
};
