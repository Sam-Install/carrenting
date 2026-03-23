import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'James Mwangi',
    location: 'Nairobi, Kenya',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review:
      'Absolutely fantastic service! The car was clean, well-maintained, and the booking process was seamless. Will definitely rent again on my next trip to Diani.',
  },
  {
    id: 2,
    name: 'Sofia Andersson',
    location: 'Stockholm, Sweden',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    review:
      'Best car rental experience I have ever had. The team was so friendly and helpful. The Range Rover was perfect for exploring the coastal roads!',
  },
  {
    id: 3,
    name: 'David Otieno',
    location: 'Mombasa, Kenya',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
    rating: 4,
    review:
      'Great selection of cars and very affordable rates. Pickup was quick and the staff were professional. Highly recommend Jibs Car Rental to everyone.',
  },
  {
    id: 4,
    name: 'Amina Hassan',
    location: 'Dubai, UAE',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    review:
      'I was visiting Diani for a holiday and Jibs made getting around so easy. The car was spotless and the price was very reasonable. 10 out of 10!',
  },
  {
    id: 5,
    name: 'Carlos Mendes',
    location: 'Lisbon, Portugal',
    image: 'https://randomuser.me/api/portraits/men/74.jpg',
    rating: 5,
    review:
      'Smooth, reliable, and professional. I booked a Mustang for the weekend and it was an unforgettable experience on the Diani Beach road!',
  },
  {
    id: 6,
    name: 'Grace Wanjiku',
    location: 'Kisumu, Kenya',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    rating: 4,
    review:
      'Very convenient location and super easy booking. The customer support team responded fast when I had a question. Great overall experience.',
  },
]

const Client = () => {
  return (
    <section className='pt-16 pb-20 px-4 sm:px-8 md:px-16 lg:px-24'>

      {/* Header */}
      <div className='text-center mb-12'>
        <h3 className='text-blue-600 text-sm uppercase tracking-[0.25em] font-semibold mb-2'>
          Testimonials
        </h3>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900'>
          What Our Clients Say
        </h1>
        <p className='text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto'>
          Hundreds of happy customers trust Jibs Car Rental for their journeys — here is what some of them have to say.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {reviews.map((r) => (
          <div
            key={r.id}
            className='bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300'
          >

            {/* Stars */}
            <div className='flex gap-1'>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < r.rating ? 'text-yellow-400' : 'text-gray-200'}
                  size={14}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className='text-sm text-gray-500 leading-relaxed flex-1'>
              "{r.review}"
            </p>

            {/* Reviewer */}
            <div className='flex items-center gap-3 pt-2 border-t border-gray-100'>
              <div className='relative w-10 h-10 rounded-full overflow-hidden shrink-0'>
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  className='object-cover'
                />
              </div>
              <div>
                <h2 className='text-sm font-bold text-gray-900'>{r.name}</h2>
                <p className='text-xs text-gray-400'>{r.location}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Client