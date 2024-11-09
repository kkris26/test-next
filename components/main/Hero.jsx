import React from 'react'
import HeroContent from "../sub/HeroContent"

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <HeroContent/>
        <video
            autoPlay
            muted
            loop
            className='z-[1] w-full h-full object-cover'>
            <source src="https://cdn.sanity.io/files/jpdj44ow/production/5eb23bcab11a647b7204e1bb65bb2a4936eaa01d.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Hero
