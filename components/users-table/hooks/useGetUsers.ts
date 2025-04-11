import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";

const useGetUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["FetchUsers"],
    queryFn: fetchUsers,
  });
  return { data, isLoading };
};

export default useGetUsers;