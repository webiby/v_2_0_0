import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';

const ServiceCard = () => {
    const [quantity, setQuantity] = useState(1);
    const services = [
        {
            name: 'Service Name 1',
            price: 10,
            Unit: 'gms',
            Pack: 500,
            description: 'Service Description 1',
            rating: 4.5,
            category: 'Category 1',
            subcategory: 'Subcategory 1',
            lastUpdated: '2022-01-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            name: 'Service Name 2',
            price: 15,
            Unit: 'gms',
            Pack: 500,
            description: 'Service Description 2',
            rating: 4.2,
            category: 'Category 2',
            subcategory: 'Subcategory 2',
            lastUpdated: '2022-02-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            name: 'Service Name 3',
            price: 10,
            Unit: 'gms',
            Pack: 500,
            description: 'Service Description 1',
            rating: 4.5,
            category: 'Category 1',
            subcategory: 'Subcategory 1',
            lastUpdated: '2022-01-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            name: 'Service Name 4',
            price: 15,
            Unit: 'gms',
            Pack: 500,
            description: 'Service Description 2',
            rating: 3.2,
            category: 'Category 2',
            subcategory: 'Subcategory 2',
            lastUpdated: '2022-02-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            name: 'Service Name 5',
            price: 10,
            Unit: 'gms',
            Pack: 500,
            description: 'Service Description 1',
            rating: 4.5,
            category: 'Category 1',
            subcategory: 'Subcategory 1',
            lastUpdated: '2022-01-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            name: 'Service Name 6',
            price: 15,
            Unit: 'gms',
            Pack: 500,
            description: 'Service Description 2',
            rating: 4.2,
            category: 'Category 2',
            subcategory: 'Subcategory 2',
            lastUpdated: '2022-02-01',
            sticker: 'New',
            offer: '50% Off',
        },
        // Add more services as needed
    ];

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const calculateUpdatedPrice = () => {
        return services[0].price * quantity; // Adjust this calculation as needed
    };

    return (
        <div className="pt-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">Service Catalogue</h2>
                    <p className="text-gray-600 text-lg">Explore our services</p>
                </div>
                <div className="mt-8 relative">
                    <div className="sm:block md:hidden lg:hidden">
                        <Slider
                            dots={true}
                            arrows={true}
                            swipeToSlide={true}
                            infinite={true}
                            speed={1000}
                            autoplay={true}
                            autoplaySpeed={3000}
                            slidesToShow={1}
                            slidesToScroll={1}
                            centerMode={true}
                            centerPadding="30px"
                        >
                            {services.map((item, index) => (
                                <div key={index} className="py-4 px-2">
                                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
                                        <div className='absolute z-10 mt-1 font-bold'>
                                            <div className='bg-orange-500 text-white rounded-e-full px-2 my-2'>{item.sticker}</div>
                                            <div className='bg-green-500 text-white rounded-e-full px-2 my-2'>{item.offer}</div>
                                        </div>
                                        <img
                                            className="aspect-square w-full object-cover rounded-xl"
                                            src="https://source.unsplash.com/random"
                                            alt="Service Image"
                                        />
                                        <div className="p-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <div className="">
                                                <p className="text-sm text-gray-500">
                                                    <span className="text-gray-800">{item.category} | {item.subcategory}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-4 mt-2">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-yellow-500 ${index < item.rating ? 'fill-current' : ''}`}
                                                    />
                                                ))} <span className='mx-2'>{item.rating}</span>
                                            </div>
                                            <hr/><p className="text-gray-400 mt-2 line-clamp-3">Description:<br/>{item.description}</p><hr/>
                                            <p className="text-gray-600">₹{item.price}/- @ {item.Pack} {item.Unit}</p>
                                            <div className="flex items-center space-x-2 justify-evenly">
                                                Quantity
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                    className="w-20 border border-gray-300 p-2 rounded-lg"
                                                    min="1"
                                                />
                                                Total: ₹{calculateUpdatedPrice()}/-
                                            </div>
                                            <div className="flex justify-evenly space-x-2 mt-4">
                                                <button className="px-2 py-1 bg-green-500 text-white rounded-lg">Order On WhatsApp</button>
                                                <button className="px-2 py-1 bg-blue-500 text-white rounded-lg">Add To Cart</button>
                                            </div>
                                        </div>
                                        <p className="bg-slate-200 rounded-lg text-sm text-slate-400">
                                            Last Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="hidden md:block lg:hidden">
                        <Slider
                            dots={true}
                            arrows={true}
                            swipeToSlide={true}
                            infinite={true}
                            speed={1000}
                            autoplay={true}
                            autoplaySpeed={3000}
                            slidesToShow={3}
                            slidesToScroll={1}
                            centerMode={true}
                            centerPadding="30px"
                        >
                            {services.map((item, index) => (
                                <div key={index} className="py-4 px-2">
                                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
                                        <div className='absolute z-10 mt-1 font-bold'>
                                            <div className='bg-orange-500 text-white rounded-e-full px-2 my-2'>{item.sticker}</div>
                                            <div className='bg-green-500 text-white rounded-e-full px-2 my-2'>{item.offer}</div>
                                        </div>
                                        <img
                                            className="aspect-square w-full object-cover rounded-xl"
                                            src="https://source.unsplash.com/random"
                                            alt="Service Image"
                                        />
                                        <div className="p-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <div className="">
                                                <p className="text-sm text-gray-500">
                                                    <span className="text-gray-800">{item.category} | {item.subcategory}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-4 mt-2">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-yellow-500 ${index < item.rating ? 'fill-current' : ''}`}
                                                    />
                                                ))} <span>{item.rating}</span>
                                            </div>
                                            <hr/><p className="text-gray-400 mt-2 line-clamp-3">Description:<br/>{item.description}</p><hr/>
                                            <p className="text-gray-600">₹{item.price}/- @ {item.Pack} {item.Unit}</p>
                                            <div className="flex items-center space-x-2 justify-evenly">
                                                Quantity
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                    className="w-20 border border-gray-300 p-2 rounded-lg"
                                                    min="1"
                                                />
                                                Total: ₹{calculateUpdatedPrice()}/-
                                            </div>
                                            <div className="flex justify-evenly space-x-2 mt-4">
                                                <button className="px-2 py-1 bg-green-500 text-white rounded-lg">Order On WhatsApp</button>
                                                <button className="px-2 py-1 bg-blue-500 text-white rounded-lg">Add To Cart</button>
                                            </div>
                                        </div>
                                        <p className="bg-slate-200 rounded-lg text-sm text-slate-400">
                                            Last Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="hidden lg:block">
                        <Slider
                            dots={true}
                            arrows={true}
                            swipeToSlide={true}
                            infinite={true}
                            speed={1000}
                            autoplay={true}
                            autoplaySpeed={3000}
                            slidesToShow={4}
                            slidesToScroll={1}
                            centerMode={true}
                            centerPadding="30px"
                        >
                            {services.map((item, index) => (
                                <div key={index} className="py-4 px-2">
                                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
                                        <div className='absolute z-10 mt-1 font-bold'>
                                            <div className='bg-orange-500 text-white rounded-e-full px-2 my-2'>{item.sticker}</div>
                                            <div className='bg-green-500 text-white rounded-e-full px-2 my-2'>{item.offer}</div>
                                        </div>
                                        <img
                                            className="aspect-square w-full object-cover rounded-xl"
                                            src="https://source.unsplash.com/random"
                                            alt="Service Image"
                                        />
                                        <div className="p-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <div className="">
                                                <p className="text-sm text-gray-500">
                                                    <span className="text-gray-800">{item.category} | {item.subcategory}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-4 mt-2">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-yellow-500 ${index < item.rating ? 'fill-current' : ''}`}
                                                    />
                                                ))} <span>{item.rating}</span>
                                            </div>
                                            <hr/><p className="text-gray-400 mt-2 line-clamp-3">Description:<br/>{item.description}</p><hr/>
                                            <p className="text-gray-600">₹{item.price}/- @ {item.Pack} {item.Unit}</p>
                                            <div className="flex items-center space-x-2 justify-evenly">
                                                Quantity
                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                    className="w-20 border border-gray-300 p-2 rounded-lg"
                                                    min="1"
                                                />
                                                Total: ₹{calculateUpdatedPrice()}/-
                                            </div>
                                            <div className="flex justify-evenly space-x-2 mt-4">
                                                <button className="px-2 py-1 bg-green-500 text-white rounded-lg">Order On WhatsApp</button>
                                                <button className="px-2 py-1 bg-blue-500 text-white rounded-lg">Add To Cart</button>
                                            </div>
                                        </div>
                                        <p className="bg-slate-200 rounded-lg text-sm text-slate-400">
                                            Last Updated: {new Date(item.lastUpdated).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
