import React from 'react';

const useHeroImage = (pageName, pageDescription, imageUrl) => {
    const heroStyles = {
        backgroundImage: `url('${imageUrl || 'https://source.unsplash.com/random'}')`,
    };

  return (
    <>
      <div className="bg-cover bg-center h-[40dvh] flex items-center justify-center" style={heroStyles}>
        <div className='z-1 absolute opacity-20 h-[40dvh] bg-black w-full'></div>
        <div className="z-2 text-center">
          <h1 className="text-4xl text-white font-bold mb-4">{pageName}</h1>
          <p className="text-xl text-white">{pageDescription}</p>
        </div>
      </div>
    </>
  );
};

export default useHeroImage;
