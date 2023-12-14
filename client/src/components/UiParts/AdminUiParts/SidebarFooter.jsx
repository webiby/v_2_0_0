import React from 'react'

export default function SidebarFooter() {
  return (
    <>
        <div className="py-4 overflow-auto px-2 bg-yellow-700 hover:bg-yellow-900 rounded-xl shadow-xl hover:shadow-orange-300 shadow-yellow-500 space-y-1 sm:py-0 sm:flex sm:items-center sm:space-y-0 sm:space-x-2">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="../src/images/nm.jpg" alt="Woman's Face" />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-yellow-500 font-semibold">
                  From The Developer
                </p>
                <p className="text-yellow-500 font-medium">
                  Nikunj Mehta
                </p>
              </div>
              <button className="px-4 py-1 text-sm text-orange-600 font-semibold rounded-full border border-orange-200 hover:text-white hover:bg-orange-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">Read</button>
            </div>
        </div>
    </>
  )
}
