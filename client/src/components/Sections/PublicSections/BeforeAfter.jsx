import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BeforeAfter = ({ title, subtitle, items }) => {
  return (
    <div className="pt-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        <div className="mt-8 relative">
          <div className="sm:block md:hidden lg:hidden">
            <Slider
              dots={true}
              infinite={true}
              speed={1000}
              autoplay={true}
              autoplaySpeed={3000}
              slidesToShow={1}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="60px"
            >
              {items.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white rounded-lg shadow-xl group">
                    <div className="flex">
                        <img className="w-1/2 h-auto group-hover:rounded-xl rounded-s-xl group-hover:-ml-3 object-cover" src={item.image} alt="Avatar" />
                        <img className="w-1/2 h-auto group-hover:rounded-xl rounded-e-xl group-hover:ml-6 object-cover" src={item.image} alt="Avatar" />
                    </div>
                    <div className="bg-slate-300 rounded-b-xl mt-2 group-hover:block hidden space-y-2 py-2 text-slate-500">
                        <div>Artist : <b>{item.title}</b></div>
                        <div>{item.designation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden md:block lg:hidden">
            <Slider
              dots={true}
              infinite={true}
              speed={1000}
              autoplay={true}
              autoplaySpeed={3000}
              slidesToShow={2}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="60px"
            >
              {items.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white rounded-lg shadow-xl group">
                    <div className="flex">
                        <img className="w-1/2 h-auto group-hover:rounded-xl rounded-s-xl group-hover:-ml-3 object-cover" src={item.image} alt="Avatar" />
                        <img className="w-1/2 h-auto group-hover:rounded-xl rounded-e-xl group-hover:ml-6 object-cover" src={item.image} alt="Avatar" />
                    </div>
                    <div className="bg-slate-300 rounded-b-xl mt-2 group-hover:block hidden space-y-2 py-2 text-slate-500">
                        <div>Artist : <b>{item.title}</b></div>
                        <div>{item.designation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="hidden lg:block">
            <Slider
              dots={true}
              infinite={true}
              speed={1000}
              autoplay={true}
              autoplaySpeed={3000}
              slidesToShow={3}
              slidesToScroll={1}
              centerMode={true}
              centerPadding="60px"
            >
              {items.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white rounded-lg shadow-xl group">
                    <div className="flex">
                        <img className="w-1/2 h-auto group-hover:rounded-xl rounded-s-xl group-hover:-ml-3 object-cover" src={item.image} alt="Avatar" />
                        <img className="w-1/2 h-auto group-hover:rounded-xl rounded-e-xl group-hover:ml-6 object-cover" src={item.image} alt="Avatar" />
                    </div>
                    <div className="bg-slate-300 rounded-b-xl mt-2 group-hover:block hidden space-y-2 py-2 text-slate-500">
                        <div>Artist : <b>{item.title}</b></div>
                        <div>{item.designation}</div>
                    </div>
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

export default BeforeAfter;
