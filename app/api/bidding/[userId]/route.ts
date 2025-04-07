import { getBidById } from "@/modules/repositories/biddingRepository";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const getBidsByUserIdHandler = async (req : NextRequest, {params} : {params: {userId: Types.ObjectId}}) => {
    const {userId} = params;
    const bid = await getBidById(userId);
    return NextResponse.json({bid}, {status : 200});
}

export const GET = getBidsByUserIdHandler;