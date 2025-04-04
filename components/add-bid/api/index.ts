import axios from "axios";
import { AddBiddingResponse } from "./response.tdo";
import { AddBiddingRequestBody } from "./request.dto";

export const addBidding = async (body: AddBiddingRequestBody) => {
  const res = await axios.post<AddBiddingResponse>("/api/add-bidding", body);
  return res.data;
};