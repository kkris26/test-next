import React from 'react';
import './gallery.css'; // Pastikan untuk mengimpor file CSS
import YouTubeEmbed from '@/components/main/Video';

function Page() {
  return (
    <div>

    <div className="background-container sticky top-0">
      <h1 className="text-center text-7xl text-white">Our Gallery</h1>
    </div>
    <YouTubeEmbed/>
    </div>
  );
}

export default Page;
