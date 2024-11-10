"use client"; // Direktif untuk kode sisi klien

import { useEffect, useState } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Definisikan tipe properti komponen menggunakan slice type dari Prismic
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const videoUrl = (slice.primary.video_link as { url: string }).url;

  // State untuk opacity dan transform posisi
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Menambahkan event listener scroll
    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener saat komponen dibuang
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menghitung opacity dan transformasi berdasarkan scroll
  const opacity = Math.max(1 - scrollY / 500, 0); // Mengurangi opasitas saat scroll
  const translateY = scrollY * 0.3; // Menggerakkan elemen ke bawah saat scroll

  return (
    <div className="relative flex flex-col h-full w-full">
      {/* Video */}
      <video autoPlay muted loop className="z-[1] w-full h-[100vh] object-cover">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Konten yang diposisikan secara absolut */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-[2]">
        <div
          className="text-white flex flex-col gap-5 text-center w-full"
          style={{
            opacity: opacity, // Opasitas berubah saat scroll
            transform: `translateY(-50%) translateY(${translateY}px)`, // Posisi bergerak ke bawah
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out', // Efek transisi halus
          }}
        >
          {/* Heading */}
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => <h1 className="text-7xl">{children}</h1>,
            }}
          />

          {/* Body */}
          <PrismicRichText
            field={slice.primary.body}
            components={{
              paragraph: ({ children }) => <p className="w-full text-white">{children}</p>,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
