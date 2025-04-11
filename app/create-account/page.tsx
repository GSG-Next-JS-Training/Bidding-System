import AddUserForm from '@/components/add-user/handle-form'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto mt-10 max-w-lg p-6 bg-white rounded-lg shadow-lg'>
      <h1 className='text-2xl font-bold mb-5 text-center text-primary'>Add New User</h1>
      <AddUserForm/>
    </div>
  )
}

export default page
