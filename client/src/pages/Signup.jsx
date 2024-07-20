import React from 'react'
import {Link} from "react-router-dom"

function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='rounded-lg border p-3' />
        <input type="email" placeholder='email' className='rounded-lg border p-3' />
        <input type="password" placeholder='password' className='rounded-lg border p-3' />
        <button className='bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={'/sign-in'}>
        <span className='text-blue-700' >Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup