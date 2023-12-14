import React, { useState } from 'react';
import useTable from '../../../../hooks/useTable'; // Import the custom hook
import useCreate from '../../../../hooks/useCreate';
import Sidebar from '../../../Sections/AdminSections/Sidebar';

import { FaBell } from 'react-icons/fa';
import { TiWarning } from 'react-icons/ti';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Abouts() {
  // Table Name
  const table = "users";

  // CreateModal
  const [isOpen, setIsOpen] = useState(false);

  const openCreateModal = () => {
    setIsOpen(true);
  };

  const closeCreateModal = () => {
    setIsOpen(false);
  };
  // Create
  const { inputFields, createRecord } = useCreate(table);
  // Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // Table
  const { renderTable, toggleColumnVisibility, loading } = useTable(table);

  return (
    <div className="bg-gray-200">
      {/* Sticky Header */}
      <header className="flex h-20 hover:text-white hover:bg-gradient-to-t hover:from-yellow-800 hover:via-orange-900 hover:to-yellow-800 bg-gradient-to-t from-yellow-800 via-yellow-500 to-yellow-800 hover:shadow-orange-900 shadow-gray-500 shadow-xl sticky top-0 z-10">
        <div className={`overflow-clip flex-none h-auto rounded-r-full border-8 border-orange-300 flex items-center justify-center bg-orange-500 text-white text-xl font-bold w-1/2 md:w-1/3 lg:w-1/5 ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}>
          <img className='' src='../src/images/new.jpg' alt='WEBIBY-WEBSITES WEBIBY-APPS' />
        </div>
        <div className="gap-2 container mx-auto flex items-center justify-between p-4">
          <button
            onClick={toggleSidebar}
            className={`lg:hidden text-gray-600 hover:text-orange-500 focus:outline-none focus:text-orange-500 ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}>
            <RiMenuFoldLine className='w-12 h-12 p-1' />
          </button>
          <button
            onClick={toggleSidebar}
            className={`lg:hidden text-gray-600 hover:text-orange-500 focus:outline-none focus:text-orange-500 ${
            isSidebarOpen ? 'hidden' : 'block'
          }`}>
            <RiMenuUnfoldLine className='w-12 h-12 p-1' />
          </button>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          {/* Notification Icons Start */}
          <div className='hidden md:block'>
            <div className="flex gap-4">
              <div className="relative group hover:bg-red-200 hover:shadow-xl hover:shadow-yellow-900 hover:rounded-2xl w-12 h-12 rounded-full bg-gray-200">
                <TiWarning size={30} className='w-12 h-12 p-1 text-red-500' />
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full w-6 h-6">3</div>
                {/* Dropdown Start */}
                <div className="absolute group-hover:block bg-transparent right-0 hidden w-max">
                  <div className='rounded-xl bg-red-200 py-4 mt-2'>
                    {/* List Start */}
                    <div className='flex hover:bg-red-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-red-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-red-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-red-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-red-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-red-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    {/* List end */}
                  </div>
                </div>
                {/* Dropdown End */}
              </div>
              <div className="relative group hover:bg-orange-200 hover:shadow-xl hover:shadow-yellow-900 hover:rounded-2xl w-12 h-12 rounded-full bg-gray-200">
                <BsPatchCheckFill size={30} className='w-12 h-12 p-1 text-orange-500' />
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full w-6 h-6">3</div>
                {/* Dropdown Start */}
                <div className="absolute group-hover:block bg-transparent right-0 hidden w-max">
                  <div className='rounded-xl bg-orange-200 py-4 mt-2'>
                    {/* List Start */}
                    <div className='flex hover:bg-orange-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-orange-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    {/* List end */}
                  </div>
                </div>
                {/* Dropdown End */}
              </div>
              <div className="relative group hover:bg-purple-200 hover:shadow-xl hover:shadow-yellow-900 hover:rounded-2xl w-12 h-12 rounded-full bg-gray-200">
                <FaBell size={30} className='w-12 h-12 p-1 text-purple-500' />
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full w-6 h-6">3</div>
                {/* Dropdown Start */}
                <div className="absolute group-hover:block bg-transparent right-0 hidden w-max">
                  <div className='rounded-xl bg-purple-200 py-4 mt-2'>
                    {/* List Start */}
                    <div className='flex hover:bg-purple-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-purple-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    {/* List end */}
                  </div>
                </div>
                {/* Dropdown End */}
              </div>
              <div className="relative group hover:bg-yellow-200 hover:shadow-xl hover:shadow-yellow-900 hover:rounded-2xl w-12 h-12 rounded-full bg-gray-200">
                <img className="block hover:shadow-xl hover:shadow-yellow-900 hover:rounded-2xl w-full h-full object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu-xjTvs8rrElrjIWaWJtLPUKy6jiFmn__ddrVGxkrg4ue1RDP_zsItvEMsNTK7NdJdo&usqp=CAU" alt="Woman's Face" />
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-6 h-6">4</div>
                {/* Dropdown Start */}
                <div className="absolute group-hover:block bg-transparent right-0 hidden w-max">
                  <div className='rounded-xl bg-yellow-200 py-4 mt-2'>
                    {/* List Start */}
                    <div className='flex hover:bg-yellow-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    <div className='flex hover:bg-yellow-300 rounded-xl m-2 shadow-lg hover:-translate-y-1 p-2 gap-2'>
                      <img className="mx-auto h-8 rounded-full align-middle" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                      <div className="text-center">
                          <h6 className="text-yellow-900 font-thin">
                            From The Developer
                          </h6>
                          <h6 className="text-yellow-900 font-thin">
                            Nikunj Mehta
                          </h6>
                      </div>
                    </div>
                    {/* List end */}
                  </div>
                </div>
                {/* Dropdown End */}
              </div>
            </div>
          </div>
          {/* Notification Icons End */}
        </div>
      </header>
      
      {/* Under the header */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`overflow-auto flex-none border-orange-300 border-r-8 bg-yellow-800 text-white max-h-max w-1/2 md:w-1/3 lg:w-1/5 p-4 ${
            isSidebarOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Sidebar content */}
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='overflow-auto'>
          <div className={`py-8 px-2`}>
            <div className={`w-full flex-none`}>
              <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
              {/* Table Start */}
              <div>
                <div className='card rounded-xl m-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <div className='card-header flex items-center'>
                  <h4 className='text-left font-bold flex-grow'>All Block Reasons</h4>
                  {/* Create Row - CreateModal Button Start */}
                  <button
                    onClick={openCreateModal}
                    className="px-8 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md ml-auto"
                  >
                    <div className='flex gap-2'>
                      <b>Add New</b> <TbSquareRoundedPlusFilled size={20} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="fixed inset-0 md:w-1/2 p-4 items-center justify-center z-50 bg-blue-300 overflow-auto">
                      <div className="modal-container">
                        <div className="modal-content">
                          <h2 className="text-xl font-semibold mb-4">CreateModal Title</h2>
                          <form>
                            {inputFields}
                            <button type="button"
                              onClick={createRecord}
                              className="bg-green-300 hover:bg-green-400 text-green-800 font-bold py-2 px-4 rounded my-2"
                            >
                              Create | Save
                            </button>
                          </form>
                        </div>
                        <div className="modal-actions">
                          <button
                            onClick={closeCreateModal}
                            className="bg-orange-300 hover:bg-orange-400 text-orange-800 font-bold py-2 px-4 rounded"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Create Row - CreateModal Button End */}
                  </div>
                  {/* Loading Table */}
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div className='overflow-auto relative m-2 card-body bg-blue-100'>
                      {renderTable()}
                      {/* <div className='text-left'> */}
                        {/* Example button to toggle visibility of 'id' column */}
                        {/* <button onClick={() => toggleColumnVisibility('id')} className="mx-2 px-2 rounded-pill text-white bg-red-300 hover:bg-indigo-300 hover:drop-shadow-md duration-100">Toggle ID Column</button> */}
                      {/* </div> */}
                    </div>
                  )}
                </div>
              </div>
              {/* Table End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
