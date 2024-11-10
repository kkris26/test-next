import YouTubeEmbed from '@/components/main/YoutubeEmbed'
import React from 'react'
function page() {
  return (
    <div>

           <video
            autoPlay
            muted
            loop
            className='w-full h-[100vh] object-cover sticky top-0'>
            <source src="https://cdn.sanity.io/files/jpdj44ow/production/5eb23bcab11a647b7204e1bb65bb2a4936eaa01d.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute text-7xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[2] text-white flex flex-col gap-5 text-center w-[90%]">Heading Video</h1>
        <YouTubeEmbed/>
              </div>
  )
}

export default page