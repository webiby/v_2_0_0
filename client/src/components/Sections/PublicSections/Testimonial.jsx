import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ title, subtitle, items }) => {
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
                  <div className="bg-white rounded-lg shadow-lg group">
                    <div className="max-w-sm mx-auto bg-slate-50 hover:bg-blue-500 text-slate-500 hover:text-slate-50 rounded-lg overflow-hidden shadow-lg">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img className="group-hover:scale-125 group-hover:ring-4 group-hover:ring-blue-700 w-20 h-20 rounded-full mr-4 group-hover:mr-6 object-cover" src={item.image} alt="Avatar" />
                                <div className="text-md font-medium">{item.title}</div>
                            </div>
                            <div className="text-sm mb-4 text-left">{item.designation}</div>
                            <div className="flex items-center mb-4">
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-slate-300" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                            </div>
                            <p className="text-base line-clamp-1 group-hover:line-clamp-none">{item.description}</p>
                        </div>
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
                  <div className="bg-white rounded-lg shadow-lg group">
                    <div className="max-w-sm mx-auto bg-slate-50 hover:bg-blue-500 text-slate-500 hover:text-slate-50 rounded-lg overflow-hidden shadow-lg">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img className="group-hover:scale-125 group-hover:ring-4 group-hover:ring-blue-700 w-20 h-20 rounded-full mr-4 group-hover:mr-6 object-cover" src={item.image} alt="Avatar" />
                                <div className="text-md font-bold">{item.title}</div>
                            </div>
                            <div className="text-sm mb-4 text-left">{item.designation}</div>
                            <div className="flex items-center mb-4">
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-slate-300" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                            </div>
                            <p className="text-base line-clamp-1 group-hover:line-clamp-none">{item.description}</p>
                        </div>
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
                  <div className="bg-white rounded-lg shadow-lg group">
                    <div className="max-w-sm mx-auto bg-slate-50 hover:bg-blue-500 text-slate-500 hover:text-slate-50 rounded-lg overflow-hidden shadow-lg">
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <img className="group-hover:scale-125 group-hover:ring-4 group-hover:ring-blue-700 w-20 h-20 rounded-full mr-4 group-hover:mr-6 object-cover" src={item.image} alt="Avatar" />
                                <div className="text-lg font-bold">{item.title}</div>
                            </div>
                            <div className="text-sm mb-4 text-left">{item.designation}</div>
                            <div className="flex items-center mb-4">
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <svg className="h-4 w-4 fill-current text-slate-300" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.18L22 9.27L17 13.88L18.18 20L12 17.77L5.82 20L7 13.88L2 9.27L8.91 8.18L12 2Z" />
                                </svg>
                                <span className="px-2 text-yellow-500 opacity-75 font-extrabold text-sm">4.5</span>
                            </div>
                            <p className="text-base line-clamp-1 group-hover:line-clamp-none">{item.description}</p>
                        </div>
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

export default Testimonial;
