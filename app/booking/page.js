'use client'

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import { FaCar, FaUser, FaPhone, FaEnvelope, FaCalendarAlt, FaMobile, FaCreditCard, FaMoneyBillWave, FaChevronRight, FaChevronLeft, FaIdCard, FaClock, FaCheckCircle } from 'react-icons/fa'

const cars = [
  { id: 1, name: 'Toyota Camry',      category: 'Sedan',   pricePerDay: 5000,  pricePerHour: 2500  },
  { id: 2, name: 'Range Rover Sport', category: 'SUV',     pricePerDay: 18000, pricePerHour: 8000  },
  { id: 3, name: 'Mercedes C-Class',  category: 'Luxury',  pricePerDay: 20000, pricePerHour: 10000 },
  { id: 4, name: 'Honda Civic',       category: 'Compact', pricePerDay: 3500,  pricePerHour: 1800  },
  { id: 5, name: 'Ford Mustang',      category: 'Sports',  pricePerDay: 19000, pricePerHour: 12000 },
  { id: 6, name: 'Toyota Prado',      category: 'SUV',     pricePerDay: 15000, pricePerHour: 7000  },
  { id: 7, name: 'BMW 3 Series',      category: 'Luxury',  pricePerDay: 17000, pricePerHour: 9000  },
  { id: 8, name: 'Volkswagen Polo',   category: 'Compact', pricePerDay: 3000,  pricePerHour: 1500  },
  { id: 9, name: 'Nissan X-Trail',    category: 'SUV',     pricePerDay: 12000, pricePerHour: 5500  },
]

const paymentMethods = [
  { id: 'mpesa', label: 'M-Pesa',            icon: <FaMobile className='text-green-500' size={18} />,       desc: 'Pay via M-Pesa mobile money'      },
  { id: 'card',  label: 'Credit / Debit Card', icon: <FaCreditCard className='text-blue-500' size={18} />,  desc: 'Visa, Mastercard accepted'         },
  { id: 'cash',  label: 'Cash on Pickup',     icon: <FaMoneyBillWave className='text-yellow-500' size={18} />, desc: 'Pay cash when you collect'      },
]

const rentalTypes = [
  { id: 'daily',  label: 'Per Day',  icon: <FaCalendarAlt size={14} /> },
  { id: 'hourly', label: 'Per Hour', icon: <FaClock size={14} />       },
]

const steps = ['Vehicle & Dates', 'Personal Details', 'Payment', 'Review']

const locations = [
  { value: 'diani',   label: 'Diani Beach Office'       },
  { value: 'mombasa', label: 'Mombasa CBD'               },
  { value: 'ukunda',  label: 'Ukunda Airstrip'           },
  { value: 'airport', label: 'Moi International Airport' },
]

const today = new Date().toISOString().split('T')[0]

