import React, { useState } from 'react';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const calculateTotalPrice = () => {
    // Replace this with your own calculation logic
    const pricePerUnit = 10;
    return pricePerUnit * quantity;
  };

  return (
    <div className="min-h-screen p-4 bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
            <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[70dvh] object-cover rounded-xl shadow-lg" />
            <div className="grid grid-cols-4 gap-2 mt-4">
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
            </div>
        </div>
        <div className="text-slate-700 shadow-xl relative">
            <img src="https://source.unsplash.com/random" alt="Product Image" className="rounded-xl z-0 w-full h-full inset-0 absolute object-cover opacity-30" />
            <div className='z-10 relative p-4'>
                <h1 className="text-3xl font-bold">Product Title</h1>
                <hr />
                <div className='lg:flex text-left justify-evenly'>
                    <div className="mt-2">
                        <h2 className="text-xl font-semibold">Color</h2>
                        <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="color1"
                            name="color"
                            value="color1"
                            checked={selectedColor === 'color1'}
                            onChange={() => handleColorChange('color1')}
                        />
                        <label htmlFor="color1" className="ml-2">
                            Color 1
                        </label>
                        </div>
                        <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="color2"
                            name="color"
                            value="color2"
                            checked={selectedColor === 'color2'}
                            onChange={() => handleColorChange('color2')}
                        />
                        <label htmlFor="color2" className="ml-2">
                            Color 2
                        </label>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-xl font-semibold">Size</h2>
                        <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="size1"
                            name="size"
                            value="size1"
                            checked={selectedSize === 'size1'}
                            onChange={() => handleSizeChange('size1')}
                        />
                        <label htmlFor="size1" className="ml-2">
                            Size 1
                        </label>
                        </div>
                        <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="size2"
                            name="size"
                            value="size2"
                            checked={selectedSize === 'size2'}
                            onChange={() => handleSizeChange('size2')}
                        />
                        <label htmlFor="size2" className="ml-2">
                            Size 2
                        </label>
                        </div>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-xl font-semibold">Size</h2>
                        <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="size1"
                            name="size"
                            value="size1"
                            checked={selectedSize === 'size1'}
                            onChange={() => handleSizeChange('size1')}
                        />
                        <label htmlFor="size1" className="ml-2">
                            Size 1
                        </label>
                        </div>
                        <div className="flex items-center mt-2">
                        <input
                            type="radio"
                            id="size2"
                            name="size"
                            value="size2"
                            checked={selectedSize === 'size2'}
                            onChange={() => handleSizeChange('size2')}
                        />
                        <label htmlFor="size2" className="ml-2">
                            Size 2
                        </label>
                        </div>
                    </div>
                </div>
                <div className='lg:flex text-left justify-evenly'>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Price</h2>
                        <p className="text-lg">$10.00</p>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Quantity</h2>
                        <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="border border-gray-300 px-2 py-1 rounded-lg w-24"
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Total Price</h2>
                        <p className="text-lg">${calculateTotalPrice().toFixed(2)}</p>
                    </div>
                </div>
                <div className='lg:flex text-left justify-evenly'>  
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Product Quality</h2>
                        <div className="flex items-center mt-2 text-yellow-600">
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9734;</span>
                            <span className="text-yellow-600 text-xl mx-2 font-bold">4.0</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Delivery Speed</h2>
                        <div className="flex items-center mt-2 text-yellow-600">
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9734;</span>
                            <span className="text-yellow-600 text-xl mx-2 font-bold">4.0</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Responsiveness</h2>
                        <div className="flex items-center mt-2 text-yellow-600">
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9733;</span>
                            <span className="text-2xl">&#9734;</span>
                            <span className="text-yellow-600 text-xl mx-2 font-bold">4.0</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Product Details</h2>
                    <table className="w-full mt-2">
                    <tbody>
                        <tr>
                        <td className="py-2">Material</td>
                        <td className="py-2">Cotton</td>
                        </tr>
                        <tr>
                        <td className="py-2">Size</td>
                        <td className="py-2">M</td>
                        </tr>
                        <tr>
                        <td className="py-2">Brand</td>
                        <td className="py-2">XYZ</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className='lg:flex justify-evenly'>  
                    <div className="mt-4 space-x-4">
                        <button className="px-4 py-2 hover:bg-green-600 bg-green-500 text-white rounded-xl">Order On WhatsApp</button>
                        <button className="px-4 py-2 hover:bg-blue-600 bg-blue-500 text-white rounded-xl">Add To Cart</button> 
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className="mt-8">
            <h2 className="text-xl font-semibold">Other Suggested Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
                <img src="https://source.unsplash.com/random" alt="Product Image" className="w-full h-[20dvh] object-cover rounded-xl shadow-lg" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
