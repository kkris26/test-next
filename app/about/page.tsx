import React from 'react';
import './about.css'; // Pastikan untuk mengimpor file CSS
import YouTubeEmbed from '@/components/main/Video';

function Page() {
  return (
    <div>

    <div className="background-container sticky top-0">
      <h1 className="text-center text-7xl text-white">About Us</h1>
    </div>
        <YouTubeEmbed/>
    </div>
  );
}

export default Page;
