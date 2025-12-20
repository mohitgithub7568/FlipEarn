import React, { use } from 'react'
import { platformIcons } from '../assets /assets';
import { BadgeCheck, LineChart, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    const currency = import.meta.env.VITE_CURRENCY || '$';
    const navigate = useNavigate();
    return (
    
        <div className="
  relative bg-white rounded-lg border border-gray-200 overflow-hidden
  shadow-sm transform-gpu
  transition-all duration-300 ease-out
  hover:scale-[1.015]
  hover:-translate-y-[2px]
  hover:shadow-lg">

        {/* featured banner */}
            {listing.featured && (
                <>
                    <p className='py-1' />
                    <div className='absolute top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center text-xs tracking-wide uppercase font-semibold rounded-t-lg py-1'>
                        Featured
                    </div>
                    <p className='py-1' />
                </>
            )}
            <div className='p-5 pt-8'>
        {/* Header */}
                <div className='flex items-center gap-3 mb-4'>
                    {platformIcons[listing.platform]}
                    <div className='flex flex-col'>
                        <h2>{listing.title}</h2>
                        <p>@{listing.username} -  <span className='capitalize'>{listing.platform}</span></p>
                    </div>
                    {listing.verified && <BadgeCheck className='size-5 text-blue-500 ml-auto w-5 h-5' />}
                </div>
        {/*stats */}
                <div className='flex flex-wrap justify-between max-w-lg items-center gap-3 mb-5'>
                    <div className='text-sm items-center flex text-gray-600'>
                        <Users className='size-5 text-gray-600 inline-block mr-1' />
                        <span className='text-gray-700 font-medium text-slate-700 mr-1.5'>{listing.followers_count.toLocaleString()} Followers</span>
                    </div>
                    {listing.engagement_rate && (
                        <div className='text-sm flex items-center text-gray-600'>
                            <LineChart className='size-5 text-gray-600 mr-1' />
                            <span className='text-gray-700 font-medium text-slate-700 mr-1.5'>Engagement: {listing.engagement_rate}%</span>
                        </div>
                    )}
                </div>
        {/* tags and location */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-pink-100 text-gray-700 px-3 py-1 rounded-full text-xs capitalize">
                        {listing.niche}
                    </span>

                    {listing.country && (
                        <span className="text-sm text-gray-600">
                            {listing.country}
                        </span>
                    )}
                </div>

        {/*discription */}
                <p className='text-sm text-gray-700 mb-1 line-clamp-2'>{listing.description}</p>
                <hr className='my-2 border-grey-100' />
        {/*footer */}
                <div className='flex items-center justify-between'>
                    <div className='text-2xl font-bold text-gray-800 text-slate-800'>
                        {currency}{listing.price.toLocaleString()}
                    </div>
                    <button onClick={() => { navigate(`/listing/${listing.id}`); scrollTo(0, 0) }} className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition'>
                        More Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ListingCard
