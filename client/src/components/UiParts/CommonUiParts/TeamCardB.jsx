import React from 'react';
import { MdEmail } from 'react-icons/md';
import { PiPhoneFill } from 'react-icons/pi';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { RiTwitterXFill, RiFacebookFill } from 'react-icons/ri';
import TeamMemberStat from './TeamMemberDesciplineStat';
import TeamMemberPerformanceStat from './TeamMemberPerformanceStat';

export default function TeamCardB() {
  return (
    <>
        <div className='my-16 py-2 px-4 rounded-xl h-full w-full bg-green-200 shadow-2xl shadow-slate-500 group text-slate-50'>
            <div className='md:flex items-center md:justify-between md:space-y-0 space-y-8'>
                <div className='md:flex items-center pt-2 group-hover:scale-105'>
                    <div className='justify-center flex'>
                        <img className="ring-2 ring-offset-4 ring-offset-slate-50 bg-transparent w-28 h-28 rounded-full mb-2 md:mb-0 md:mr-4 object-cover" src="https://source.unsplash.com/random" alt="Avatar" />
                    </div>
                    <div className='flex-row md:text-left'>
                        <div className='tracking-wide text-xl font-extrabold uppercase text-slate-500 mb-2'>Parthrajsinh Jethwa</div>
                        <div className='text-md text-slate-700 opacity-50'><b>Product Soft Demonstrator</b></div>
                        <div className='text-md text-slate-700 opacity-50'>Department - <b>Sales</b></div>
                    </div>
                </div>
            </div>
            <div className='py-4 text-right justify-evenly flex space-x-4'>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-orange-600 hover:text-orange-100 hover:rounded-lg text-orange-300 shadow-orange-700 bg-orange-500"><MdEmail /></a>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-blue-600 hover:text-blue-100 hover:rounded-lg text-blue-300 shadow-blue-700 bg-blue-500"><PiPhoneFill /></a>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-emerald-600 hover:text-emerald-100 hover:rounded-lg text-emerald-300 shadow-emerald-700 bg-green-600"><BsWhatsapp /></a>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-slate-800 hover:text-slate-100 hover:rounded-lg text-slate-300 shadow-slate-700 bg-slate-700"><RiTwitterXFill /></a>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-indigo-600 hover:text-indigo-100 hover:rounded-lg text-indigo-300 shadow-indigo-700 bg-indigo-500"><RiFacebookFill /></a>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-gradient-to-b hover:from-fuchsia-500 hover:via-red-600 hover:to-orange-400 hover:text-red-100 hover:rounded-lg text-red-300 shadow-red-700 bg-gradient-to-b from-fuchsia-400 via-red-500 to-orange-300"><BsInstagram /></a>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl shadow-xl rounded-full lg:p-2 p-1 hover:bg-blue-600 hover:text-blue-100 hover:rounded-lg text-blue-300 shadow-blue-700 bg-blue-500"><GrLinkedinOption /></a>
            </div>
            <div className='lg:flex lg:justify-around items-center'>
                <div className='items-center md:space-y-0 space-y-2 pt-4 md:py-0 text-slate-700 opacity-50'>
                    <div className='lg:flex'>
                        <span>Age: <b>20 Years</b></span>
                    </div>
                    <div className='lg:flex'>
                        <span>Contribution: <b>2 Months</b></span>
                    </div>
                    <div className='lg:flex'>
                        <span>Education: <b>MBA Sales</b></span>
                    </div>
                    <div className='lg:flex'>
                        <span>Job Location: <b>Ahmedabad</b></span>
                    </div>
                    <div className='lg:flex'>
                        <span>Working Hours: <b>10:00 - 19:00</b></span>
                    </div>
                    <div className='lg:flex'>
                        <span>Working Days: <b>Mon - Sat</b></span>
                    </div>
                </div>
                <div className='flex justify-evenly pt-4 md:py-0'>
                    <div>
                        <TeamMemberStat />
                    </div>
                    <div>
                        <TeamMemberPerformanceStat />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
