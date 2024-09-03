import { Form, Link} from '@remix-run/react'
import React from 'react'

function register() {
  return (
    <div className='w-full h-screen  bg-zinc-200 flex items-center justify-center'>
        <div className="card w-[25%] p-10 py-8 text-center bg-white rounded">
            <h2 className='text-xl font-semibold mb-6'>Create Your Account</h2>
            <Form>
                <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-zinc-400/50 outline-none' type="text" placeholder='Username'/>
                <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-zinc-400/50 outline-none' type="email" placeholder='Email'/>
                <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-zinc-400/50 outline-none' type="password" placeholder='Password'/>
                <input className='block w-full p-2 mb-3 rounded bg-transparent border-2 border-zinc-400/50 outline-none' type="password" placeholder='Confirm Password'/>
                <input type="submit" className='w-full bg-green-500 hover:bg-green-600 py-2 font-semibold rounded text-white mt-5' value="Sign Up"/>
            </Form>
            <h2 className='text-sm mt-6'>Already have account? <Link to="/login" className='text-green-500 font-semibold'>Sign In</Link></h2>
        </div>
        

    </div>
  )
}

export default register