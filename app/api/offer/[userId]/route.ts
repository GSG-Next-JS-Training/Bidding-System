import { getOfferById } from "@/modules/repositories/offerRepository";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const getOffersByUserIdHandler = async (req : NextRequest, {params} : {params: {userId: Types.ObjectId}}) => {
    const {userId} = params;
    const bid = await getOfferById(userId);
    return NextResponse.json({bid}, {status : 200});
}

export const GET = getOffersByUserIdHandler;