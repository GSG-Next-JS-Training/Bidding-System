import { useQuery } from "@tanstack/react-query";
import { fetchofferCompanies } from "../api";

const useGetOfferCompanies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FetchOfferCompanies"],
    queryFn: fetchofferCompanies,
  });
  return { data, isLoading };
};

export default useGetOfferCompanies;
