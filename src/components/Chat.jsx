import React, { useState } from 'react'
import { GrAttachment } from 'react-icons/gr';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Chat(props) {
    const infocus = () => {
        document.getElementById("input").focus()
    }
    const scrollToBottom = (id) => {
        const element = document.getElementById(id);
        element.scrollTop = element.scrollHeight;
    }
    const navigate = useNavigate()
    const location = useLocation()
    const { img, name } = location.state
    const [chat, setchat] = useState([])
    const [newchat, setnewchat] = useState("")
    return (
        <div className='h-screen bg-black w-screen'>
            <div style={{ backgroundColor: "rgb(40, 39, 39)", height: "10%" }} className='flex items-center justify-between text-white'>
                <div className='flex items-center justify-center gap-3'>
                    <div onClick={(e) => { e.preventDefault(); navigate("/home") }} className='flex items-center px-3 justify-center hover:bg-slate-500 p-1 rounded-full'>
                        <AiOutlineArrowLeft className='text-2xl' />
                        <div style={{ width: "50px", height: "50px" }} className='rounded-full bg-white overflow-hidden'><img src={img} width={"60px"} alt="" /></div>
                    </div>
                    <h1 className='font-bold text-xl'>{name}</h1>
                </div>
            </div>
            <div className=' overflow-scroll' id='Box' style={{ maxHeight: "77%" }}>
                {chat.map((e, i) => {
                    return (
                        <div key={i} className="w-full flex items-center justify-end p-2 text-white px-3">
                            <div style={{ maxWidth: "80%", borderRadius: "20px 20px 0px 20px" }} className='bg-blue-600 p-2'>
                                {e}
                            </div>
                        </div>)
                })}
            </div>
            <div style={{ height: "15vh" }} className='absolute p-4 flex items-center justify-center bottom-0 left-0  w-screen z-50'>
                <div style={{ width: "100%" }} className='bg-white input3 flex items-center justify-center py-1 rounded px-2'>
                    <input id='input' value={newchat} onChange={(e) => { setnewchat(e.target.value) }} type="text" placeholder="Reply to @Rohit Yadav" />
                    <GrAttachment className='ml-2 text-xl' /><BiSend onClick={(e) => { if (newchat !== "") { setchat(chat.concat(newchat)); setnewchat(""); scrollToBottom("Box"); infocus() } }} className='ml-4 text-xl' />
                </div>
            </div>
        </div>
    )
}
