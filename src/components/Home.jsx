import React, { useContext, useEffect, useState } from 'react'
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Authcontext from './context/authcontext';
import { AiOutlineArrowLeft } from 'react-icons/ai';


export default function Home() {
    const [searUser, setSearUser] = useState("")
    const [chat, setchat] = useState([]);
    const navigate = useNavigate()
    const { token, payload, User } = useContext(Authcontext);
    const [id, setid] = useState("");
    const [logout, setout] = useState("none")
    const [message, setMessage] = useState("");
    const [chatDisplay, setChatDisplay] = useState("block");
    const [searchDisplay, setSearchDisplay] = useState("none");
    const [request, setRequest] = useState("");
    const [myRequest, setMyRequest] = useState([]);
    const [MyrequestShow, setMyrequestShow] = useState("none");

    useEffect(() => {
        mychats()
    }, []);

    const searchBackClicked = () => {
        setChatDisplay("block")
        setSearchDisplay("none")
        setMyrequestShow("none")
        setRequest("")
    }

    const onclick = async (e) => {
        e.preventDefault();
        setMyrequestShow("none")
        setChatDisplay("none")
        setSearchDisplay("block")
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/auth/search`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ uid: id }),
            })
            let data = await apicall.json()
            console.log(data)
            setMessage(data.message)
            setSearUser(data.user)
        } catch (error) {
            console.log(error);
        }
    }
    const requestSend = async () => {
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/request/friend`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ uid1: payload, uid2: id, nameA: User }),
            })
            let data = await apicall.json()
            console.log(data)
            setRequest(data.message)
        } catch (error) {
            console.log(error);
        }
    }

    const MyRequest = async () => {
        setChatDisplay("none")
        setSearchDisplay("none")
        setMyrequestShow("block")
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/request/myRequests`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ uid: payload }),
            })
            let data = await apicall.json()
            console.log(data)
            setMyRequest(data.requests)
        } catch (error) {
            console.log(error);
        }
    }
    const AcceptClicked = async (ids) => {
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/request/accept`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ uid1: payload, uid2: ids, nameB: User }),
            })
            let data = await apicall.json()
            console.log(data)
            MyRequest()
        } catch (error) {
            console.log(error);
        }
    }
    const DeleteClicked = async (ids) => {
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/request/Delete`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ uid1: payload, uid2: ids, nameB: User }),
            })
            let data = await apicall.json()
            console.log(data)
            MyRequest()
        } catch (error) {
            console.log(error);
        }
    }
    const mychats = async () => {
        try {
            const apicall = await fetch(`http://127.0.0.1:4000/api/request/mychats`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }, body: JSON.stringify({ id: payload }),
            })
            let data = await apicall.json()
            console.log(data)
            setchat(data.chat1)
        } catch (error) {
            console.log(error);
        }
    }
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
                    <input onChange={(e) => setid(e.target.value)} placeholder='Search Id..' className='' type="text" />
                    <BiSearchAlt2 onClick={onclick} className='text-2xl text-gray-300' />
                </div>
            </div>
            {token && <>
                <div style={{ backgroundColor: "rgb(18, 18, 18)", height: "85%", display: searchDisplay }} className='text-white overflow-scroll'>
                    <div style={{ width: "30px", height: "30px" }} className='absolute rounded-full p-1 top-2 bg-slate-600 text-white flex items-center justify-center right-3 text-2xl'><AiOutlineArrowLeft onClick={searchBackClicked} /></div>
                    {message === "User name not found" && <div className='flex h-full text-slate-400 items-center justify-center'>{message}</div>}
                    {message === "user found" && <>
                        <div to={"/chat"} state={{ img: "boy.png", name: "Arjun" }} className='m-4 pb-2 flex items-center justify-between'>
                            <div className='flex items-center justify-center'>
                                <div style={{ width: "50px", height: "50px" }} className='rounded-full bg-white overflow-hidden'><img src="boy.png" width={"60px"} alt="" /></div>
                                <div className='ml-3'>
                                    <h1 className='font-bold text-xl'>{searUser}</h1>
                                    <p className='text-slate-400'>add to your friend list</p>
                                </div>
                            </div>
                            {request === "" && <><div style={{ width: "90px" }} onClick={requestSend} className='bg-green-500 flex items-center justify-center font-bold text-xl py-3 px-1 rounded'>Add</div></>}
                            {request === "Friends" && <><div style={{ width: "90px" }} onClick={requestSend} className='bg-green-500 flex items-center justify-center font-bold text-xl py-3 px-1 rounded'>Friends</div></>}
                            {request === "Sended" && <><div style={{ width: "90px" }} onClick={requestSend} className='bg-green-500 flex items-center justify-center font-bold text-xl py-3 px-1 rounded'>Sended</div></>}
                        </div>
                    </>}
                </div>

                {/* *********************************************************************************************** */}
                <div style={{ backgroundColor: "rgb(18, 18, 18)", height: "85%", display: MyrequestShow }} className='text-white overflow-scroll'>
                    <div style={{ width: "30px", height: "30px" }} className='absolute rounded-full p-1 top-2 bg-slate-600 text-white flex items-center justify-center right-3 text-2xl'><AiOutlineArrowLeft onClick={searchBackClicked} /></div>
                    {myRequest.length === 0 && <div className='flex h-full text-slate-400 items-center justify-center'>No Requests</div>}
                    {myRequest.length !== 0 && <div className='flex items-center flex-col'>
                        {myRequest.map((e, i) => {
                            return (
                                <div to={"/chat"} key={i} state={{ img: "boy.png", name: "Arjun" }} className='m-4 rounded-xl pb-3 bg-slate-600 w-3/4 flex flex-col  items-center justify-between'>
                                    <div className='flex items-center justify-center'>
                                        <div style={{ width: "50px", height: "50px" }} className='rounded-full bg-white overflow-hidden'><img src="boy.png" width={"60px"} alt="" /></div>
                                        <div className='ml-3'>
                                            <h1 className='font-bold text-xl'>{searUser}</h1>
                                            <p className='text-slate-400'>add to your friend list</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-around w-3/4 mt-2'>
                                        <div style={{ width: "90px" }} onClick={() => AcceptClicked(e.userA)} className='bg-green-500 flex items-center justify-center font-bold text-xl py-3 px-1 rounded'>Accept</div>
                                        <div style={{ width: "90px" }} onClick={() => DeleteClicked(e.userA)} className='bg-green-500 flex items-center justify-center font-bold text-xl py-3 px-1 rounded'>Reject</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
                </div>

                {/* ******************************************************************************* */}

                <div style={{ backgroundColor: "rgb(18, 18, 18)", height: "85%", display: chatDisplay }} className='text-white overflow-scroll'>
                    {chat.map((e, i) => {
                        return (
                            <Link to={"/chat"} state={{ img: "boy.png", name: "Arjun" }} key={i} className='m-4 pb-2 flex items-center justify-between'>
                                <div className='flex items-center justify-center'>
                                    <div style={{ width: "50px", height: "50px" }} className='rounded-full bg-white overflow-hidden'><img src="boy.png" width={"60px"} alt="" /></div>
                                    <div className='ml-3'>
                                        <h1 className='font-bold text-xl'>{e.nameB}</h1>
                                        <p className='ml-1 text-slate-400'>{e.userB}</p>
                                    </div>
                                </div>
                                <div><BsFillChatDotsFill className='text-3xl' /></div>
                            </Link>
                        )
                    })}
                </div>
            </>}
            {!token && <><div style={{ backgroundColor: "rgb(18, 18, 18)", height: "85%", width: "100vw" }} className='flex items-center justify-center text-slate-400'>Invalid User</div></>}
            <div onClick={MyRequest} style={{ width: "60px", height: "60px" }} className='absolute flex  items-center justify-center bg-green-500 text-white rounded-full bottom-6 right-6'>
                <BsFillChatDotsFill className='text-3xl' />
            </div>
        </div>
    )
}
