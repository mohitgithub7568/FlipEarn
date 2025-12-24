import { PricingTable } from '@clerk/clerk-react'
import React from 'react'

const Plans = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30 max-md:px-4'>
      <div className='text-center'>
        <h2 className='text-grey-700 text-4xl font-semibold'> Choose your plan</h2>
        <p className='text-grey-600 mx-auto max-w-md text-sm'>Start for free and scale up as you grow. Find the right plan for your needs.</p>
      </div>
      <div className='mt-14'>
        <PricingTable/>
      </div>
    </div>
  )
}

export default Plans
