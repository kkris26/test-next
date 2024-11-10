import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="z-[1] w-full h-full object-cover"
      >
        <source
          src="https://cdn.sanity.io/files/jpdj44ow/production/5eb23bcab11a647b7204e1bb65bb2a4936eaa01d.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Heading */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2]">
        {/* <h1 className='pt-15 text-white text-1xl sm:text-5px md:text-7xl text-center'>
          A healing village hidden in paradise.
          </h1> */}
      </div>
    </div>
  );
};

export default Hero;