import React, { useState } from 'react';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      imageUrl: 'https://source.unsplash.com/random',
      text: 'Slide 1',
      buttonText: 'Button 1',
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      text: 'Slide 2',
      buttonText: 'Button 2',
    },
    {
      imageUrl: 'https://source.unsplash.com/random',
      text: 'Slide 3',
      buttonText: 'Button 3',
    },
  ];

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="relative h-[70dvh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">{slide.text}</h1>
            <button className="px-6 py-3 bg-white text-black font-medium rounded-full">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full bg-white mx-1 cursor-pointer ${
              index === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 ml-4 bg-slate-200 opacity-20 hover:opacity-100 hover:bg-slate-300 hover:text-slate-700 font-medium px-4 py-2 rounded-full"
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 mr-4 bg-slate-200 opacity-20 hover:opacity-100 hover:bg-slate-300 hover:text-slate-700 font-medium px-4 py-2 rounded-full"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
