'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { FaCar, FaUsers, FaGasPump, FaCog, FaStar, FaSearch, FaChevronLeft, FaChevronRight, FaSlidersH, FaCalculator, FaTimes } from 'react-icons/fa'
import Footer from '../components/Footer'

const allCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    category: 'Sedan',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 4.8,
    pricePerHour: 2500,
    pricePerDay: 5000,
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
    ],
    description: 'A smooth and comfortable sedan perfect for city drives and long-distance trips.',
  },
  {
    id: 2,
    name: 'Range Rover Sport',
    category: 'SUV',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Automatic',
    rating: 4.9,
    pricePerHour: 8000,
    pricePerDay: 18000,
    images: [
      'https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop',
    ],
    description: 'Dominate any terrain with luxury comfort and powerful performance.',
  },
  {
    id: 3,
    name: 'Mercedes C-Class',
    category: 'Luxury',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 5.0,
    pricePerHour: 10000,
    pricePerDay: 20000,
    images: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&auto=format&fit=crop',
    ],
    description: 'Experience elegance and precision engineering on every road you travel.',
  },
  {
    id: 4,
    name: 'Honda Civic',
    category: 'Compact',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.6,
    pricePerHour: 1800,
    pricePerDay: 3500,
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590510696498-c1a8b96c8b8a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop',
    ],
    description: 'Fuel-efficient and reliable, ideal for everyday commutes around Diani.',
  },
  {
    id: 5,
    name: 'Ford Mustang',
    category: 'Sports',
    seats: 4,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 4.9,
    pricePerHour: 12000,
    pricePerDay: 19000,
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&auto=format&fit=crop',
    ],
    description: 'Feel the thrill of iconic American muscle on the open Diani Beach road.',
  },
  {
    id: 6,
    name: 'Toyota Prado',
    category: 'SUV',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Automatic',
    rating: 4.7,
    pricePerHour: 7000,
    pricePerDay: 15000,
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548170523-f55e0f3b0ade?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800&auto=format&fit=crop',
    ],
    description: 'A rugged family SUV built for adventure with premium comfort inside.',
  },
  {
    id: 7,
    name: 'BMW 3 Series',
    category: 'Luxury',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Automatic',
    rating: 4.8,
    pricePerHour: 9000,
    pricePerDay: 17000,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523983302827-97e8e67b0b1e?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop',
    ],
    description: 'The ultimate driving machine blending performance with a premium interior.',
  },
  {
    id: 8,
    name: 'Volkswagen Polo',
    category: 'Compact',
    seats: 5,
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: 4.5,
    pricePerHour: 1500,
    pricePerDay: 3000,
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=800&auto=format&fit=crop',
    ],
    description: 'Compact, zippy and easy to park — perfect for solo South Coast explorers.',
  },
  {
    id: 9,
    name: 'Nissan X-Trail',
    category: 'SUV',
    seats: 7,
    fuel: 'Diesel',
    transmission: 'Automatic',
    rating: 4.6,
    pricePerHour: 5500,
    pricePerDay: 12000,
    images: [
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551830820-330a71b99659?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&auto=format&fit=crop',
    ],
    description: 'A versatile family SUV with spacious interiors and strong off-road capability.',
  },
]

const categories = ['All', 'Sedan', 'SUV', 'Luxury', 'Compact', 'Sports']
const MIN_PRICE = 3000
const MAX_PRICE = 20000
const STEP = 1000


const CardSlider = ({ images, name }) => {
  const [current, setCurrent] = useState(0)
  const prev = (e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % images.length) }
  return (
    <div className='relative h-40 overflow-hidden group/slider'>
      <Image src={images[current]} alt={name} fill className='object-cover transition-opacity duration-300' />
      <button onClick={prev} className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity'><FaChevronLeft size={8} /></button>
      <button onClick={next} className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity'><FaChevronRight size={8} /></button>
      <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1'>
        {images.map((_, i) => (
          <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
            className={`rounded-full transition-all duration-200 ${i === current ? 'bg-white w-3 h-1.5' : 'bg-white/50 w-1.5 h-1.5'}`} />
        ))}
      </div>
    </div>
  )
}


