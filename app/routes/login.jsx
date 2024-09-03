import { Form, Link } from '@remix-run/react'
import React from 'react'

function login() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
    <div className="card w-[25%] p-10 py-8 text-center bg-white rounded">
        <h2 className='text-xl font-semibold'>Log in to your Account</h2>
        <Form className='mt-6'>
            <h4 className='text-sm text-red-500 text-left'>Invalid Email</h4>
            <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-red-400 outline-none' type="text" placeholder='Email'/>
            <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-zinc-400/50 outline-none' type="text" placeholder='Password'/>
        </Form>
        <Link to="/reset" className='block text-sm text-blue-600 text-right'>Forgot Password?</Link>
        <Link className='block bg-green-500 hover:bg-green-600 py-2 font-semibold rounded text-white mt-5'>Sign In</Link>
        <h2 className='text-sm mt-6'>Don't have an account? <Link to="/register" className='text-green-500 font-semibold'>Sign Up</Link></h2>
    </div>
    

</div>
  )
}

export default login