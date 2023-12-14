import React from 'react';
import { MdEmail } from 'react-icons/md';
import { PiPhoneFill } from 'react-icons/pi';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { RiTwitterXFill, RiFacebookFill } from 'react-icons/ri';

export default function TeamCardC() {
  return (
    <>
        <div className='p-4 rounded-xl bg-yellow-200 shadow-2xl shadow-slate-500 text-slate-50'>
            <div className='items-center'>
                <div className='items-center py-4'>
                    <div className='justify-center flex'>
                        <img className="ring-2 ring-offset-4 ring-offset-slate-50 bg-transparent w-16 h-16 rounded-full mb-4 object-cover" src="https://source.unsplash.com/random" alt="Avatar" />
                    </div>
                    <div className='flex-row text-center'>
                        <div className='tracking-wide text-md font-extrabold uppercase text-slate-500 mb-2'>Parthrajsinh Jethwa</div>
                        <div className='text-sm text-slate-700 opacity-50'><b>Product Soft Demonstrator</b></div>
                        <div className='text-sm text-slate-700 opacity-50'>Department - <b>Sales</b></div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <div className='justify-evenly space-x-4 flex'>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-orange-600 hover:text-orange-100 hover:rounded-lg text-orange-300 shadow-orange-700 bg-orange-500"><MdEmail /></a>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-blue-600 hover:text-blue-100 hover:rounded-lg text-blue-300 shadow-blue-700 bg-blue-500"><PiPhoneFill /></a>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-emerald-600 hover:text-emerald-100 hover:rounded-lg text-emerald-300 shadow-emerald-700 bg-green-600"><BsWhatsapp /></a>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-slate-800 hover:text-slate-100 hover:rounded-lg text-slate-300 shadow-slate-700 bg-slate-700"><RiTwitterXFill /></a>
                </div>
                <div className='justify-evenly space-x-4 flex'>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-indigo-600 hover:text-indigo-100 hover:rounded-lg text-indigo-300 shadow-indigo-700 bg-indigo-500"><RiFacebookFill /></a>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-gradient-to-b hover:from-fuchsia-500 hover:via-red-600 hover:to-orange-400 hover:text-red-100 hover:rounded-lg text-red-300 shadow-red-700 bg-gradient-to-b from-fuchsia-400 via-red-500 to-orange-300"><BsInstagram /></a>
                    <a href="/" className="text-xl shadow-xl rounded-full p-1 hover:bg-blue-600 hover:text-blue-100 hover:rounded-lg text-blue-300 shadow-blue-700 bg-blue-500"><GrLinkedinOption /></a>
                </div>
            </div>
        </div>
    </>
  )
}
