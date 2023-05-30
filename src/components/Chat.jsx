import React, { useState } from 'react'
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Chat(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const { img, name, chats } = location.state
    return (
        <div className='h-screen'>
            <div style={{ backgroundColor: "rgb(40, 39, 39)", height: "10%" }} className='px-3 flex items-center justify-between text-white'>
                <div className='flex items-center justify-center gap-3'>
                    <div onClick={(e) => { e.preventDefault(); navigate("/home") }} className='flex items-center px-3 justify-center hover:bg-slate-500 p-1 rounded-full'>
                        <AiOutlineArrowLeft className='text-2xl' />
                        <div style={{ width: "50px", height: "50px" }} className='rounded-full bg-white overflow-hidden'><img src={img} width={"60px"} alt="" /></div>
                    </div>
                    <h1 className='font-bold text-xl'>Chat Name</h1>

                </div>
            </div>
        </div>
    )
}
