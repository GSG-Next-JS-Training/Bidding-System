import { useQuery } from "@tanstack/react-query";
import { fetchOffers } from "../api";

const useGetOffers = () => {
  const { data } = useQuery({
    queryKey: ["FetchOffers"],
    queryFn: fetchOffers,
  });
  return { data };
};

export default useGetOffers;
