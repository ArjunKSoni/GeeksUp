import React from 'react'
import { BiDotsVerticalRounded, BiSearchAlt2 } from 'react-icons/bi';


export default function Home() {
    return (
        <div className='h-screen'>
            <div style={{ backgroundColor: "rgb(40, 39, 39)", height: "15%" }} className='p-3'>
                <div className='flex items-center mb-2 justify-between'>
                    <h2 className='text-gray-300 font-bold text-xl'>GeeksUp</h2>
                    <BiDotsVerticalRounded className='text-2xl text-gray-300' />
                </div>
                <div className='w-full rounded-full py-1 input px-4 flex items-center justify-between bg-slate-600 '>
                    <input placeholder='Search Id..' className='' type="text" />
                    <BiSearchAlt2 className='text-2xl text-gray-300' />
                </div>
            </div>
            <div style={{ backgroundColor: "rgb(18, 18, 18)", height: "85%" }} className=''>
                hi
            </div>
        </div>
    )
}
