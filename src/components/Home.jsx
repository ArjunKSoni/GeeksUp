import React, { useState } from 'react'
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [chat, setchat] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    const navigate = useNavigate()
    const [logout, setout] = useState("none")
    return (
        <div className='h-screen'>
            <div style={{ backgroundColor: "rgb(40, 39, 39)", height: "15%" }} className='p-3'>
                <div className='flex items-center mb-2 justify-between'>
                    <h2 className='text-gray-300 font-bold text-xl'>GeeksApp</h2>
                    <BiDotsVerticalRounded onClick={(e) => { logout === "none" ? setout("block") : setout("none") }} className='text-2xl text-gray-300' />
                    <div style={{ display: logout, width: "100px" }} className='absolute rounded-xl overflow-hidden bg-black top-12 right-0 z-10'>
                        <button className='w-full p-3  bg-black  hover:bg-gray-700 font-bold text-white'>Profile</button>
                        <button onClick={(e) => { e.preventDefault(); navigate("/") }} className='w-full hover:bg-gray-700 p-3 bg-black font-bold text-white'>Logout</button>
                    </div>
                </div>
                <div className='w-full rounded-full py-1 input px-4 flex items-center justify-between bg-slate-600 '>
                    <input placeholder='Search Id..' className='' type="text" />
                    <BiSearchAlt2 className='text-2xl text-gray-300' />
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(18, 18, 18)", height: "85%" }} className='text-white overflow-scroll'>
                {chat.map((e, i) => {
                    return (
                        <div key={i} className='m-4 pb-2 flex items-center justify-between'>
                            <div className='flex items-center justify-center'>
                                <div style={{ width: "50px", height: "50px" }} className='rounded-full bg-white overflow-hidden'><img src="boy.png" width={"60px"} alt="" /></div>
                                <div className='ml-3'>
                                    <h1 className='font-bold text-xl'>Chat Name</h1>
                                    <p className='ml-3 text-slate-400'>inner chats</p>
                                </div>
                            </div>

                            <div>Time</div>
                        </div>
                    )
                })}
            </div>
            <div style={{ width: "60px", height: "60px" }} className='absolute flex  items-center justify-center bg-green-500 text-white rounded-full bottom-6 right-6'>
                <BsFillChatDotsFill className='text-3xl' />
            </div>
        </div>
    )
}
