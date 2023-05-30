import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Authcontext from './context/authcontext';
export default function Login() {
    const { token, setToken, setpayload, setUser } = useContext(Authcontext);
    const [user, setuser] = useState({
        email: "",
        password: "",
    })
    const onchange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const onclick = async (e) => {
        e.preventDefault();
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/auth/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ email: user.email, password: user.password }),
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
    return (
        <div className='h-screen w-screen flex flex-col login-main items-center justify-center'>
            <h2 className='text-gray-200 font-bold text-3xl -mt-16 mb-16'>GeeksApp</h2>
            <h2 style={{ borderBottom: "solid green 3px" }} className='text-black font-bold -mt-16 mb-16'>LogIn</h2>
            <div style={{ height: "50%", width: "100%" }} className='login input2 flex items-center justify-center flex-col'>
                <input className='mb-4' onChange={onchange} required type="email" placeholder='email' name="email" id="email" />
                <input className='mb-4' onChange={onchange} required type="password" placeholder='password' name='password' id='password' />
                <button onClick={onclick} className='text-white fotn-bold text-lg bg-green-500 py-2 px-3 rounded-lg'>Log In</button>
                <h2 className='text-white'>Didn't have an Account? <Link to={"/signup"} className='text-green-500'>Register</Link></h2>
            </div>
            <div className='absolute flex items-center justify-center px-1 bottom-5 text-lg left-0 w-screen'>
                <h3 className='text-white'>Made With Love By - <a href='https://www.linkedin.com/in/aksoni0520/' className="text-green-500 font-bold">Arjun</a></h3>
            </div>
        </div>
    )
}
