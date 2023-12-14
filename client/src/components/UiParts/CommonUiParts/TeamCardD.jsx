import React from 'react';

export default function TeamCardD() {
  return (
    <>
        <div className='w-full mt-16 rounded-full items-center p-2 bg-slate-700 shadow-2xl shadow-slate-500 text-slate-50'>
            <div className='items-center'>
                <div className='items-center flex group'>
                    <div className='justify-center'>
                        <img className="ring-2 ring-offset-4 ring-offset-slate-50 bg-transparent w-12 h-12 rounded-full object-cover" src="https://source.unsplash.com/random" alt="Avatar" />
                    </div>
                    <div className='ml-4 flex-row text-center hidden group-hover:block'>
                        <div className='font-bold uppercase text-slate-200'>Parthrajsinh Jethwa</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
