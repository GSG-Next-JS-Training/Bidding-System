import { useQuery } from "@tanstack/react-query";
import { fetchCompanies } from "../api";

const useGetCompanies = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FetchCompanies"],
    queryFn: fetchCompanies,
  });
  return { data, isLoading };
};

export default useGetCompanies;
