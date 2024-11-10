"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

const RotatingImage = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust rotation factor as desired
      const rotationFactor = window.scrollY / 10;
      setRotation(rotationFactor);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute right-[-350px] top-1/2 transform -translate-y-1/2 opacity-10">
      <Image
        src="/mandala.png"
        alt="Mandala"
        width={700}
        height={100}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
};

export default RotatingImage;
