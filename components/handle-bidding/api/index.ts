import axios from "axios";
import { AddBiddingResponse} from "./response.dto";
import { IBiddingCompany } from "../types";

export const addBiddingCompany = async (body: IBiddingCompany) => {
  const res = await axios.post<AddBiddingResponse>("/api/bidding-company", body);
  return res.data;
};