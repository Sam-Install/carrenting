'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { FaCar, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Cars', href: '/cars' },
    { label: 'Booking', href: '/booking' },
  ]

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <nav className='absolute top-0 left-0 w-full z-50 px-6 py-5'>
        <div className='flex items-center justify-between'>

          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <FaCar className='text-blue-400 text-2xl' />
            <h1 className='text-xl font-bold tracking-tight text-white'>
              Jibs <span className='text-blue-400'>Car Rental</span>
            </h1>
          </Link>

          {/* Desktop Nav Links */}
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

          {/* Desktop Right: User Icon Dropdown + Book Now */}
          <div className='hidden sm:flex items-center gap-4'>

            {/* User icon with hover dropdown */}
            <div
              className='relative'
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className='text-white/80 hover:text-white transition-colors duration-200 flex items-center'
                aria-label='User menu'
              >
                <FaUserCircle size={28} />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute right-0 top-full pt-2 transition-all duration-200 ${
                  dropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className='w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden'>
                  <Link
                    href='/login'
                    className='flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150'
                  >
                    <FaUserCircle className='text-blue-400 shrink-0' size={15} />
                    Login
                  </Link>
                  <div className='h-px bg-gray-100' />
                  <Link
                    href='/register'
                    className='flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150'
                  >
                    <svg className='text-blue-400 w-[15px] h-[15px] shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' />
                    </svg>
                    Register
                  </Link>
                </div>
              </div>
            </div>

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
          <li>
            <Link
              href='/login'
              onClick={() => setMenuOpen(false)}
              className='flex items-center justify-between px-2 py-4 text-sm font-semibold text-gray-800 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200'
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href='/register'
              onClick={() => setMenuOpen(false)}
              className='flex items-center justify-between px-2 py-4 text-sm font-semibold text-gray-800 border-b border-gray-100 hover:text-blue-600 transition-colors duration-200'
            >
              Register
            </Link>
          </li>
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