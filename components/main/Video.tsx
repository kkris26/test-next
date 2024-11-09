import React from 'react';

const Video = () => {
  return (
    <div className="video-container">
           <video
            autoPlay
            muted
            loop
            className='w-full h-full object-cover sticky top-0'>
            <source src="https://cdn.sanity.io/files/jpdj44ow/production/5eb23bcab11a647b7204e1bb65bb2a4936eaa01d.mp4" type="video/mp4" />
        </video>
      <div className="content">
        <h1 className="text-white text-5xl text-center">
          Discover cozy elegance, where tranquility meets Bali’s serene beauty.
        </h1>
      </div>
    </div>
  );
};

export default Video;
