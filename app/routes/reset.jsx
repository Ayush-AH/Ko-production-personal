import { Form, Link } from '@remix-run/react'
import React from 'react'

function Reset(){
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
    <div className="card w-[25%] p-10 py-8 text-center bg-white rounded">
        <h2 className='text-xl font-semibold'>Forgot Password</h2>
        <p className='text-left mt-2 font-semibold text-sm'>Lost your <span className='text-green-600'>password?</span> No worries! Follow these simple steps. Enter your registered email and we will send you a <span className='text-green-600'>reset link</span> to reset your password.</p>
        <Form className='mt-5'>
          <h4 className='text-left font-semibold'>Email</h4>
            <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-zinc-400/50 outline-none' type="text" placeholder='Registered Email'/>
            <input type="submit"className='w-full bg-green-500 hover:bg-green-600 py-2 font-semibold rounded text-white mt-4' value="Sign In" />
        </Form>
        <h2 className='text-sm mt-6'>Don't have an account? <Link to="/register" className='text-green-500 font-semibold'>Sign Up</Link></h2>
    </div>
    

</div>
  )
}

export default Reset