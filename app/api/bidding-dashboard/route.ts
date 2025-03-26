import { handlerWrapper } from "@/lib/apiHandler";
import { fetchOffers } from "@/modules/services/biddingService";
import {NextResponse } from "next/server";

const fetchOfferHandler = async () =>{
    const offer = await fetchOffers();
    return NextResponse.json(offer, {status : 200});
}
export const GET = handlerWrapper(fetchOfferHandler);