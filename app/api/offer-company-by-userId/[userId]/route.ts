
import { fetchCompanyByUserId } from "@/modules/services/offerCompanyServices";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  const { userId } = await params;

  try {
  const offerCompany = await fetchCompanyByUserId(userId);

    return NextResponse.json(
      {
        company:offerCompany,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching companies", error);
    throw new Error("Internal server error");
  }
};
