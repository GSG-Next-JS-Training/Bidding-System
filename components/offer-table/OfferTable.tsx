'use client';
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TABLE_HEADER: string[] = ['Company', 'Service', 'Discount', 'Location', 'Status', 'Action'];
const offers = [
    { id: 1, company: "Tech Solutions", service: "Web Development", discount: "10%", location: "Hebron", status: "Active" },
    { id: 2, company: "Data Corp", service: "Cloud Hosting", discount: "15%", location: "Bethlehem", status: "Active" },
    { id: 3, company: "DesignX", service: "UI/UX Design", discount: "12%", location: "Rawabi", status: "Expired" },
];

const OfferTable = () => {
    const params = useSearchParams();
    const router = useRouter();
    const [filters, setFilters] = useState({
        location : params.get('location') || '',
        serviceType : params.get('serviceType') || '',
        discountRate : params.get('discountRate') || ''
    });
    useEffect(() =>{
        const urlParams = new URLSearchParams();
        if(filters.location) urlParams.set('location', filters.location);
        if(filters.serviceType) urlParams.set('serviceType', filters.serviceType)
        if(filters.discountRate) urlParams.set('discountRate', filters.discountRate)
        
        router.push(`?${urlParams.toString()}`,undefined, {scroll : false})
    }, [filters, router]);
    const filteredOffers = offers.filter(offer =>
        (filters.location ? offer.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
        (filters.serviceType ? offer.service.toLowerCase().includes(filters.serviceType.toLowerCase()) : true) &&
        (filters.discountRate ? offer.discount.toLowerCase().includes(filters.discountRate.toLowerCase()) : true)
    );

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Filter by location"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-full"
                    value={filters.location}
                    onChange={e => setFilters({ ...filters, location: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Filter by service type"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-full"
                    value={filters.serviceType}
                    onChange={e => setFilters({ ...filters, serviceType: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Filter by discount"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 w-full"
                    value={filters.discountRate}
                    onChange={e => setFilters({ ...filters, discountRate: e.target.value })}
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 min-w-[600px]">
                    <thead>
                        <tr className="bg-gray-100">
                            {TABLE_HEADER.map((element, index) => (
                                <th key={index} className="border border-gray-300 px-4 py-2 text-sm sm:text-base">
                                    {element}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOffers.length > 0 ? (
                            filteredOffers.map(offer => (
                                <tr key={offer.id} className="text-center text-sm sm:text-base">
                                    <td className="border border-gray-300 px-4 py-2">{offer.company}</td>
                                    <td className="border border-gray-300 px-4 py-2">{offer.service}</td>
                                    <td className="border border-gray-300 px-4 py-2">{offer.discount}</td>
                                    <td className="border border-gray-300 px-4 py-2">{offer.location}</td>
                                    <td className={`border border-gray-300 px-4 py-2 ${offer.status === "Active" ? "text-green-500" : "text-red-500"}`}>
                                        {offer.status}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            className={`bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 disabled:opacity-50 ${
                                                offer.status !== "Active" ? "cursor-not-allowed" : "cursor-pointer"
                                            }`}
                                            disabled={offer.status !== "Active"}
                                        >
                                            Place Bid
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={TABLE_HEADER.length} className="text-center text-gray-500 py-4">
                                    No offers found. Check back later!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className="grid grid-cols-1 sm:hidden gap-4 mt-4">
                {filteredOffers.length > 0 ? (
                    filteredOffers.map(offer => (
                        <div key={offer.id} className="border p-4 rounded-lg shadow-sm bg-white">
                            <p><strong>Company:</strong> {offer.company}</p>
                            <p><strong>Service:</strong> {offer.service}</p>
                            <p><strong>Discount:</strong> {offer.discount}</p>
                            <p><strong>Location:</strong> {offer.location}</p>
                            <p className={offer.status === "Active" ? "text-green-500" : "text-red-500"}>
                                <strong>Status:</strong> {offer.status}
                            </p>
                            <button
                                className={`w-full mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 disabled:opacity-50 ${
                                    offer.status !== "Active" ? "cursor-not-allowed" : "cursor-pointer"
                                }`}
                                disabled={offer.status !== "Active"}
                            >
                                Place Bid
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No offers found. Check back later!</p>
                )}
            </div>
        </div>
    );
};

export default OfferTable;