const page = () => {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const [form, setForm] = useState({
    carId: '',
    rentalType: 'daily',
    pickupDate: '',
    returnDate: '',
    days: 1,
    hours: 1,
    pickupLocation: 'diani',
    dropoffLocation: 'diani',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idNumber: '',
    message: '',
    paymentMethod: '',
    mpesaNumber: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  })

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const selectedCar = cars.find((c) => c.id === Number(form.carId))

  const totalCost = selectedCar
    ? form.rentalType === 'daily'
      ? selectedCar.pricePerDay * form.days
      : selectedCar.pricePerHour * form.hours
    : 0

  const validateStep = (s) => {
    const e = {}
    if (s === 0) {
      if (!form.carId) e.carId = 'Please select a car'
      if (!form.pickupDate) e.pickupDate = 'Select a pickup date'
      if (form.rentalType === 'daily' && !form.returnDate) e.returnDate = 'Select a return date'
      if (form.rentalType === 'daily' && form.returnDate && form.returnDate <= form.pickupDate) e.returnDate = 'Return date must be after pickup'
    }
    if (s === 1) {
      if (!form.firstName.trim()) e.firstName = 'Required'
      if (!form.lastName.trim()) e.lastName = 'Required'
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
      if (!form.phone.trim()) e.phone = 'Phone number required'
      if (!form.idNumber.trim()) e.idNumber = 'ID / Passport number required'
    }
    if (s === 2) {
      if (!form.paymentMethod) e.paymentMethod = 'Select a payment method'
      if (form.paymentMethod === 'mpesa' && !form.mpesaNumber.trim()) e.mpesaNumber = 'M-Pesa number required'
      if (form.paymentMethod === 'card') {
        if (!form.cardName.trim()) e.cardName = 'Name on card required'
        if (!form.cardNumber.trim()) e.cardNumber = 'Card number required'
        if (!form.cardExpiry.trim()) e.cardExpiry = 'Expiry required'
        if (!form.cardCvv.trim()) e.cardCvv = 'CVV required'
      }
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => { if (validateStep(step)) setStep((s) => s + 1) }
  const back = () => setStep((s) => s - 1)
  const submit = () => { if (validateStep(2)) setSubmitted(true) }

  const handlePickupDate = (val) => {
    update('pickupDate', val)
    if (form.returnDate && form.returnDate > val) {
      const diff = Math.ceil((new Date(form.returnDate) - new Date(val)) / 86400000)
      update('days', diff)
    }
  }

  const handleReturnDate = (val) => {
    update('returnDate', val)
    if (form.pickupDate && val > form.pickupDate) {
      const diff = Math.ceil((new Date(val) - new Date(form.pickupDate)) / 86400000)
      update('days', diff)
    }
  }

  const inputCls = (field) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-gray-200'} rounded-xl px-3 py-2.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`


  if (submitted) return (
    <div className='min-h-screen bg-gray-50'>
      <div className='relative'><Navbar /></div>
      <div className='flex flex-col items-center justify-center min-h-[80vh] px-4 py-24 text-center'>
        <div className='bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full'>

    
          <div className='w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-5'>
            <FaClock className='text-yellow-500 text-3xl' />
          </div>

          <h1 className='text-xl font-bold text-gray-900 mb-2'>Booking Pending Approval</h1>

          <p className='text-xs text-gray-400 mb-6 leading-relaxed'>
            Thank you, <span className='font-semibold text-gray-700'>{form.firstName}</span>! Your booking request has been submitted and is awaiting admin approval.
            Our team will contact you on <span className='font-semibold text-gray-700'>{form.phone}</span> within 30 minutes to confirm your reservation.
          </p>

          
          <div className='flex items-center justify-center gap-2 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2 mb-4'>
            <FaClock className='text-yellow-500' size={11} />
            <span className='text-xs font-semibold text-yellow-600'>Status: Pending Approval</span>
          </div>

        
          <div className='bg-gray-50 rounded-2xl p-4 text-left mb-6 flex flex-col gap-2'>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Vehicle</span>
              <span className='font-semibold text-gray-800'>{selectedCar?.name}</span>
            </div>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Pickup Date</span>
              <span className='font-semibold text-gray-800'>{form.pickupDate}</span>
            </div>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Duration</span>
              <span className='font-semibold text-gray-800'>
                {form.rentalType === 'daily'
                  ? `${form.days} day${form.days > 1 ? 's' : ''}`
                  : `${form.hours} hour${form.hours > 1 ? 's' : ''}`}
              </span>
            </div>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Payment</span>
              <span className='font-semibold text-gray-800'>
                {paymentMethods.find(p => p.id === form.paymentMethod)?.label}
              </span>
            </div>
            <div className='border-t border-gray-200 pt-2 mt-1 flex justify-between items-center'>
              <span className='font-bold text-gray-800 text-xs'>Total</span>
              <span className='font-bold text-blue-600'>KSh {totalCost.toLocaleString()}</span>
            </div>
          </div>

          <Link href='/'
            className='block w-full text-center bg-blue-600 text-white text-xs font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors'>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className='min-h-screen bg-gray-50'>

    
      <div className='relative'>
        <Navbar />
        <div className='bg-gray-900 pt-28 pb-12 px-4 text-center'>
          <h3 className='text-blue-400 text-xs uppercase tracking-[0.3em] font-semibold mb-2'>Reserve Your Ride</h3>
          <h1 className='text-2xl sm:text-3xl font-bold text-white mb-2'>Book a Car</h1>
          <p className='text-gray-500 text-xs sm:text-sm max-w-sm mx-auto'>Complete the steps below to secure your rental.</p>
        </div>
      </div>

      <div className='max-w-2xl mx-auto px-4 py-10'>

    
        <div className='flex items-center justify-between mb-10'>
          {steps.map((label, i) => (
            <React.Fragment key={i}>
              <div className='flex flex-col items-center gap-1'>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i < step  ? 'bg-blue-600 text-white' :
                  i === step ? 'bg-blue-600 text-white ring-4 ring-blue-100' :
                  'bg-gray-200 text-gray-400'
                }`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={`text-[10px] font-medium hidden sm:block ${i === step ? 'text-blue-600' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 rounded-full transition-colors ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

    
        <div className='bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden'>

        
          {step === 0 && (
            <div className='p-6 flex flex-col gap-5'>
              <h2 className='text-sm font-bold text-gray-800'>Vehicle & Dates</h2>

              <div>
                <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Select Vehicle *</label>
                <select value={form.carId} onChange={(e) => update('carId', e.target.value)} className={inputCls('carId')}>
                  <option value=''>-- Choose a vehicle --</option>
                  {cars.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.category}) — KSh {c.pricePerDay.toLocaleString()}/day
                    </option>
                  ))}
                </select>
                {errors.carId && <p className='text-red-400 text-[10px] mt-1'>{errors.carId}</p>}
              </div>

              <div>
                <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Rental Type *</label>
                <div className='flex gap-3'>
                  {rentalTypes.map((rt) => (
                    <button key={rt.id} onClick={() => update('rentalType', rt.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium border transition-colors ${
                        form.rentalType === rt.id
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white border-gray-200 text-gray-500 hover:border-blue-400'
                      }`}>
                      {rt.icon} {rt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Pickup Date *</label>
                  <input type='date' min={today} value={form.pickupDate}
                    onChange={(e) => handlePickupDate(e.target.value)} className={inputCls('pickupDate')} />
                  {errors.pickupDate && <p className='text-red-400 text-[10px] mt-1'>{errors.pickupDate}</p>}
                </div>

                {form.rentalType === 'daily' ? (
                  <div>
                    <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Return Date *</label>
                    <input type='date' min={form.pickupDate || today} value={form.returnDate}
                      onChange={(e) => handleReturnDate(e.target.value)} className={inputCls('returnDate')} />
                    {errors.returnDate && <p className='text-red-400 text-[10px] mt-1'>{errors.returnDate}</p>}
                  </div>
                ) : (
                  <div>
                    <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Number of Hours *</label>
                    <div className='flex items-center gap-2'>
                      <button onClick={() => update('hours', Math.max(1, form.hours - 1))}
                        className='w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 flex items-center justify-center font-bold'>−</button>
                      <input type='number' min={1} max={24} value={form.hours}
                        onChange={(e) => update('hours', Math.max(1, Math.min(24, Number(e.target.value))))}
                        className='flex-1 border border-gray-200 rounded-xl px-2 py-2 text-xs text-center font-bold focus:outline-none focus:ring-2 focus:ring-blue-500' />
                      <button onClick={() => update('hours', Math.min(24, form.hours + 1))}
                        className='w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:border-blue-400 flex items-center justify-center font-bold'>+</button>
                    </div>
                  </div>
                )}
              </div>

              {form.rentalType === 'daily' && form.pickupDate && form.returnDate && form.returnDate > form.pickupDate && (
                <div className='bg-blue-50 rounded-xl px-4 py-2 flex items-center justify-between'>
                  <span className='text-xs text-blue-700 font-medium'>{form.days} day{form.days > 1 ? 's' : ''}</span>
                  {selectedCar && <span className='text-xs font-bold text-blue-700'>KSh {totalCost.toLocaleString()}</span>}
                </div>
              )}

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Pickup Location</label>
                  <select value={form.pickupLocation} onChange={(e) => update('pickupLocation', e.target.value)} className={inputCls('pickupLocation')}>
                    {locations.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Drop-off Location</label>
                  <select value={form.dropoffLocation} onChange={(e) => update('dropoffLocation', e.target.value)} className={inputCls('dropoffLocation')}>
                    {locations.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

        
          {step === 1 && (
            <div className='p-6 flex flex-col gap-5'>
              <h2 className='text-sm font-bold text-gray-800'>Personal Details</h2>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>First Name *</label>
                  <div className='relative'>
                    <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' size={10} />
                    <input type='text' placeholder='John' value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      className={`${inputCls('firstName')} pl-8`} />
                  </div>
                  {errors.firstName && <p className='text-red-400 text-[10px] mt-1'>{errors.firstName}</p>}
                </div>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Last Name *</label>
                  <div className='relative'>
                    <FaUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' size={10} />
                    <input type='text' placeholder='Doe' value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      className={`${inputCls('lastName')} pl-8`} />
                  </div>
                  {errors.lastName && <p className='text-red-400 text-[10px] mt-1'>{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Email Address *</label>
                <div className='relative'>
                  <FaEnvelope className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' size={10} />
                  <input type='email' placeholder='john@email.com' value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={`${inputCls('email')} pl-8`} />
                </div>
                {errors.email && <p className='text-red-400 text-[10px] mt-1'>{errors.email}</p>}
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Phone Number *</label>
                  <div className='relative'>
                    <FaPhone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' size={10} />
                    <input type='tel' placeholder='+254 7XX XXX XXX' value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={`${inputCls('phone')} pl-8`} />
                  </div>
                  {errors.phone && <p className='text-red-400 text-[10px] mt-1'>{errors.phone}</p>}
                </div>
                <div>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>ID / Passport No. *</label>
                  <div className='relative'>
                    <FaIdCard className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' size={10} />
                    <input type='text' placeholder='e.g. 12345678' value={form.idNumber}
                      onChange={(e) => update('idNumber', e.target.value)}
                      className={`${inputCls('idNumber')} pl-8`} />
                  </div>
                  {errors.idNumber && <p className='text-red-400 text-[10px] mt-1'>{errors.idNumber}</p>}
                </div>
              </div>

              <div>
                <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Special Requests / Message</label>
                <textarea rows={3} placeholder='Any special requests, pickup instructions, etc...'
                  value={form.message} onChange={(e) => update('message', e.target.value)}
                  className='w-full border border-gray-200 rounded-xl px-3 py-2.5 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none' />
              </div>
            </div>
          )}

        
          {step === 2 && (
            <div className='p-6 flex flex-col gap-5'>
              <h2 className='text-sm font-bold text-gray-800'>Payment Method</h2>

              <div className='flex flex-col gap-3'>
                {errors.paymentMethod && <p className='text-red-400 text-[10px]'>{errors.paymentMethod}</p>}
                {paymentMethods.map((pm) => (
                  <button key={pm.id} onClick={() => update('paymentMethod', pm.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-colors ${
                      form.paymentMethod === pm.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                    }`}>
                    <div className='w-9 h-9 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm flex-shrink-0'>
                      {pm.icon}
                    </div>
                    <div className='flex-1'>
                      <p className='text-xs font-bold text-gray-800'>{pm.label}</p>
                      <p className='text-[10px] text-gray-400'>{pm.desc}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors ${
                      form.paymentMethod === pm.id ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                      {form.paymentMethod === pm.id && (
                        <div className='w-full h-full rounded-full bg-white scale-50 transform' />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {form.paymentMethod === 'mpesa' && (
                <div className='bg-green-50 border border-green-100 rounded-xl p-4'>
                  <p className='text-xs font-semibold text-green-700 mb-3'>M-Pesa Details</p>
                  <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>M-Pesa Phone Number *</label>
                  <div className='relative'>
                    <FaMobile className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' size={10} />
                    <input type='tel' placeholder='e.g. 0712 345 678' value={form.mpesaNumber}
                      onChange={(e) => update('mpesaNumber', e.target.value)}
                      className={`${inputCls('mpesaNumber')} pl-8`} />
                  </div>
                  {errors.mpesaNumber && <p className='text-red-400 text-[10px] mt-1'>{errors.mpesaNumber}</p>}
                  <p className='text-[10px] text-green-600 mt-2'>You will receive an STK push to complete payment after admin approval.</p>
                </div>
              )}

              {form.paymentMethod === 'card' && (
                <div className='bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col gap-3'>
                  <p className='text-xs font-semibold text-blue-700'>Card Details</p>
                  <div>
                    <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Name on Card *</label>
                    <input type='text' placeholder='John Doe' value={form.cardName}
                      onChange={(e) => update('cardName', e.target.value)} className={inputCls('cardName')} />
                    {errors.cardName && <p className='text-red-400 text-[10px] mt-1'>{errors.cardName}</p>}
                  </div>
                  <div>
                    <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Card Number *</label>
                    <input type='text' placeholder='1234 5678 9012 3456' maxLength={19}
                      value={form.cardNumber}
                      onChange={(e) => update('cardNumber', e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim())}
                      className={inputCls('cardNumber')} />
                    {errors.cardNumber && <p className='text-red-400 text-[10px] mt-1'>{errors.cardNumber}</p>}
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div>
                      <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>Expiry *</label>
                      <input type='text' placeholder='MM/YY' maxLength={5} value={form.cardExpiry}
                        onChange={(e) => update('cardExpiry', e.target.value)} className={inputCls('cardExpiry')} />
                      {errors.cardExpiry && <p className='text-red-400 text-[10px] mt-1'>{errors.cardExpiry}</p>}
                    </div>
                    <div>
                      <label className='text-xs font-semibold text-gray-600 mb-1.5 block'>CVV *</label>
                      <input type='password' placeholder='•••' maxLength={4} value={form.cardCvv}
                        onChange={(e) => update('cardCvv', e.target.value)} className={inputCls('cardCvv')} />
                      {errors.cardCvv && <p className='text-red-400 text-[10px] mt-1'>{errors.cardCvv}</p>}
                    </div>
                  </div>
                </div>
              )}

              {form.paymentMethod === 'cash' && (
                <div className='bg-yellow-50 border border-yellow-100 rounded-xl p-4'>
                  <p className='text-xs font-semibold text-yellow-700 mb-1'>Cash on Pickup</p>
                  <p className='text-[10px] text-yellow-600 leading-relaxed'>
                    Please bring the exact amount of <span className='font-bold'>KSh {totalCost.toLocaleString()}</span> when
                    collecting your vehicle. A valid ID is required at pickup.
                  </p>
                </div>
              )}
            </div>
          )}

          
          {step === 3 && (
            <div className='p-6 flex flex-col gap-5'>
              <h2 className='text-sm font-bold text-gray-800'>Review Your Booking</h2>

              <div className='bg-gray-50 rounded-xl p-4'>
                <p className='text-[10px] text-gray-400 uppercase tracking-wider mb-3 font-semibold'>Vehicle & Dates</p>
                <div className='flex flex-col gap-2'>
                  {[
                    { label: 'Vehicle',          value: selectedCar?.name },
                    { label: 'Type',             value: selectedCar?.category },
                    { label: 'Rental',           value: form.rentalType === 'daily' ? 'Per Day' : 'Per Hour' },
                    { label: 'Pickup Date',      value: form.pickupDate },
                    { label: form.rentalType === 'daily' ? 'Return Date' : 'Hours',
                      value: form.rentalType === 'daily' ? form.returnDate : `${form.hours} hr${form.hours > 1 ? 's' : ''}` },
                    { label: 'Duration',         value: form.rentalType === 'daily' ? `${form.days} day${form.days > 1 ? 's' : ''}` : `${form.hours} hour${form.hours > 1 ? 's' : ''}` },
                    { label: 'Pickup Location',  value: locations.find(l => l.value === form.pickupLocation)?.label },
                    { label: 'Drop-off',         value: locations.find(l => l.value === form.dropoffLocation)?.label },
                  ].map((row) => (
                    <div key={row.label} className='flex justify-between text-xs'>
                      <span className='text-gray-400'>{row.label}</span>
                      <span className='font-semibold text-gray-700'>{row.value || '—'}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-gray-50 rounded-xl p-4'>
                <p className='text-[10px] text-gray-400 uppercase tracking-wider mb-3 font-semibold'>Personal Details</p>
                <div className='flex flex-col gap-2'>
                  {[
                    { label: 'Name',           value: `${form.firstName} ${form.lastName}` },
                    { label: 'Email',          value: form.email },
                    { label: 'Phone',          value: form.phone },
                    { label: 'ID / Passport',  value: form.idNumber },
                  ].map((row) => (
                    <div key={row.label} className='flex justify-between text-xs'>
                      <span className='text-gray-400'>{row.label}</span>
                      <span className='font-semibold text-gray-700'>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-gray-50 rounded-xl p-4'>
                <p className='text-[10px] text-gray-400 uppercase tracking-wider mb-3 font-semibold'>Payment</p>
                <div className='flex justify-between text-xs mb-2'>
                  <span className='text-gray-400'>Method</span>
                  <span className='font-semibold text-gray-700'>
                    {paymentMethods.find(p => p.id === form.paymentMethod)?.label}
                  </span>
                </div>
                {form.paymentMethod === 'mpesa' && (
                  <div className='flex justify-between text-xs mb-2'>
                    <span className='text-gray-400'>M-Pesa No.</span>
                    <span className='font-semibold text-gray-700'>{form.mpesaNumber}</span>
                  </div>
                )}
                <div className='border-t border-gray-200 pt-3 mt-2 flex justify-between items-center'>
                  <span className='text-sm font-bold text-gray-800'>Total Amount</span>
                  <span className='text-xl font-bold text-blue-600'>KSh {totalCost.toLocaleString()}</span>
                </div>
              </div>

              <p className='text-[10px] text-gray-400 text-center'>
                By confirming, you agree to our terms and rental conditions. Your booking will be reviewed and approved by our team.
              </p>
            </div>
          )}

        
          <div className='px-6 pb-6 flex items-center justify-between gap-3'>
            {step > 0 ? (
              <button onClick={back}
                className='flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors'>
                <FaChevronLeft size={9} /> Back
              </button>
            ) : (
              <Link href='/'
                className='flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-xs font-medium text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors'>
                <FaChevronLeft size={9} /> Cancel
              </Link>
            )}

            {step < 3 ? (
              <button onClick={next}
                className='flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors'>
                Next <FaChevronRight size={9} />
              </button>
            ) : (
              <button onClick={submit}
                className='flex items-center gap-2 bg-blue-600 text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors'>
                <FaCheckCircle size={12} /> Submit Booking
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default page