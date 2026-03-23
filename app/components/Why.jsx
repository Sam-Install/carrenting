import React from 'react'
import { FaShieldAlt, FaCarSide, FaClock, FaHeadset, FaMoneyBillWave, FaMapMarkedAlt } from 'react-icons/fa'

const reasons = [
  {
    id: 1,
    icon: <FaCarSide className='text-blue-600 text-3xl' />,
    title: 'Wide Car Selection',
    description: 'From compact city cars to luxury SUVs, we have the perfect vehicle for every need and budget.',
  },
  {
    id: 2,
    icon: <FaMoneyBillWave className='text-blue-600 text-3xl' />,
    title: 'Affordable Rates',
    description: 'Transparent pricing with no hidden fees. Get the best value for your money every single time.',
  },
  {
    id: 3,
    icon: <FaShieldAlt className='text-blue-600 text-3xl' />,
    title: 'Fully Insured',
    description: 'Every vehicle in our fleet is fully insured, so you can hit the road with complete peace of mind.',
  },
  {
    id: 4,
    icon: <FaClock className='text-blue-600 text-3xl' />,
    title: 'Flexible Booking',
    description: 'Book by the hour, day, or week. Modify or cancel your reservation with zero hassle.',
  },
  {
    id: 5,
    icon: <FaHeadset className='text-blue-600 text-3xl' />,
    title: '24/7 Support',
    description: 'Our customer support team is always on standby to assist you anytime, day or night.',
  },
  {
    id: 6,
    icon: <FaMapMarkedAlt className='text-blue-600 text-3xl' />,
    title: 'Multiple Locations',
    description: 'Pick up and drop off at convenient locations across the city — wherever suits you best.',
  },
]

const Why = () => {
  return (
    <section className='pt-16 pb-20 px-4 sm:px-8 md:px-16 lg:px-24'>

      
      <div className='text-center mb-12'>
        <h3 className='text-blue-600 text-sm uppercase tracking-[0.25em] font-semibold mb-2'>
          Our Advantages
        </h3>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900'>
          Why Choose Us
        </h1>
        <p className='text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto'>
          We go the extra mile to make your rental experience smooth, safe, and memorable.
        </p>
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {reasons.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-start gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300'
          >
            
            <div className='bg-blue-50 p-4 rounded-xl'>
              {item.icon}
            </div>

            
            <div>
              <h2 className='text-lg font-bold text-gray-900 mb-1'>
                {item.title}
              </h2>
              <p className='text-sm text-gray-400 leading-relaxed'>
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Why