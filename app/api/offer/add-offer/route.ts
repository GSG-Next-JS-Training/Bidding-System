import { handlerWrapper } from "@/lib/apiHandler";
import { addOffer } from "@/modules/repositories/offerRepository";
import { NextRequest, NextResponse } from "next/server";

export const addOfferHandler = async (req : NextRequest) => {
    const body = await req.json();
    const newOffer = await addOffer(body);
    return NextResponse.json({
        offer: newOffer
    }, {
        status: 201
    })
}

export const POST = handlerWrapper(addOfferHandler);