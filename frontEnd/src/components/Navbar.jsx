import React from 'react'
import { assets } from '../assets /assets'
import { Link, useNavigate } from 'react-router-dom';

import { GripIcon, XIcon } from 'lucide-react';
import { MenuIcon } from 'lucide-react';
import { useClerk, useUser ,UserButton } from '@clerk/clerk-react';   
import { MessageCircleMoreIcon } from 'lucide-react';
import { ListIcon } from 'lucide-react';
import { BoxIcon } from 'lucide-react';


const Navbar = () => {

    const {user} = useUser();
    const {openSignIn} = useClerk();

    const [menuOpen, setMenuOpen] = React.useState(false)
    const navigate = useNavigate();
  return (
    <nav className='h-20 text-base'>
                <div className='fixed left-0 top-0 right-0 z-100 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white transition-all'>
                    <img onClick={() => {
                        navigate('/'); scrollTo(0, 0);
                    }} src={assets.logo} alt='logo' className='h-10 cursor-pointer'/>

                    {/* Desktop Menu */}
                    <div className='hidden sm:flex items-center gap-4 md:gap-8 text-gray-800'>
                        <Link to="/" className='text-sm md:text-base' onClick={() => scrollTo(0, 0)}> Home </Link>
                        <Link to="/marketplace" className='text-sm md:text-base' onClick={() => scrollTo(0, 0)}> Marketplace </Link>
                        <Link to={user ? "/messages" : "#"} className='text-sm md:text-base' onClick={() => user ? scrollTo(0, 0) : openSignIn()}> Messages </Link>
                        <Link to={user ? "/my-listings" : "#"} className='text-sm md:text-base' onClick={() => user ? scrollTo(0, 0) : openSignIn()}> My Listings </Link>


                    </div>
                    {!user ? 
                    <div>
                        <button onClick={openSignIn} className='max-sm:hidden cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full'>Login</button>
                        <MenuIcon onClick={() => setMenuOpen(true)} className='sm:hidden size-8 text-gray-500 hover:text-gray-700 cursor-pointer'/>
                    </div>
                    : (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='Marketplace' labelIcon={<GripIcon size={16}/>}  onClick={() => {navigate('/marketplace'); scrollTo(0, 0);}} />
                            <UserButton.Action label='Messages' labelIcon={<MessageCircleMoreIcon size={16}/>}  onClick={() => {navigate('/messages'); scrollTo(0, 0);}} />
                            <UserButton.Action label='My Listings' labelIcon={<ListIcon size={16}/>}  onClick={() => {navigate('/my-listings'); scrollTo(0, 0);}} />
                            <UserButton.Action label='My Orders' labelIcon={<BoxIcon size={16}/>}  onClick={() => {navigate('/my-orders'); scrollTo(0, 0);}} />
                        </UserButton.MenuItems>
                    </UserButton>

                    )}

                </div>
                {/* Mobile Menu */}
                <div className={`sm:hidden fixed inset-0 ${menuOpen ? 'w-full' : 'w-0'} overflow-hidden bg-white backdrop-blur shadow-xl rounded-lg z-[200] text-sm transition-all`}>
                    <div className='flex flex-col items-center justify-center h-full text-base font-semibold gap-6 p-4'>
                        <Link to="/marketplace" className='text-base' onClick={() => {setMenuOpen(false); scrollTo(0, 0);}}> Marketplace </Link>
                        <Link to={user ? "/messages" : "#"} className='text-base' onClick={() => {user ? (setMenuOpen(false), scrollTo(0, 0)) : openSignIn()}}> Messages </Link>
                        <Link to={user ? "/my-listings" : "#"} className='text-base' onClick={() => {user ? (setMenuOpen(false), scrollTo(0, 0)) : openSignIn()}}> My Listings </Link>


                        <button onClick={openSignIn} className=' cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full'>Login</button>
                        <XIcon onClick={() => setMenuOpen(false)} className='size-8 text-gray-500 hover:text-gray-700 cursor-pointer absolute top-4 right-4'/>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar
