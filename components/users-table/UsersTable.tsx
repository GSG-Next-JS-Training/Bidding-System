"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useGetUsers from "./hooks/useGetUsers";
import Loading from "@/app/loading";
import DataTable from "../data-grid";
import { IUser } from "@/database/user-model";
import useGridConfiguration from "./hooks/useGridConfiguration";

const UsersTable = () => {
  const searchParams = useSearchParams();
  const { columns } = useGridConfiguration();
  const router = useRouter();
  const { data, isLoading } = useGetUsers();
  const [filters, setFilters] = useState({
    fullname: searchParams.get("fullname") || "",
    role: searchParams.get("role") || "",
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.fullname) params.set("fullname", filters.fullname);
    if (filters.role) params.set("role", filters.role);
    router.push(`?${params.toString()}`, { scroll: false });
  }, [filters, router]);

  const filteredUsers = data?.filter(
    (user) =>
      (filters.fullname
        ? user.fullName.toLowerCase().includes(filters.fullname.toLowerCase())
        : true) &&
      (filters.role
        ? user.role.toLowerCase().includes(filters.role.toLowerCase())
        : true)
  );
  if (isLoading) return <Loading />;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          value={filters.fullname}
          onChange={(e) => setFilters({ ...filters, fullname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by role"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          value={filters.role}
          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        />
      </div>
      <DataTable<IUser>
        title="Users Table"
        rows={filteredUsers}
        columns={columns}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default UsersTable;
