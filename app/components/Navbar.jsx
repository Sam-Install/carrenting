'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaCar, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Cars', href: '/cars' },
    { label: 'Booking', href: '/booking' },
  ]

  return (
    <>
      <nav className='absolute top-0 left-0 w-full z-50 px-6 py-5'>

    
        <div className='flex items-center justify-between'>

    
          <Link href='/' className='flex items-center gap-2'>
            <FaCar className='text-blue-400 text-2xl' />
            <h1 className='text-xl font-bold tracking-tight text-white'>
              Jibs <span className='text-blue-400'>Car Rental</span>
            </h1>
          </Link>

          
          <ul className='hidden sm:flex items-center text-base text-white/80 gap-8'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='hover:text-white transition-colors duration-200'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          
          <div className='hidden sm:block'>
            <Link
              href='/booking'
              className='bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-500 transition-colors duration-200'
            >
              Book Now
            </Link>
          </div>

        
          <button
            className={`sm:hidden transition-colors z-[60] relative ${
              menuOpen ? 'text-gray-800' : 'text-white hover:text-blue-400'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={22} />}
          </button>

        </div>
      </nav>

    
      <div
        className={`fixed inset-0 z-[55] bg-white flex flex-col px-8 pt-24 pb-10 sm:hidden transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        
        <ul className='flex flex-col gap-2 flex-1'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='flex items-center justify-between px-2 py-4 text-sm font-semibold text-gray-800 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='mt-auto'>
          <Link
            href='/booking'
            onClick={() => setMenuOpen(false)}
            className='flex items-center justify-center bg-blue-600 text-white text-base font-semibold w-full py-4 rounded-full hover:bg-blue-700 transition-colors duration-200'
          >
            Book Now
          </Link>


          <div className='flex items-center justify-center gap-2 mt-8'>
            <FaCar className='text-blue-500 text-xl' />
            <span className='text-gray-400 text-sm font-medium tracking-wide'>
              Jibs Car Rental
            </span>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar