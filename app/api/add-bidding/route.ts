import { handlerWrapper } from "@/lib/apiHandler";
import { NextRequest, NextResponse } from "next/server";
import { addBidding } from "@/modules/repositories/biddingRepository";

const addBiddingHandler = async (req: NextRequest) => {
  const body = await req.json();
  const newBid = await addBidding(body);
  return NextResponse.json(
    {bid: newBid },
    { status: 201 }
  );
};

export const POST = handlerWrapper(addBiddingHandler);