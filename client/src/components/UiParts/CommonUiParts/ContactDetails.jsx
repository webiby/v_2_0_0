import React from 'react';
import { PiPhoneFill } from 'react-icons/pi';
import { GoPersonFill } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import { PiMapPinLineFill } from 'react-icons/pi';
// import { GoPersonFill } from 'react-icons/go';
import { LiaPrayingHandsSolid } from 'react-icons/lia';


export default function ContactDetails() {
  return (
    <>
    <div className=''>
        <div className='md:flex'>
            <div className="md:w-1/2 m-2 bg-emerald-200 pt-4 text-lime-700 rounded-xl shadow-md shadow-lime-700">
                <p className='justify-evenly flex text-3xl'><GoPersonFill /></p>
                <p className="text-md font-bold">Parthrajsinh Jethwa</p>
            </div>
            <div className="md:w-1/2 m-2 bg-emerald-200 pt-4 text-lime-700 rounded-xl shadow-md shadow-lime-700">
                <p className='justify-evenly flex text-3xl'><PiPhoneFill /></p>
                <p className="text-md font-bold">+91 9512 330 331</p>
            </div>
        </div>
        <div className='md:flex'>
            <div className="md:w-1/2 m-2 bg-emerald-200 pt-4 text-lime-700 rounded-xl shadow-md shadow-lime-700">
                <p className='justify-evenly flex text-3xl'><MdEmail /></p>
                <p className="text-md font-bold">info.webiby@gmail.com</p>
            </div>
            <div className="md:w-1/2 m-2 bg-emerald-200 pt-4 text-lime-700 rounded-xl shadow-md shadow-lime-700">
                <p className='justify-evenly flex text-3xl'><PiMapPinLineFill /></p>
                <p className="text-md font-bold">386 - SOBO Center<br />South Bopal<br />Ahmedabad - 380058</p>
            </div>
        </div>
        <div className='md:flex'>
            <div className="md:w-1/2 m-2 bg-emerald-200 pt-4 text-lime-700 rounded-xl shadow-md shadow-lime-700">
                <p className='justify-evenly flex text-3xl'><LiaPrayingHandsSolid /></p>
                <p className="text-md font-bold">Logo</p>
            </div>
            <div className="md:w-1/2 m-2 bg-emerald-200 pt-4 text-lime-700 rounded-xl shadow-md shadow-lime-700">
                <p className='justify-evenly flex text-3xl'><LiaPrayingHandsSolid /></p>
                <p className="text-md font-bold">Logo</p>
            </div>
        </div>
    </div>
    </>
  )
}
