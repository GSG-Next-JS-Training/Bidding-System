"use client";

import React, { useState } from "react";

type CompanyBase = {
  UniqueID: string;
  "company-name": string;
  "registration-number": string;
  location: string;
};

type BiddingCompany = CompanyBase & {
  "services-offered": string[];
};

type OffersCompany = CompanyBase & {
  "services-provided": string[];
};

const CompaniesTable = () => {
  const biddingCompanies: BiddingCompany[] = [
    {
      UniqueID: "bid-1",
      "company-name": "Alpha Builders",
      "registration-number": "REG-001",
      location: "New York",
      "services-offered": ["Construction", "Maintenance"],
    },
    {
      UniqueID: "bid-2",
      "company-name": "Skyline Contractors",
      "registration-number": "REG-002",
      location: "Los Angeles",
      "services-offered": ["Architecture", "Interior Design"],
    },
  ];

  const offersCompanies: OffersCompany[] = [
    {
      UniqueID: "offer-1",
      "company-name": "Super Supplies Co.",
      "registration-number": "REG-101",
      location: "Chicago",
      "services-provided": ["Material Supply", "Logistics"],
    },
    {
      UniqueID: "offer-2",
      "company-name": "Fast Delivery Ltd.",
      "registration-number": "REG-102",
      location: "Houston",
      "services-provided": ["Transport", "Warehousing"],
    },
  ];

  const companiesData = [
    ...biddingCompanies.map((company) => ({
      id: company.UniqueID,
      name: company["company-name"],
      regNo: company["registration-number"],
      location: company.location,
      services: company["services-offered"].join(", "),
      type: "Bidding Company",
    })),
    ...offersCompanies.map((company) => ({
      id: company.UniqueID,
      name: company["company-name"],
      regNo: company["registration-number"],
      location: company.location,
      services: company["services-provided"].join(", "),
      type: "Offer Company",
    })),
  ];

  const [search, setSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch =
      `${company.name} ${company.regNo} ${company.location} ${company.services}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLocation = locationSearch
      ? company.location.toLowerCase().includes(locationSearch.toLowerCase())
      : true;

    const matchesType = selectedType ? company.type === selectedType : true;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Companies Table</h2>

      <div className="flex flex-wrap gap-4 mb-4 ">
        <input
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400 w-full lg:w-[30%] sm:w-full"
        />

        <input
          type="text"
          placeholder="Search by location..."
          value={locationSearch}
          onChange={(e) => setLocationSearch(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400 w-full lg:w-[30%] sm:w-full"
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400 w-full lg:w-[30%] sm:w-full"
        >
          <option value="">All Types</option>
          <option value="Bidding Company">Bidding Company</option>
          <option value="Offer Company">Offer Company</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
          <thead>
            <tr className="bg-gray-100">
              {[
                "Company Name",
                "Registration No",
                "Location",
                "Services",
                "Type",
              ].map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-sm sm:text-base"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company) => (
                <tr
                  key={company.id}
                  className="text-center text-sm sm:text-base"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {company.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {company.regNo}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {company.location}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {company.services}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {company.type}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-4">
                  No companies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompaniesTable;
