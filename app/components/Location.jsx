import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const contactDetails = [
  {
    id: 1,
    icon: <FaPhone className='text-blue-600 text-xl' />,
    label: 'Phone',
    value: '+254 712 345 678',
    sub: 'Mon - Sun, 6am to 10pm',
  },
  {
    id: 2,
    icon: <FaEnvelope className='text-blue-600 text-xl' />,
    label: 'Email',
    value: 'info@jibscarrental.com',
    sub: 'We reply within 24 hours',
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className='text-blue-600 text-xl' />,
    label: 'Location',
    value: 'South Coast Diani, Kenya',
    sub: 'Diani Beach Road, Kwale County',
  },
  {
    id: 4,
    icon: <FaClock className='text-blue-600 text-xl' />,
    label: 'Working Hours',
    value: 'Open Every Day',
    sub: '6:00 AM – 10:00 PM',
  },
]

const Location = () => {
  return (
    <section className='pt-16 pb-20 px-4 sm:px-8 md:px-16 lg:px-24' id='#location'>

      {/* Header */}
      <div className='text-center mb-12'>
        <h3 className='text-blue-600 text-sm uppercase tracking-[0.25em] font-semibold mb-2'>
          Find Us
        </h3>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900'>
          Our Location
        </h1>
        <p className='text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto'>
          Visit us at the beautiful South Coast Diani — we are easy to find and always ready to serve you.
        </p>
      </div>

      <div className='flex flex-col sm:flex-row gap-8 items-stretch'>

        {/* Contact Details */}
        <div className='w-full sm:w-1/2 flex flex-col gap-5'>
          {contactDetails.map((item) => (
            <div
              key={item.id}
              className='flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              {/* Icon */}
              <div className='bg-blue-50 p-3 rounded-xl shrink-0'>
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className='text-xs text-gray-400 uppercase tracking-wider mb-0.5'>
                  {item.label}
                </p>
                <h2 className='text-base font-bold text-gray-900'>
                  {item.value}
                </h2>
                <p className='text-sm text-gray-400 mt-0.5'>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className='w-full sm:w-1/2 rounded-2xl overflow-hidden shadow-sm border border-gray-100 min-h-[400px]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.240772840405!2d39.5647!3d-4.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401c9b0f3c3c3f%3A0x1234567890abcdef!2sDiani%20Beach%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske'
            width='100%'
            height='100%'
            style={{ border: 0, minHeight: '400px' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Diani Beach Location'
          />
        </div>

      </div>

    </section>
  )
}

export default Location