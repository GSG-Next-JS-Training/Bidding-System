"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TABLE_HEADER, USERS_DATA } from "./constants";

const UsersTable = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

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

  const filteredUsers = USERS_DATA.filter(
    (user) =>
      (filters.fullname
        ? user.fullname.toLowerCase().includes(filters.fullname.toLowerCase())
        : true) &&
      (filters.role
        ? user.role.toLowerCase().includes(filters.role.toLowerCase())
        : true)
  );

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          value={filters.fullname}
          onChange={(e) =>
            setFilters({ ...filters, fullname: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Filter by role"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full"
          value={filters.role}
          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-gray-100">
              {TABLE_HEADER.map((element, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-sm sm:text-base"
                >
                  {element}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className="text-center text-sm sm:text-base"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {user.fullname}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.address}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.role}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={TABLE_HEADER.length}
                  className="text-center text-gray-500 py-4"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:hidden gap-4 mt-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <p>
                <strong>Name:</strong> {user.fullname}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No users found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UsersTable;
