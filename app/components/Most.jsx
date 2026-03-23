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
    <section className='pt-12 pb-16 px-4 sm:px-6 md:px-12 lg:px-20'>

      <div className='text-center mb-8'>
        <h3 className='text-blue-600 text-xs uppercase tracking-[0.25em] font-semibold mb-1.5'>
          Top Picks
        </h3>
        <h1 className='text-2xl sm:text-3xl font-bold text-gray-900'>
          Most Rented Cars
        </h1>
        <p className='text-gray-400 mt-2 text-xs sm:text-sm max-w-md mx-auto'>
          Our most popular vehicles chosen by hundreds of happy customers every month.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {cars.map((car) => (
          <div
            key={car.id}
            className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group'
          >
            <div className='relative h-36 overflow-hidden'>
              <Image
                src={car.image}
                alt={car.name}
                fill
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <span className='absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full'>
                {car.category}
              </span>
            </div>

            <div className='p-3'>
              <h2 className='text-sm font-bold text-gray-900 leading-tight'>{car.name}</h2>
              <p className='text-[11px] text-gray-400 mt-1 leading-relaxed line-clamp-2'>
                {car.description}
              </p>

              <div className='flex items-center justify-between mt-3'>
                <div>
                  <span className='text-base font-bold text-blue-600'>ksh{car.price}</span>
                  <span className='text-[10px] text-gray-400 ml-0.5'>/day
                  </span>
                </div>
                <Link
                  href='/booking'
                  className='bg-blue-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors duration-200'
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