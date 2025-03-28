import AddBiddingForm from '@/components/add-bid/handle-form'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-5 text-center text-blue-500'>Add New Bid</h1>
      <AddBiddingForm/>
    </div>
  )
}

export default page