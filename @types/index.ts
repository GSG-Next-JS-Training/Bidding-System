export type UserRoles = "bedding-company" | "offer-company" | "admin";

export type BiddingStatus = "pending" | "won" | "lost";

export type OfferStatus = "active" | "expired";

export interface BaseResponse{
    success: boolean;
    message: string;
 }