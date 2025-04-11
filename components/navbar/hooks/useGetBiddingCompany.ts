import { useQuery } from "@tanstack/react-query";
import { fetchBiddingCompanyByUserId } from "../api";
import { useAppDispatch } from "@/store";
import { useEffect } from "react";
import { storeCompany } from "@/feaures/companySlice/companySlice";

const useGetBiddingCompany = (id: string, enabled: boolean) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useQuery({
    queryKey: ["FetchBiddingCompany", id],
    queryFn: () => fetchBiddingCompanyByUserId(id),
    enabled,
  });
  useEffect(() => {
    if (data) {
      dispatch(storeCompany({ id: data.company[0]._id }));
    }
  }, [data, dispatch]);
  return { data, isLoading, error };
};

export default useGetBiddingCompany;
