'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Hero = () => {
  const [current, setCurrent] = useState(0)

  const images = [
    '/hero1.jpeg',
    '/hero1.jpeg',
    '/hero1.jpeg',
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='relative w-full h-screen overflow-hidden pt-15'>

      
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

    
      <div className='absolute inset-0 bg-black/55' />

    
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>

        <h2 className='text-blue-400 text-sm sm:text-base uppercase tracking-[0.3em] font-semibold mb-3'>
          Premium Car Rental Service
        </h2>

        <h1 className='text-white text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl'>
          Drive the Car of <br />
          <span className='text-blue-500'>Your Dreams</span>
        </h1>

        <p className='text-gray-300 text-base sm:text-lg max-w-xl mb-10 leading-relaxed'>
          Choose from our wide range of premium vehicles. 
          Affordable rates, flexible bookings, and top-tier service — 
          wherever the road takes you.
        </p>

        
        <div className='flex flex-col sm:flex-row gap-4'>
          <Link
            href='/booking'
            className='bg-blue-600 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105'
          >
            Book Now
          </Link>
          <Link
            href='/cars'
            className='border border-white text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200 hover:scale-105'
          >
            View Collection
          </Link>
        </div>

      </div>

    
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'bg-blue-500 w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

    </div>
  )
}

export default Hero
