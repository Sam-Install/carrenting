import React from 'react'
import Link from 'next/link'
import { FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-400 pt-16 pb-8 px-4 sm:px-8 md:px-16 lg:px-24'>

      {/* Top Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800'>

        {/* Brand */}
        <div className='flex flex-col gap-4'>
          <Link href='/' className='flex items-center gap-2'>
            <FaCar className='text-blue-500 text-2xl' />
            <span className='text-white text-xl font-bold tracking-tight'>
              Jibs <span className='text-blue-500'>Car Rental</span>
            </span>
          </Link>
          <p className='text-sm leading-relaxed'>
            Premium car rental service based in South Coast Diani, Kenya. Your comfort and convenience is our priority.
          </p>
          {/* Socials */}
          <div className='flex gap-3 mt-2'>
            <a href='#' className='bg-gray-800 hover:bg-blue-600 text-white p-2.5 rounded-full transition-colors duration-200'>
              <FaFacebookF size={14} />
            </a>
            <a href='#' className='bg-gray-800 hover:bg-blue-600 text-white p-2.5 rounded-full transition-colors duration-200'>
              <FaInstagram size={14} />
            </a>
            <a href='#' className='bg-gray-800 hover:bg-blue-600 text-white p-2.5 rounded-full transition-colors duration-200'>
              <FaTwitter size={14} />
            </a>
            <a href='#' className='bg-gray-800 hover:bg-green-500 text-white p-2.5 rounded-full transition-colors duration-200'>
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-semibold text-base'>Quick Links</h3>
          <ul className='flex flex-col gap-2'>
            {[
              { label: 'Home', href: '/' },
              { label: 'Our Cars', href: '/cars' },
              { label: 'Book Now', href: '/booking' },
              { label: 'About Us', href: '#about' },
              { label: 'Contact', href: '#location' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className='text-sm hover:text-blue-400 transition-colors duration-200'
                >
                  → {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Car Categories */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-semibold text-base'>Our Fleet</h3>
          <ul className='flex flex-col gap-2'>
            {['Sedans', 'SUVs', 'Luxury Cars', 'Sports Cars', 'Compact Cars'].map((item) => (
              <li key={item}>
                <Link
                  href='/cars'
                  className='text-sm hover:text-blue-400 transition-colors duration-200'
                >
                  → {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-white font-semibold text-base'>Contact Us</h3>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-start gap-3'>
              <FaMapMarkerAlt className='text-blue-500 mt-0.5 shrink-0' />
              <span className='text-sm'>Diani Beach Road, South Coast, Kwale County, Kenya</span>
            </li>
            <li className='flex items-center gap-3'>
              <FaPhone className='text-blue-500 shrink-0' />
              <span className='text-sm'>+254 712 345 678</span>
            </li>
            <li className='flex items-center gap-3'>
              <FaEnvelope className='text-blue-500 shrink-0' />
              <span className='text-sm'>info@jibscarrental.com</span>
            </li>
          </ul>
        </div>

      </div>

    
      <div className='flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-xs text-gray-600'>
        <p>© {new Date().getFullYear()} Jibs Car Rental. All rights reserved.</p>
        <p>Designed with simplicity in Diani, Kenya</p>
      </div>

    </footer>
  )
}

export default Footer