import React, { useState } from 'react';
import { Outlet } from "react-router";
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

export default function Header({ website }) {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
        <header className="bg-transparent text-white sticky-top m-0 p-0 backdrop-blur-lg">
            <nav className="mx-auto flex justify-between items-center px-4 py-2">
                <div className="flex items-center">
                    <img src="https://source.unsplash.com/random" alt="Website Logo" className="w-auto h-10 object-cover mr-2" />
                    <div className="text-xl font-bold text-slate-500">{website.website_name}</div>
                    {/* <div className="text-xl font-bold text-slate-500">{website.webiby_keys_name} | {website.website_name}</div> */}
                </div>
                <div className="hidden md:block">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <NavLink to={`/${website.website_name}/${website.id}`} className="bg-opacity-25 py-2 px-2 rounded-lg bg-slate-400 text-slate-500 hover:bg-slate-900 hover:text-slate-200 hover:border-b-4 hover:border-gray-500 no-underline">
                                Home
                            </NavLink>
                        </div>
                        {['about', 'products', 'services', 'contact'].map((link) => (
                            <div key={link}>
                                <NavLink to={`/${website.website_name}/${website.id}/${link}`} className="bg-opacity-25 py-2 px-2 rounded-lg bg-slate-400 text-slate-500 hover:bg-slate-900 hover:text-slate-200 hover:border-b-4 hover:border-gray-500 no-underline capitalize">
                                    {link}
                                </NavLink>
                            </div>
                        ))}

                        {/* <div>
                            <NavLink to="/login">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 rounded-lg hover:rounded-md">Login</button>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/register">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-2 rounded-lg hover:rounded-md">Register</button>
                            </NavLink>
                        </div> */}
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                        className="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        {isOpen ? (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                            />
                        ) : (
                            <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 5h16v2H4V5zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"
                            />
                        )}
                        </svg>
                    </button>
                </div>
            </nav>
        {isOpen && (
            <nav className="block md:hidden">
                <ul className="flex flex-col space-y-2 m-0 pb-4 px-4">
                    <li>
                        <NavLink to="/website_name"  className="text-gray-500 hover:text-blue-500 no-underline">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/website_name/about"  className="text-gray-500 hover:text-blue-500 no-underline">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/website_name/products"  className="text-gray-500 hover:text-blue-500 no-underline">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/website_name/services"  className="text-gray-500 hover:text-blue-500 no-underline">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/website_name/contact"  className="text-gray-500 hover:text-blue-500 no-underline">Contact</NavLink>
                    </li>
                    {/* <li>
                        <hr />
                    </li>
                    <div className='flex justify-evenly space-x-2'>
                        <li>
                            <NavLink to="/login">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg hover:rounded-md">Login</button>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg hover:rounded-md">Register</button>
                            </NavLink>
                        </li>
                    </div> */}
                </ul>
            </nav>
        )}
        </header>
      <Outlet />
      <Footer website={website} />
    </div>
  )
}
