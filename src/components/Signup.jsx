import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsImage } from 'react-icons/bs';
import Authcontext from './context/authcontext';


export default function Signup() {
    const { token, setToken, setpayload, setUser } = useContext(Authcontext);
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    })
    const onchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const onclick = async (e) => {
        e.preventDefault();
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ user: user.name, email: user.email, password: user.password, mobileNo: user.mobile }),
            })
            let data = await apicall.json()
            console.log(data)
            await setpayload(data.payload)
            await setToken(data.authToken)
            await setUser(data.user)
            if (data.success === "fail") { alert(data.message) }
            !data.authToken ? console.log("error") : navigate("/home");
            console.log(token);
        } catch (error) {
            console.log(error);
        }

    }

    const navigate = useNavigate()
    return (
        <div className='h-screen w-screen flex flex-col login-main items-center justify-center'>
            <h2 className='text-gray-200 font-bold text-3xl -mt-16 mb-16'>GeeksApp</h2>
            <h2 style={{ borderBottom: "solid green 3px" }} className='text-black font-bold -mt-16 mb-16'>Sign up</h2>
            <div style={{ height: "50%", width: "100%" }} className='login input2 flex items-center justify-center flex-col'>
                <input className='mb-4' onChange={onchange} required type="text" placeholder='Display Name' name="name" id="text" />
                <input className='mb-4' onChange={onchange} required type="email" placeholder='Email' name="email" id="email" />
                <input className='mb-4' onChange={onchange} required type="password" placeholder='Password' name='password' id='password' />
                <input onChange={onchange} className='mb-4' required type="number" name="mobile" id="mobile" placeholder='Mobile Number' />

                <button onClick={onclick} className='text-white fotn-bold text-lg bg-green-500 py-2 px-3 rounded-lg'>Sign Up</button>
                <h2 className='text-white'>Already have an Account? <Link to={"/"} className='text-green-500'>Sign In</Link></h2>
            </div>
            <div className='absolute flex items-center justify-center px-1 bottom-5 text-lg left-0 w-screen'>
                <h3 className='text-white'>Made With Love By - <a href='https://www.linkedin.com/in/aksoni0520/' className="text-green-500 font-bold">Arjun</a></h3>
            </div>
        </div>
    )
}
