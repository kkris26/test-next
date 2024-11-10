import React from 'react';
import RotatingImage from './RotateImg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" z-[9]">
    <div className='relative bg-[#F4F4F2]'>
        <div className="h-[100vh] container m-auto py-20 flex align-center px-20">
      <div className="flex container flex-col w-[700px] justify-center">
  <h2 className="text-7xl leading-tight text-[#838B6F]">Swasti, meaning<br />
  <span className="text-[#5B604A]">
    “healing”&nbsp;
    </span>
     in Sanskrit…</h2>
  <div className="text-body mt-10 flex flex-col gap-5">

  <p className="">is a culinary and hospitality project in the heart of Ubud, Bali, striving to become a model for sustainability, nurturing local producers, and protecting our planet. Here, in a sanctuary tucked among the lush gardens and quiet neighborhoods of Ubud, Bali, you can breathe deeply, and reconnect with yourself, and with nature.
    </p>
    <p className="]">
We offer the perfect opportunity to disconnect from the breakneck pace of everyday life, to focus on your health, and enter a state of mindful wellbeing, all while leaving behind a minimal environmental footprint.</p>
  </div>
      </div>
     
      <RotatingImage/>
</div>
</div>
<div className='relative'>
<Image 
  src={"/OGImage.jpg"} 
  alt="image" 
  width={2000} 
  height={100}
/>

</div>
    </div>
  );
};

export default Hero;