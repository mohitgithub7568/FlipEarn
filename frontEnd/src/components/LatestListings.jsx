import React from 'react'
import Title from './Title.jsx'
import {useSelector} from 'react-redux'
import { List } from 'lucide-react'
import ListingCard from './ListingCard.jsx'

const LatestListings = () => {

  const {listings} = useSelector(state => state.listing);

  return (
    <div className='mt-20 mb-8'>
      <Title title="Latest Listings" description="Discover the newest items on our marketplace." />
      <div className='flex flex-col gap-6 px-6'>
        {
        listings.slice(0,4).map((listing,index) => (
            <div key ={index} className='mx-auto w-full max-w-2xl border border-gray-300 rounded-lg p-4'>
                <ListingCard listing={listing}/>
            </div>
        ))
        }
      </div>
    </div>
    
  )
}

export default LatestListings
