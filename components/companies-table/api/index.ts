import { IBiddingCompany } from "@/database/bidding-company-model";
import { IOffersCompany } from "@/database/offers-company-model";
import axios from "axios";

type IProps = IBiddingCompany & IOffersCompany;
export const fetchCompanies = async () => {
  const response = await axios.get<IProps[]>("api/companies");
  return response.data;
};
