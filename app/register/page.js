'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaCar, FaEye, FaEyeSlash, FaUser, FaEnvelope, FaPhone, FaLock } from 'react-icons/fa'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // handle register logic
    console.log('Register:', form)
  }

  const fields = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe',
      icon: <FaUser size={13} className='text-gray-300' />,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'you@example.com',
      icon: <FaEnvelope size={13} className='text-gray-300' />,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+254 700 000 000',
      icon: <FaPhone size={13} className='text-gray-300' />,
    },
  ]

  return (
    <div className='min-h-screen flex'>

      {/* Left Panel */}
      <div className='hidden lg:flex flex-col justify-between w-1/2 bg-gray-950 relative overflow-hidden px-14 py-12'>

        {/* Glow orbs */}
        <div className='absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]' />
        <div className='absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] rounded-full bg-blue-400/10 blur-[100px]' />

        {/* Grid overlay */}
        <div
          className='absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Logo */}
        <Link href='/' className='flex items-center gap-2.5 relative z-10'>
          <FaCar className='text-blue-400 text-2xl' />
          <span className='text-white text-xl font-bold tracking-tight'>
            Jibs <span className='text-blue-400'>Car Rental</span>
          </span>
        </Link>

        {/* Quote */}
        <div className='relative z-10'>
          <p className='text-4xl font-bold text-white leading-tight max-w-sm'>
            Your journey <br />
            <span className='text-blue-400'>starts here.</span>
          </p>
          <p className='text-white/40 text-sm mt-4 max-w-xs leading-relaxed'>
            Create your account and get access to our full fleet of premium vehicles — ready whenever you are.
          </p>

          {/* Steps */}
          <div className='mt-10 flex flex-col gap-4'>
            {[
              ['01', 'Create your account'],
              ['02', 'Browse our fleet'],
              ['03', 'Book & hit the road'],
            ].map(([num, text]) => (
              <div key={num} className='flex items-center gap-4'>
                <span className='text-blue-400 text-xs font-bold font-mono'>{num}</span>
                <span className='text-white/60 text-sm'>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className='flex gap-6 relative z-10'>
          {[['500+', 'Happy Clients'], ['50+', 'Vehicles'], ['24/7', 'Support']].map(([val, label]) => (
            <div key={label}>
              <p className='text-white text-xl font-bold'>{val}</p>
              <p className='text-white/40 text-xs mt-0.5'>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel — form */}
      <div className='flex-1 flex items-center justify-center bg-white px-6 py-12'>
        <div className='w-full max-w-md'>

          {/* Mobile logo */}
          <Link href='/' className='flex lg:hidden items-center gap-2 mb-10 justify-center'>
            <FaCar className='text-blue-600 text-xl' />
            <span className='text-gray-900 text-lg font-bold tracking-tight'>
              Jibs <span className='text-blue-600'>Car Rental</span>
            </span>
          </Link>

          {/* Heading */}
          <div className='mb-8'>
            <h1 className='text-2xl font-bold text-gray-900'>Create an account</h1>
            <p className='text-gray-400 text-sm mt-1'>Sign up to start booking your next ride</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

            {fields.map(({ name, label, type, placeholder, icon }) => (
              <div key={name} className='flex flex-col gap-1.5'>
                <label className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                  {label}
                </label>
                <div className='relative'>
                  <span className='absolute left-3.5 top-1/2 -translate-y-1/2'>{icon}</span>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className='w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200'
                  />
                </div>
              </div>
            ))}

            {/* Password */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                Password
              </label>
              <div className='relative'>
                <span className='absolute left-3.5 top-1/2 -translate-y-1/2'>
                  <FaLock size={13} className='text-gray-300' />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  placeholder='Min. 8 characters'
                  required
                  className='w-full pl-9 pr-11 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors'
                >
                  {showPassword ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                Confirm Password
              </label>
              <div className='relative'>
                <span className='absolute left-3.5 top-1/2 -translate-y-1/2'>
                  <FaLock size={13} className='text-gray-300' />
                </span>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name='confirmPassword'
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder='Repeat your password'
                  required
                  className='w-full pl-9 pr-11 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirm(!showConfirm)}
                  className='absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors'
                >
                  {showConfirm ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type='submit'
              className='mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-colors duration-200'
            >
              Create Account
            </button>
          </form>

          {/* Login link */}
          <p className='text-center text-sm text-gray-400 mt-6'>
            Already have an account?{' '}
            <Link href='/login' className='text-blue-600 font-semibold hover:underline'>
              Sign in
            </Link>
          </p>

        </div>
      </div>

    </div>
  )
}

export default RegisterPage