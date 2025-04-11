import { useQuery } from "@tanstack/react-query";
import { fetchBiddingCompanies } from "../api";

const useGetBiddingCompanies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FetchBiddingCompanies"],
    queryFn: fetchBiddingCompanies,
  });
  return { data, isLoading };
};

export default useGetBiddingCompanies;
