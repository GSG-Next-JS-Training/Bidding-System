import React from 'react'
import OfferTable from '@/components/offer-table/OfferTable'

const page = () => {
  return (
    <div className="flex items-center justify-center my-4">
        <div className="p-6 bg-white rounded-lg shadow-lg w-full ">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Available Offers</h2>
            <OfferTable/>
        </div>
    </div>
  )
}

export default page