const ModalGallery = ({ images, name }) => {
  const [active, setActive] = useState(0)
  const prev = () => setActive((p) => (p - 1 + images.length) % images.length)
  const next = () => setActive((p) => (p + 1) % images.length)
  return (
    <div>
      <div className='relative h-52 overflow-hidden'>
        <Image src={images[active]} alt={name} fill className='object-cover' />
        <button onClick={prev} className='absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center'><FaChevronLeft size={10} /></button>
        <button onClick={next} className='absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center'><FaChevronRight size={10} /></button>
        <span className='absolute bottom-2 right-3 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full'>{active + 1} / {images.length}</span>
      </div>
      <div className='flex gap-2 p-3 bg-gray-50'>
        {images.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={`relative w-14 h-10 rounded-lg overflow-hidden flex-shrink-0 transition-all ${i === active ? 'ring-2 ring-blue-600' : 'opacity-60 hover:opacity-100'}`}>
            <Image src={img} alt={`${name} ${i + 1}`} fill className='object-cover' />
          </button>
        ))}
      </div>
    </div>
  )
}

const RangeSlider = ({ min, max, step, valueMin, valueMax, onChangeMin, onChangeMax }) => {
  const pct = (v) => ((v - min) / (max - min)) * 100
  return (
    <div className='relative h-6 flex items-center'>
      <div className='absolute w-full h-1.5 bg-gray-200 rounded-full' />
      <div className='absolute h-1.5 bg-blue-500 rounded-full' style={{ left: `${pct(valueMin)}%`, right: `${100 - pct(valueMax)}%` }} />
      <input type='range' min={min} max={max} step={step} value={valueMin}
        onChange={(e) => onChangeMin(Math.min(Number(e.target.value), valueMax - step))}
        className='absolute w-full appearance-none bg-transparent pointer-events-none
          [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500
          [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer' />
      <input type='range' min={min} max={max} step={step} value={valueMax}
        onChange={(e) => onChangeMax(Math.max(Number(e.target.value), valueMin + step))}
        className='absolute w-full appearance-none bg-transparent pointer-events-none
          [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-blue-500
          [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer' />
    </div>
  )
}

// ── Calculator Modal ─────────────────────────────────────────
const Calculator = ({ onClose, preselectedCar }) => {
  const [selectedCarId, setSelectedCarId] = useState(
    preselectedCar ? String(preselectedCar.id) : ''
  )
  const [days, setDays] = useState(1)

  const car = preselectedCar
    ? allCars.find((c) => c.id === preselectedCar.id)
    : allCars.find((c) => c.id === Number(selectedCarId))

  const total = car ? car.pricePerDay * days : 0

  return (
    <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4' onClick={onClose}>
      <div className='bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden' onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className='bg-blue-600 px-5 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FaCalculator className='text-white' size={14} />
            <h2 className='text-white text-sm font-bold'>Rental Cost Calculator</h2>
          </div>
          <button onClick={onClose} className='text-white/70 hover:text-white transition-colors'><FaTimes size={14} /></button>
        </div>

        <div className='p-5 flex flex-col gap-4'>

          {/* Dropdown only when opened from filter bar */}
          {!preselectedCar && (
            <div>
              <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Select a Car</label>
              <select value={selectedCarId} onChange={(e) => setSelectedCarId(e.target.value)}
                className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'>
                <option value=''>-- Choose a vehicle --</option>
                {allCars.map((c) => (
                  <option key={c.id} value={c.id}>{c.name} — KSh {c.pricePerDay.toLocaleString()}/day</option>
                ))}
              </select>
            </div>
          )}

    
          {car && (
            <div className='flex items-center gap-3 bg-gray-50 rounded-xl p-3'>
              <div className='relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0'>
                <Image src={car.images[0]} alt={car.name} fill className='object-cover' />
              </div>
              <div>
                <p className='text-xs font-bold text-gray-800'>{car.name}</p>
                <p className='text-[10px] text-gray-400'>{car.category} · {car.seats} seats · {car.transmission}</p>
                <p className='text-[10px] text-blue-600 font-semibold mt-0.5'>KSh {car.pricePerDay.toLocaleString()} / day</p>
              </div>
            </div>
          )}

    
          <div>
            <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Number of Days</label>
            <div className='flex items-center gap-3'>
              <button onClick={() => setDays((d) => Math.max(1, d - 1))}
                className='w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center justify-center font-bold text-sm'>−</button>
              <input type='number' min={1} max={90} value={days}
                onChange={(e) => setDays(Math.max(1, Math.min(90, Number(e.target.value))))}
                className='flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500' />
              <button onClick={() => setDays((d) => Math.min(90, d + 1))}
                className='w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors flex items-center justify-center font-bold text-sm'>+</button>
            </div>
            <p className='text-[10px] text-gray-400 mt-1'>Max 90 days per booking</p>
          </div>

        
          {car && (
            <div className='bg-gray-50 rounded-xl p-4 flex flex-col gap-2'>
              <div className='flex justify-between text-xs text-gray-500'>
                <span>Rate per day</span>
                <span className='font-medium text-gray-700'>KSh {car.pricePerDay.toLocaleString()}</span>
              </div>
              <div className='flex justify-between text-xs text-gray-500'>
                <span>Number of days</span>
                <span className='font-medium text-gray-700'>× {days}</span>
              </div>
              <div className='border-t border-gray-200 pt-2 flex justify-between items-center'>
                <span className='text-xs font-bold text-gray-800'>Total Estimate</span>
                <span className='text-lg font-bold text-blue-600'>KSh {total.toLocaleString()}</span>
              </div>
              <p className='text-[10px] text-gray-400'>* Final price may vary. Taxes and extras apply at booking.</p>
            </div>
          )}

          <Link href='/booking' onClick={onClose}
            className={`block text-center text-xs font-semibold py-3 rounded-full transition-colors ${
              car ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-400 pointer-events-none'
            }`}>
            Book This Car
          </Link>

        </div>
      </div>
    </div>
  )
}


const page = () => {
  const [selected, setSelected] = useState('All')
  const [search, setSearch] = useState('')
  const [modalCar, setModalCar] = useState(null)
  const [showPriceFilter, setShowPriceFilter] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [calcCar, setCalcCar] = useState(null)
  const [priceMin, setPriceMin] = useState(MIN_PRICE)
  const [priceMax, setPriceMax] = useState(MAX_PRICE)

  const isPriceFiltered = priceMin > MIN_PRICE || priceMax < MAX_PRICE

  const filtered = allCars.filter((car) => {
    const matchCategory = selected === 'All' || car.category === selected
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase())
    const matchPrice = car.pricePerDay >= priceMin && car.pricePerDay <= priceMax
    return matchCategory && matchSearch && matchPrice
  })

  const handleCategorySelect = (cat) => { setSelected(cat); setSearch('') }
  const clearAll = () => { setSelected('All'); setSearch(''); setPriceMin(MIN_PRICE); setPriceMax(MAX_PRICE) }
  const hasActiveFilters = selected !== 'All' || search !== '' || isPriceFiltered

  const openCalculator = (car = null) => { setCalcCar(car); setShowCalculator(true) }
  const closeCalculator = () => { setShowCalculator(false); setCalcCar(null) }

  return (
    <div className='min-h-screen bg-gray-50'>

      
      <div className='relative'>
        <Navbar />
        <div className='bg-gray-900 pt-28 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 text-center'>
          <h3 className='text-blue-400 text-xs uppercase tracking-[0.3em] font-semibold mb-2'>Browse & Book</h3>
          <h1 className='text-2xl sm:text-3xl font-bold text-white mb-2'>Our Car Collection</h1>
          <p className='text-gray-500 max-w-sm mx-auto text-xs sm:text-sm'>
            Find the perfect vehicle for your journey across South Coast Diani.
          </p>
        </div>
      </div>

      <div className='px-4 sm:px-8 md:px-16 lg:px-24 py-10'>

    
        <div className='flex flex-col gap-3 mb-6'>
          <div className='flex flex-wrap items-center gap-3'>

    
            <div className='relative w-full sm:w-60'>
              <FaSearch className='absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-xs' />
              <input type='text' placeholder='Search cars...' value={search}
                onChange={(e) => { setSearch(e.target.value); setSelected('All') }}
                className='w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 bg-white text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500' />
            </div>

    
            <button onClick={() => setShowPriceFilter(!showPriceFilter)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                isPriceFiltered ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600'
              }`}>
              <FaSlidersH size={10} />
              Price / Day
              {isPriceFiltered && (
                <span className='bg-white/20 px-1.5 py-0.5 rounded-full text-[10px]'>
                  KSh {(priceMin / 1000).toFixed(0)}k – {(priceMax / 1000).toFixed(0)}k
                </span>
              )}
            </button>

        
            <button onClick={() => openCalculator(null)}
              className='flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border bg-white border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors'>
              <FaCalculator size={10} />
              Cost Calculator
            </button>

            {hasActiveFilters && (
              <button onClick={clearAll} className='text-xs text-red-400 hover:text-red-600 underline'>Clear all</button>
            )}
          </div>

          {/* Price panel */}
          {showPriceFilter && (
            <div className='bg-white border border-gray-100 rounded-2xl px-5 py-4 w-full sm:w-96 shadow-sm'>
              <p className='text-xs font-semibold text-gray-700 mb-1'>Price Range per Day</p>
              <div className='flex justify-between mb-4'>
                <div className='bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg'>KSh {priceMin.toLocaleString()}</div>
                <div className='text-gray-300 text-xs self-center'>—</div>
                <div className='bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg'>KSh {priceMax.toLocaleString()}</div>
              </div>
              <RangeSlider min={MIN_PRICE} max={MAX_PRICE} step={STEP}
                valueMin={priceMin} valueMax={priceMax}
                onChangeMin={setPriceMin} onChangeMax={setPriceMax} />
              <div className='flex justify-between text-[10px] text-gray-400 mt-2 mb-4'>
                <span>KSh 3,000</span>
                <span>KSh 20,000</span>
              </div>
              <div className='flex gap-2 flex-wrap'>
                {[
                  { label: '3k – 5k',   min: 3000,  max: 5000  },
                  { label: '5k – 8k',   min: 5000,  max: 8000  },
                  { label: '8k – 12k',  min: 8000,  max: 12000 },
                  { label: '12k – 15k', min: 12000, max: 15000 },
                  { label: '15k – 18k', min: 15000, max: 18000 },
                  { label: 'All',       min: 3000,  max: 20000 },
                ].map((p) => (
                  <button key={p.label} onClick={() => { setPriceMin(p.min); setPriceMax(p.max) }}
                    className={`px-3 py-1 rounded-full text-[10px] font-medium border transition-colors ${
                      priceMin === p.min && priceMax === p.max
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600'
                    }`}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          
          <div className='flex gap-2 flex-wrap'>
            {categories.map((cat) => (
              <button key={cat} onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  selected === cat && search === ''
                    ? 'bg-blue-600 text-white'
                    : 'bg-white border border-gray-200 text-gray-500 hover:border-blue-400 hover:text-blue-600'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className='text-xs text-gray-400 mb-5'>
          Showing <span className='font-semibold text-gray-600'>{filtered.length}</span> vehicle{filtered.length !== 1 ? 's' : ''}
          {selected !== 'All' && search === '' && <span> in <span className='text-blue-600 font-semibold'>{selected}</span></span>}
          {search && <span> matching <span className='text-blue-600 font-semibold'>"{search}"</span></span>}
          {isPriceFiltered && <span> · <span className='text-blue-600 font-semibold'>KSh {priceMin.toLocaleString()} – {priceMax.toLocaleString()}/day</span></span>}
        </p>


        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          {filtered.length > 0 ? filtered.map((car) => (
            <div key={car.id} className='bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 group'>
              <div className='relative'>
                <CardSlider images={car.images} name={car.name} />
                <span className='absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full z-10'>{car.category}</span>
                <span className='absolute top-2 right-2 bg-white/90 text-yellow-500 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 z-10'><FaStar size={8} /> {car.rating}</span>
              </div>
              <div className='p-4'>
                <h2 className='text-sm font-semibold text-gray-800 mb-2'>{car.name}</h2>
                <div className='flex items-center gap-3 text-[10px] text-gray-400 mb-3'>
                  <span className='flex items-center gap-1'><FaUsers size={9} /> {car.seats}</span>
                  <span className='flex items-center gap-1'><FaGasPump size={9} /> {car.fuel}</span>
                  <span className='flex items-center gap-1'><FaCog size={9} /> {car.transmission}</span>
                </div>
                <div className='bg-gray-50 rounded-lg px-3 py-2 mb-3'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='text-[10px] text-gray-400'>Per Hour</p>
                      <p className='text-xs font-bold text-gray-700'>KSh {car.pricePerHour.toLocaleString()}</p>
                    </div>
                    <div className='w-px h-6 bg-gray-200' />
                    <div className='text-right'>
                      <p className='text-[10px] text-gray-400'>Per Day</p>
                      <p className='text-xs font-bold text-blue-600'>KSh {car.pricePerDay.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-1.5'>
                  
                  <button onClick={() => openCalculator(car)}
                    className='flex items-center gap-1 text-[10px] text-gray-400 hover:text-blue-600 transition-colors'>
                    <FaCalculator size={9} /> Calculate
                  </button>
                  <div className='flex gap-1.5'>
                    <button onClick={() => setModalCar(car)}
                      className='border border-gray-200 text-gray-500 text-[10px] font-medium px-3 py-1.5 rounded-full hover:border-blue-400 hover:text-blue-600 transition-colors'>
                      Details
                    </button>
                    <Link href='/booking' className='bg-blue-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors'>
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className='col-span-4 text-center py-20 text-gray-400'>
              <FaCar className='text-4xl mx-auto mb-3 text-gray-200' />
              <p className='text-sm font-medium'>No cars in this range</p>
              <p className='text-xs mt-1'>Try widening your budget or clearing filters</p>
              <button onClick={clearAll} className='mt-4 text-blue-600 text-xs font-semibold underline'>Clear all filters</button>
            </div>
          )}
        </div>
      </div>

      
      {modalCar && (
        <div className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4' onClick={() => setModalCar(null)}>
          <div className='bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl' onClick={(e) => e.stopPropagation()}>
            <div className='relative'>
              <ModalGallery images={modalCar.images} name={modalCar.name} />
              <button onClick={() => setModalCar(null)} className='absolute top-3 right-3 bg-white text-gray-600 rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold hover:bg-gray-100 z-10'>✕</button>
              <span className='absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full z-10'>{modalCar.category}</span>
            </div>
            <div className='p-5'>
              <div className='flex items-start justify-between mb-2'>
                <h2 className='text-base font-bold text-gray-900'>{modalCar.name}</h2>
                <div className='flex items-center gap-1 text-yellow-400 text-xs font-semibold'><FaStar size={11} /> {modalCar.rating}</div>
              </div>
              <p className='text-xs text-gray-400 leading-relaxed mb-4'>{modalCar.description}</p>
              <div className='grid grid-cols-3 gap-2 mb-4'>
                <div className='bg-gray-50 rounded-xl p-2.5 text-center'>
                  <FaUsers className='text-blue-600 mx-auto mb-1' size={12} />
                  <p className='text-[10px] text-gray-400'>Seats</p>
                  <p className='text-xs font-bold text-gray-800'>{modalCar.seats}</p>
                </div>
                <div className='bg-gray-50 rounded-xl p-2.5 text-center'>
                  <FaGasPump className='text-blue-600 mx-auto mb-1' size={12} />
                  <p className='text-[10px] text-gray-400'>Fuel</p>
                  <p className='text-xs font-bold text-gray-800'>{modalCar.fuel}</p>
                </div>
                <div className='bg-gray-50 rounded-xl p-2.5 text-center'>
                  <FaCog className='text-blue-600 mx-auto mb-1' size={12} />
                  <p className='text-[10px] text-gray-400'>Gearbox</p>
                  <p className='text-xs font-bold text-gray-800'>{modalCar.transmission}</p>
                </div>
              </div>
              <div className='bg-gray-50 rounded-xl px-4 py-3 mb-4'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-[10px] text-gray-400 mb-0.5'>Per Hour</p>
                    <p className='text-sm font-bold text-gray-700'>KSh {modalCar.pricePerHour.toLocaleString()}</p>
                  </div>
                  <div className='w-px h-8 bg-gray-200' />
                  <div className='text-right'>
                    <p className='text-[10px] text-gray-400 mb-0.5'>Per Day</p>
                    <p className='text-sm font-bold text-blue-600'>KSh {modalCar.pricePerDay.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center pt-3 border-t border-gray-100'>
                <button onClick={() => { setModalCar(null); openCalculator(modalCar) }}
                  className='flex items-center gap-1.5 text-xs text-blue-600 font-medium hover:underline'>
                  <FaCalculator size={10} /> Calculate cost
                </button>
                <Link href='/booking' onClick={() => setModalCar(null)} className='bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors'>
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {showCalculator && (
        <Calculator
          onClose={closeCalculator}
          preselectedCar={calcCar}
        />
      )}


      <Footer/>

    </div>

    
  )
}

export default page