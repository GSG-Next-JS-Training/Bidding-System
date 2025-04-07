import { handlerWrapper } from "@/lib/apiHandler";
import { getBids } from "@/modules/repositories/biddingRepository"
import { NextResponse } from "next/server";

export const getBidsHandler = async () => {
    const bids = await getBids();
    return NextResponse.json({ bids }, { status: 200 });
}

export const GET = handlerWrapper(getBidsHandler);