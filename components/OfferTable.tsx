'use client';
import { useState } from "react";

const INITIAL_VALUES = { location : "", serviceType : "",discountRate : "" };
const TABLE_HEADER : string[] = ['Company', 'Service', 'Discount', 'Location', 'Status', 'Action'];

const OfferTable = () => {
    const [filters, setFilters] = useState(INITIAL_VALUES);

    const offers = [
        { id: 1, company: "Tech Solutions", service: "Web Development", discount: "10%", location: "Hebron", status: "Active" },
        { id: 2, company: "Data Corp", service: "Cloud Hosting", discount: "15%", location: "Bethlehem", status: "Active" },
        { id: 3, company: "DesignX", service: "UI/UX Design", discount: "12%", location: "Rawabi", status: "Expired" },
  ];

    const filteredOffers = offers.filter(offer => 
        (filters.location ? offer.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
        (filters.serviceType ? offer.service.toLowerCase().includes(filters.serviceType.toLowerCase()) : true) &&
        (filters.discountRate ? offer.discount.toLowerCase().includes(filters.discountRate.toLowerCase()) : true)
);

return (
    <div>
        <div className="flex gap-4 mb-4">
            <input
            type="text"
            placeholder="Filter by location"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2  focus:ring-blue-500 w-1/3"
            value={filters.location}
            onChange={e => setFilters({...filters, location : e.target.value})}
        />
        <input
        type="text"
        placeholder="Filter by service type"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-1/3"
        value={filters.serviceType}
        onChange={e => setFilters({...filters, serviceType : e.target.value})}
        />
        <input
        type="text"
        placeholder="Filter by discount"
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-1/3"
        value={filters.discountRate}
        onChange={e => setFilters({...filters, discountRate : e.target.value})}
        />
        </div>
        <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                    {
                        TABLE_HEADER.map((element, index) =>(
                            <th key={index + element} className="border border-gray-300 px-4 py-2">{element}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody>
                    {filteredOffers.length > 0 ? (
                        filteredOffers.map(offer => (
                        <tr key={offer.id} className="text-center">
                            <td className="border border-gray-300 px-4 py-2">{offer.company}</td>
                            <td className="border border-gray-300 px-4 py-2">{offer.service}</td>
                            <td className="border border-gray-300 px-4 py-2">{offer.discount}</td>
                            <td className="border border-gray-300 px-4 py-2">{offer.location}</td>
                            <td className={`border border-gray-300 px-4 py-2 ${offer.status === "Active" ? "text-green-500" : "text-red-500"}`}>
                                {offer.status}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button
                                className="bg-blue-500 cursor-pointer text-white px-4 py-1 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                                disabled={offer.status !== "Active"}
                                >
                                    Place Bid
                                </button>
                            </td>
                        </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan= {TABLE_HEADER.length} className="text-center text-gray-500 py-4">No offers found. Check back later!</td>
                        </tr>
                        )}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default OfferTable;