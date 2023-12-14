import React from 'react'

export default function MissionContent() {
  return (
    <>
        <div className="text-center py-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Mission</h2>
            <p className="text-gray-600 text-lg">Key Concept Of Our Business</p>
        </div>
        <div className="md:flex items-center text-left justify-center">
            <div className="md:order-last w-full md:w-1/2">
                <img className="object-cover w-full h-[70dvh] rounded-xl" src="https://source.unsplash.com/random" alt="Image" />
            </div>
            <div className="w-full md:w-1/2 p-16">
                <div className="mb-4">
                    <h2 className="text-slate-800">Column Title</h2>
                    <p className="text-slate-500">Column Subtitle</p>
                </div>
                <p className="text-slate-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis scelerisque nisi et efficitur. Mauris gravida
                ut nunc eget pellentesque. Curabitur eu ultricies nibh, non gravida odio.
                </p>
                <div className="justify-evenly space-x-4">
                <button className="rounded-lg bg-blue-500 text-white px-4 py-2">Button 1</button>
                <button className="rounded-lg bg-blue-500 text-white px-4 py-2">Button 2</button>
                </div>
            </div>
            
        </div>
    </>
  )
}
