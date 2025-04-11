import { useQuery } from "@tanstack/react-query";
import { fetchOfferCompanyByUserId } from "../api";
import { useEffect } from "react";
import { storeCompany } from "@/feaures/companySlice/companySlice";
import { useAppDispatch } from "@/store";

const useGetOfferCompany = (id: string, enabled: boolean) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useQuery({
    queryKey: ["FetchOfferCompany", id],
    queryFn: () => fetchOfferCompanyByUserId(id),
    enabled,
  });
  useEffect(() => {
    if (data) {
      dispatch(storeCompany({ id: data.company[0]._id }));
    }
  }, [data, dispatch]);
  return { data, isLoading, error };
};

export default useGetOfferCompany;
