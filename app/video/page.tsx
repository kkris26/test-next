import YouTubeEmbed from '@/components/main/YoutubeVideo'
import React from 'react'
import "./video.css"

function page() {
  return (
    <div>

           <video
            autoPlay
            muted
            loop
            className='w-full h-full object-cover sticky top-0'>
            <source src="https://cdn.sanity.io/files/jpdj44ow/production/5eb23bcab11a647b7204e1bb65bb2a4936eaa01d.mp4" type="video/mp4" />
        </video>
        <div className="yotube z-[4]">
          <YouTubeEmbed/>
        </div>
              </div>
  )
}

export default page