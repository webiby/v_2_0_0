import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';

const ProductCard = () => {
    const [quantity, setQuantity] = useState(1);
    const products = [
        {
            id: 1,
            name: 'Product Name 1',
            price: 10,
            Unit: 'gms',
            Pack: 500,
            description: 'Product Description 1',
            rating: 4.5,
            category: 'Category 1',
            subcategory: 'Subcategory 1',
            lastUpdated: '2022-01-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            id: 2,
            name: 'Product Name 2',
            price: 15,
            Unit: 'gms',
            Pack: 500,
            description: 'Product Description 2',
            rating: 4.2,
            category: 'Category 2',
            subcategory: 'Subcategory 2',
            lastUpdated: '2022-02-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            id: 3,
            name: 'Product Name 3',
            price: 10,
            Unit: 'gms',
            Pack: 500,
            description: 'Product Description 1',
            rating: 4.5,
            category: 'Category 1',
            subcategory: 'Subcategory 1',
            lastUpdated: '2022-01-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            id: 4,
            name: 'Product Name 4',
            price: 15,
            Unit: 'gms',
            Pack: 500,
            description: 'Product Description 2',
            rating: 3.2,
            category: 'Category 2',
            subcategory: 'Subcategory 2',
            lastUpdated: '2022-02-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            id: 5,
            name: 'Product Name 5',
            price: 10,
            Unit: 'gms',
            Pack: 500,
            description: 'Product Description 1',
            rating: 4.5,
            category: 'Category 1',
            subcategory: 'Subcategory 1',
            lastUpdated: '2022-01-01',
            sticker: 'New',
            offer: '50% Off',
        },
        {
            id: 6,
            name: 'Product Name 6',
            price: 15,
            Unit: 'gms',
            Pack: 500,
            description: 'Product Description 2',
            rating: 4.2,
            category: 'Category 2',
            subcategory: 'Subcategory 2',
            lastUpdated: '2022-02-01',
            sticker: null,
            offer: null,
        },
        // Add more products as needed
    ];

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const calculateUpdatedPrice = () => {
        return products[0].price * quantity; // Adjust this calculation as needed
    };

    return (
        <div className="pt-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">Product Catalogue</h2>
                    <p className="text-gray-600 text-lg">Explore our products</p>
                </div>
                <div className="mt-8 relative">
                    <div className="sm:block md:hidden lg:hidden">
                        <Slider
                            dots={true}
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
                            {products.map((item, index) => (
                                <div key={index} className="py-4 px-2">
                                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
                                        <div className='absolute z-10 mt-1 font-bold'>
                                            <div className='bg-orange-500 text-white rounded-e-full px-2 my-2'>{item.sticker}</div>
                                            <div className='bg-green-500 text-white rounded-e-full px-2 my-2'>{item.offer}</div>
                                        </div>
                                        <img
                                            className="aspect-square w-full object-cover rounded-xl"
                                            src="https://source.unsplash.com/random"
                                            alt="Product Image"
                                        />
                                        <div className="p-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <div className="">
                                                <p className="text-sm text-gray-500">
                                                    <span className="text-gray-800">{item.category} | {item.subcategory}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-4 mt-1">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-yellow-500 ${index < item.rating ? 'fill-current' : ''}`}
                                                    />
                                                ))} <span className='mx-2 font-bold text-orange-500'>{item.rating}</span>
                                            </div>
                                            <hr/><p className="text-gray-400 mt-1 line-clamp-3"><b>Description: </b>{item.description}</p><hr/>
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
                            {products.map((item, index) => (
                                <div key={index} className="py-4 px-2">
                                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
                                        <div className='absolute z-10 mt-1 font-bold'>
                                            <div className='bg-orange-500 text-white rounded-e-full px-2 my-2'>{item.sticker}</div>
                                            <div className='bg-green-500 text-white rounded-e-full px-2 my-2'>{item.offer}</div>
                                        </div>
                                        <img
                                            className="aspect-square w-full object-cover rounded-xl"
                                            src="https://source.unsplash.com/random"
                                            alt="Product Image"
                                        />
                                        <div className="p-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <div className="">
                                                <p className="text-sm text-gray-500">
                                                    <span className="text-gray-800">{item.category} | {item.subcategory}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-4 mt-1">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-yellow-500 ${index < item.rating ? 'fill-current' : ''}`}
                                                    />
                                                ))} <span className='mx-2 font-bold text-orange-500'>{item.rating}</span>
                                            </div>
                                            <hr/><p className="text-gray-400 mt-1 line-clamp-3"><b>Description: </b>{item.description}</p><hr/>
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
                            {products.map((item, index) => (
                                <div key={index} className="py-4 px-2">
                                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl">
                                        <div className='absolute z-10 mt-1 font-bold'>
                                            <div className='bg-orange-500 text-white rounded-e-full px-2 my-2'>{item.sticker}</div>
                                            <div className='bg-green-500 text-white rounded-e-full px-2 my-2'>{item.offer}</div>
                                        </div>
                                        <img
                                            className="aspect-square w-full object-cover rounded-xl"
                                            src="https://source.unsplash.com/random"
                                            alt="Product Image"
                                        />
                                        <div className="p-2">
                                            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                            <div className="">
                                                <p className="text-sm text-gray-500">
                                                    <span className="text-gray-800">{item.category} | {item.subcategory}</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-2 px-4 mt-1">
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-yellow-500 ${index < item.rating ? 'fill-current' : ''}`}
                                                    />
                                                ))} <span className='mx-2 font-bold text-orange-500'>{item.rating}</span>
                                            </div>
                                            <hr/><p className="text-gray-400 mt-1 line-clamp-3"><b>Description: </b>{item.description}</p><hr/>
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
                                                <a href="https://api.whatsapp.com/send?phone=918866783573&text=https://gujaratfood.com/Product/products/{{ $product->id }}%0D%0A*ＧＵＪＡＲＡＴ ＦＯＯＤ*%0D%0A___________________________________________________%0D%0A ગુજરાત થી તમારા ઘર આંગણે %0D%0A%0D%0A*Order via WhatsApp*%0D%0A_Request to add the products to my cart_%0D%0A%0D%0A*Product Id:* {{ $product->id }}%0D%0A*Product Name:* {{ $product->product_name }}%0D%0A*Weight:* 500gm%0D%0A*Quantity:* 2pack%0D%0A*Total Weight:* 1kg%0D%0A*Price:* {{ $product->mrp }}%0D%0A*Gross Total:* ????%0D%0A*Offers/Discounts:* ????%0D%0A*Delivery Charge:* ????%0D%0A*Net Payable Amount:* ????%0D%0A%0D%0A*My Customer Id:* 67%0D%0A*My Name:* Nikunj Mehta%0D%0A*Thank You*" target="_blank" className="no-underline">
                                                    <div className="px-2 py-1 bg-green-500 text-white rounded-lg">Order On WhatsApp</div>
                                                </a>
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

export default ProductCard;
