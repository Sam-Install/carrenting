import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    category: 'Sedan',
    description: 'A smooth and comfortable ride perfect for city drives and long-distance trips.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Range Rover Sport',
    category: 'SUV',
    description: 'Dominate any terrain with luxury comfort and powerful performance.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    category: 'Luxury',
    description: 'Experience elegance and precision engineering on every road you travel.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Honda Civic',
    category: 'Compact',
    description: 'Fuel-efficient and reliable — ideal for everyday commutes and errands.',
    price: 900,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Ford Mustang',
    category: 'Sports',
    description: 'Feel the thrill of the open road with iconic American muscle and style.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Toyota Prado',
    category: 'SUV',
    description: 'A rugged family SUV built for adventure with premium interior comfort.',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop',
  },
]

const Most = () => {
  return (
    <section className='pt-16 pb-20 px-4 sm:px-8 md:px-16 lg:px-24'>

      {/* Section Header */}
      <div className='text-center mb-12'>
        <h3 className='text-blue-600 text-sm uppercase tracking-[0.25em] font-semibold mb-2'>
          Top Picks
        </h3>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900'>
          Most Rented Cars
        </h1>
        <p className='text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto'>
          Our most popular vehicles chosen by hundreds of happy customers every month.
        </p>
      </div>

      {/* Cars Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {cars.map((car) => (
          <div
            key={car.id}
            className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group'
          >
            {/* Car Image */}
            <div className='relative h-52 overflow-hidden'>
              <Image
                src={car.image}
                alt={car.name}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              {/* Category Badge */}
              <span className='absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                {car.category}
              </span>
            </div>

            {/* Car Details */}
            <div className='p-5'>
              <h2 className='text-lg font-bold text-gray-900'>{car.name}</h2>
              <p className='text-sm text-gray-400 mt-1 leading-relaxed'>
                {car.description}
              </p>

              {/* Price + Button */}
              <div className='flex items-center justify-between mt-5'>
                <div>
                  <span className='text-2xl font-bold text-blue-600'>ksh{car.price}</span>
                  <span className='text-xs text-gray-400 ml-1'>/ hour</span>
                </div>
                <Link
                  href='/booking'
                  className='bg-blue-600 text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors duration-200'
                >
                  Book Now
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Most