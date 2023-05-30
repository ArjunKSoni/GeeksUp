import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate()
    return (
        <div className='h-screen w-screen flex flex-col login-main items-center justify-center'>
            <h2 className='text-gray-200 font-bold text-3xl -mt-16 mb-16'>GeeksApp</h2>
            <h2 style={{ borderBottom: "solid green 3px" }} className='text-black font-bold -mt-16 mb-16'>LogIn</h2>
            <div style={{ height: "50%", width: "100%" }} className='login input2 flex items-center justify-center flex-col'>
                <input className='mb-4' required type="email" placeholder='email' name="" id="email" />
                <input className='mb-4' required type="password" placeholder='password' id='password' />
                <button onClick={(e) => { e.preventDefault(); navigate("/home") }} className='text-white fotn-bold text-lg bg-green-500 py-2 px-3 rounded-lg'>Log In</button>
                <h2 className='text-white'>Didn't have an Account? <Link to={"/signup"} className='text-green-500'>Register</Link></h2>
            </div>
            <div className='absolute flex items-center justify-center px-1 bottom-5 text-lg left-0 w-screen'>
                <h3 className='text-white'>Made With Love By - <a href='https://www.linkedin.com/in/aksoni0520/' className="text-green-500 font-bold">Arjun</a></h3>
            </div>
        </div>
    )
}
