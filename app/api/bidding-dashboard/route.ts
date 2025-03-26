import {NextResponse } from "next/server";
import { handlerWrapper } from "@/lib/apiHandler";
import { fetchOffers } from "@/modules/services/biddingService";

const fetchOfferHandler = async () =>{
    const offer = await fetchOffers();
    return NextResponse.json(offer, {status : 200});
}
export const GET = handlerWrapper(fetchOfferHandler);