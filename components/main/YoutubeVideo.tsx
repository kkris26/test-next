import React from 'react';

const YouTubeEmbed = () => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/pqkVOxt7Tk4?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=pqkVOxt7Tk4&disablekb=1&fs=0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* Konten lain seperti teks atau elemen di atas video */}
      <div className="content">
        <h1 className="text-white text-5xl text-center">
          Discover cozy elegance, where tranquility meets Bali’s serene beauty.
        </h1>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
