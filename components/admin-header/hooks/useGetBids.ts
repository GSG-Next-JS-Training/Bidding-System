import { useQuery } from "@tanstack/react-query";
import { fetchBids } from "../api";

const useGetBids= () => {
  const { data } = useQuery({
    queryKey: ["FetchBids"],
    queryFn: fetchBids,
  });
  return { data };
};

export default useGetBids;
