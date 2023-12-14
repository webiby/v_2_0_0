import React from 'react';

const Footer = ({website}) => {
  return (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-10 mt-16">
            <div className=''>
                <div className="flex flex-wrap -mx-4 justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
                        <h3 className="text-xl font-bold mb-4">Logo</h3>
                        <p>Company description goes here.</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
                        <h3 className="card-header text-xl font-bold mb-4">Offers</h3>
                        <div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Privacy Policy
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Terms & Conditions
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Privacy Policy
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Terms & Conditions
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
                        <h3 className="card-header text-xl font-bold mb-4">Categories</h3>
                        <div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Privacy Policy
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Terms & Conditions
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Privacy Policy
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Terms & Conditions
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8">
                        <h3 className="card-header text-xl font-bold mb-4">Others</h3>
                        <div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Admin Login
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Career
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Contact Us
                            </div>
                            <div href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Report This Website
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 text-center mb-8">
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        placeholder="Enter your email"
                        />
                        <button className="mt-4 px-6 py-2 rounded-3xl bg-black text-white font-medium uppercase">
                        Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="flex flex-wrap -mx-4 mt-2 justify-center">
                    
                    <div className="w-full sm:w-1/1 lg:w-1/3 pt-4 text-center mb-2">
                        <p>© 2023 {website.website_name}. All rights reserved.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="flex flex-wrap -mx-4 justify-center">
                    <div className="text-slate-500 w-full px-4 text-center">
                        <div className='mb-2'>
                            <a href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Privacy Policy
                            </a>
                            <a href="#" className="cursor-pointer text-slate-400 px-1 hover:text-white">
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                    <div className='px-1 text-slate-500'>Designed & Developed By Nikunj Mehta</div>
                    <div className='px-1 text-slate-500'><b>Webiby Websites | Webiby Apps</b></div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;