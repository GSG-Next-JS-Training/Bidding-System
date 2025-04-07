import { handlerWrapper } from "@/lib/apiHandler";
import { getOffers } from "@/modules/repositories/offerRepository";
import { NextResponse } from "next/server";

export const getOffersHandler = async () => {
    const offers = await getOffers();
    return NextResponse.json({offers}, {status : 200})
}

export const GET = handlerWrapper(getOffersHandler);