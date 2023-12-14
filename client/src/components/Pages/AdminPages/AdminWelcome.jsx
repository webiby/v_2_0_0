import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function AdminWelcome({user}) {
  return (
    <div className='relative bg-slate-900  h-[100dvh]'>
        <h2 className='text-cyan-500 pt-5 px-5 md:pt-5 md:pl-20 md:pr-20  md:text-left'>Welcome <b>{user.first_name} {user.last_name}</b></h2>
        <h6 className='text-cyan-800 pb-5 px-5 md:pb-5 md:pl-20 md:pr-20 text-sm md:text-left shadow-2xl shadow-cyan-900'>Technology By <b>Webiby Websites</b></h6>
        <h5 className='text-cyan-500 pt-5'>Your Webiby Collection</h5>
        <h6 className='text-cyan-800 pb-5'>Authorised Licence Key</h6>
        <div className='flex flex-wrap text-slate-500 items-center justify-center py-5'>
            <div className='flex-row cursor-pointer shadow-2xl shadow-cyan-800 mx-4 h-[20dvh] aspect-square rounded-full bg-slate-200 hover:scale-110 border-2 border-cyan-500 border-double'>
                <img
                    className="aspect-square h-full object-cover rounded-full hover:scale-110 border-2 border-cyan-500 border-double"
                    src="https://source.unsplash.com/random"
                    alt="Website"
                />
                <div className='py-8 text-cyan-500 font-bold text-lg'>Long Website Name</div>
            </div>
            <div className='flex-row cursor-pointer shadow-2xl shadow-cyan-800 mx-4 h-[20dvh] aspect-square rounded-full bg-slate-200 hover:scale-110 border-2 border-cyan-500 border-double'>
                <img
                    className="aspect-square h-full object-cover rounded-full hover:scale-110 border-2 border-cyan-500 border-double"
                    src="https://source.unsplash.com/random"
                    alt="Website"
                />
                <div className='py-8 text-cyan-500 font-bold text-lg'>Long Website Name</div>
            </div>
            <div className='flex-row cursor-pointer shadow-2xl shadow-cyan-800 mx-4 h-[20dvh] aspect-square rounded-full bg-slate-200 hover:scale-110 border-2 border-cyan-500 border-double'>
                <img
                    className="aspect-square h-full object-cover rounded-full hover:scale-110 border-2 border-cyan-500 border-double"
                    src="https://source.unsplash.com/random"
                    alt="Website"
                />
                <div className='py-8 text-cyan-500 font-bold text-lg'>Long Website Name</div>
            </div>
            <div className='flex-row cursor-pointer shadow-2xl shadow-cyan-800 mx-4 h-[20dvh] aspect-square rounded-full bg-slate-600 hover:bg-slate-300 hover:scale-110 border-2 border-cyan-500 border-double'>
                <FaPlus
                    className="p-4 w-full text-pink-700 h-full object-cover rounded-full hover:scale-110 border-2 border-cyan-500 border-double"

                />
                <div className='py-8 text-cyan-500 font-bold text-lg'>Add Webiby</div>
            </div>
        </div>
    </div>
  )
}
