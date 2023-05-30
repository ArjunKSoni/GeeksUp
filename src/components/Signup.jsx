import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsImage } from 'react-icons/bs';

export default function Signup() {
    const navigate = useNavigate()
    return (
        <div className='h-screen w-screen flex flex-col login-main items-center justify-center'>
            <h2 className='text-gray-200 font-bold text-3xl -mt-16 mb-16'>GeeksApp</h2>
            <h2 style={{ borderBottom: "solid green 3px" }} className='text-black font-bold -mt-16 mb-16'>Sign up</h2>
            <div style={{ height: "50%", width: "100%" }} className='login input2 flex items-center justify-center flex-col'>
                <input className='mb-4' required type="text" placeholder='Display name' name="" id="text" />
                <input className='mb-4' required type="email" placeholder='Email' name="" id="email" />
                <input className='mb-4' required type="password" placeholder='Password' id='password' />
                <input style={{ display: "none" }} className='mb-4' type="file" name="" id="file" />
                <label style={{ borderBottom: "solid green 3px" }} htmlFor="file" className='text-white flex items-start pb-1 mb-4 text-xl'>
                    <BsImage className='text-3xl text-blue-500 bg-blue-300 rounded mr-2' /> <h2>Choose Your Avatar</h2>
                </label>
                <button onClick={(e) => { e.preventDefault(); navigate("/home") }} className='text-white fotn-bold text-lg bg-green-500 py-2 px-3 rounded-lg'>Sign Up</button>
                <h2 className='text-white'>Already have an Account? <Link to={"/"} className='text-green-500'>Sign In</Link></h2>
            </div>
            <div className='absolute flex items-center justify-center px-1 bottom-5 text-lg left-0 w-screen'>
                <h3 className='text-white'>Made With Love By - <a href='https://www.linkedin.com/in/aksoni0520/' className="text-green-500 font-bold">Arjun</a></h3>
            </div>
        </div>
    )
}
