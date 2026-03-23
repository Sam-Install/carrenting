'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaCar, FaEye, FaEyeSlash, FaUser, FaShieldAlt } from 'react-icons/fa'

const LoginPage = () => {
  const [role, setRole] = useState('user') // 'user' | 'admin'
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle login logic
    console.log('Login as', role, form)
  }

  return (
    <div className='min-h-screen flex'>

      {/* Left Panel — decorative */}
      <div className='hidden lg:flex flex-col justify-between w-1/2 bg-gray-950 relative overflow-hidden px-14 py-12'>

        {/* Background blur orbs */}
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

        {/* Center quote */}
        <div className='relative z-10'>
          <p className='text-4xl font-bold text-white leading-tight max-w-sm'>
            Drive the road <br />
            <span className='text-blue-400'>you deserve.</span>
          </p>
          <p className='text-white/40 text-sm mt-4 max-w-xs leading-relaxed'>
            Premium vehicles, seamless booking, and unmatched service — all in one place.
          </p>
        </div>

        {/* Bottom stat chips */}
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
            <h1 className='text-2xl font-bold text-gray-900'>Welcome back</h1>
            <p className='text-gray-400 text-sm mt-1'>Sign in to your account to continue</p>
          </div>

          {/* Role Toggle */}
          <div className='flex bg-gray-100 rounded-xl p-1 mb-8'>
            <button
              onClick={() => setRole('user')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                role === 'user'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <FaUser size={13} />
              User
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                role === 'admin'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <FaShieldAlt size={13} />
              Admin
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

            {/* Email */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={role === 'admin' ? 'admin@jibsrental.com' : 'you@example.com'}
                required
                className='w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200'
              />
            </div>

            {/* Password */}
            <div className='flex flex-col gap-1.5'>
              <div className='flex items-center justify-between'>
                <label className='text-xs font-semibold text-gray-500 uppercase tracking-wide'>
                  Password
                </label>
                <Link href='/forgot-password' className='text-xs text-blue-500 hover:text-blue-600 transition-colors'>
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  placeholder='••••••••'
                  required
                  className='w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors'
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type='submit'
              className='mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-colors duration-200'
            >
              {role === 'admin' ? 'Sign in as Admin' : 'Sign in'}
            </button>
          </form>

          {/* Register link — only for users */}
          {role === 'user' && (
            <p className='text-center text-sm text-gray-400 mt-6'>
              Don&apos;t have an account?{' '}
              <Link href='/register' className='text-blue-600 font-semibold hover:underline'>
                Create one
              </Link>
            </p>
          )}

          {role === 'admin' && (
            <p className='text-center text-xs text-gray-300 mt-6'>
              Admin access is restricted. Contact support if you have issues.
            </p>
          )}

        </div>
      </div>

    </div>
  )
}

export default LoginPage