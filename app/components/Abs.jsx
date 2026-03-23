import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Abs = () => {
  return (
    <section className='pt-16 px-4 sm:px-8 md:px-16 lg:px-24'>

      <div className='flex flex-col sm:flex-row items-center gap-10'>

        {/* Image Side */}
        <div className='w-full sm:w-1/2 relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden'>
          <Image
            src='/abs.jpeg'
            alt='About Jibs Car Rental'
            fill
            className='object-cover'
          />
        </div>

        {/* Text Side */}
        <div className='w-full sm:w-1/2 flex flex-col items-center text-center gap-4'>

          <h3 className='text-blue-600 text-sm uppercase tracking-[0.25em] font-semibold'>
            Who We Are
          </h3>

          <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 leading-snug'>
            Your Trusted <span className='text-blue-600'>Car Rental</span> Partner
          </h1>

          <h2 className='text-base sm:text-lg font-medium text-gray-500 max-w-md leading-relaxed'>
            Premium vehicles, unbeatable prices, and a seamless booking experience — 
            built for every journey you take.
          </h2>

          <p className='text-sm text-gray-400 max-w-md leading-relaxed'>
            At Jibs Car Rental, we believe getting around should be effortless. 
            Whether it's a quick city trip or a long road adventure, we have the 
            perfect car waiting for you. With flexible rental plans and 24/7 support, 
            your comfort is always our priority.
          </p>

          <Link
            href='/booking'
            className='mt-4 bg-blue-600 text-white text-sm font-semibold px-8 py-2 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-200'
          >
            Book Now
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Abs