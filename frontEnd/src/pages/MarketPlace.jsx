import { ArrowLeft, FilterIcon, Verified } from 'lucide-react'
import React from 'react'
import { useNavigate , useSearchParams } from 'react-router-dom'
import { useState} from 'react'
import { useSelector } from 'react-redux'
import ListingCard from '../components/ListingCard.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'

const MarketPlace = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  const Navigate = useNavigate();
  const [showFilterPhone,setShowFilterPhone] = useState(false);
  const [filters,setFilters] = useState({
    platform: null,
    maxPrice: 100000,
    minFollower: null,
    niche: null,
    verified: false,
    monetized: false,
  });

  const {listings} = useSelector(state => state.listing);

  const filteredListings = listings.filter((listing)=>{
    if (filters.platform && filters.platform.length > 0) {
      if (!filters.platform.includes(listing.platform)) return false
    }
    if (filters.maxPrice) {
      if (listing.price > filters.maxPrice) return false
    }

    if (filters.minFollowers) {
      if (listing.followers_count < filters.minFollowers) return false
    }

    if (filters.niche && filters.niche.length > 0) {
      if (!filters.niche.includes(listing.niche)) return false
    }

    if (filters.verified && listing.verified !== filters.verified) return false
    if (filters.monetized && listing.monetized !== filters.monetized) return false


    if (search) {
      const trimed = search.trim()
      if (!listing.title.toLowerCase().includes(trimed.toLowerCase())
        && !listing.username.toLowerCase().includes(trimed.toLowerCase())
        && !listing.description.toLowerCase().includes(trimed.toLowerCase())
        && !listing.platform.toLowerCase().includes(trimed.toLowerCase())
        && !listing.niche.toLowerCase().includes(trimed.toLowerCase())
      ) 
      return false
    }

    return true
  });
   // Placeholder for filter logic

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex items-center justify-between text-slate-500'>
        <button onClick={()=>{Navigate('/'); scrollTo(0,0);}} className='flex items-center gap-2 py-5'>
          <ArrowLeft className='size-4'/>
          Back to home
          </button>

        {/* Filters button for mobile */}
        <button onClick={()=>{setShowFilterPhone(true)}} className='flex items-center gap-2 py-5 sm:hidden'>
          <FilterIcon className='size-4'/>
          Filters
          </button>
      </div>
      <div className='flex items-start justify-between pb-8 gap-6'>

       <FilterSidebar showFilterPhone={showFilterPhone} setShowFilterPhone={setShowFilterPhone} filters={filters} setFilters={setFilters}></FilterSidebar>

        <div className='flex-1 grid xl:grid-cols-2 gap-4'>
          {filteredListings.sort((a, b) => a.featured ? -1 : b.featured ? 1 : 0 ).map((listing,index) => (
                <ListingCard listing={listing} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketPlace
