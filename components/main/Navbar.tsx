"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import "./navbar.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
  { path: "/video", label: "Video" },
];

const Navbar = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1,
        clipPath: "circle(141.4% at 100% 0)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, []);

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  return (
    <div className='menu-container' ref={container}>
      <div className='menu-bar'>
        <div className="book-now">
          <a href="https://umasapna.reserveonline.id/book/136" target="_blank" rel="noopener noreferrer">BOOK NOW</a>
        </div>

        <div className="logo-image">
          <Link href="/">
            <Image
              src="/logo-test.svg"
              alt="Logo"
              width={70}
              height={30}
            />
          </Link>
        </div>

        <div className="menu-open" onClick={togglemenu}>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className='menu-overlay'>
        <div className="menu-copy">
          <div className="menu-image">
          </div>
          <div className="menu-links">
            {navLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={togglemenu}>
                  <Link href={link.path} className='menu-link'>
                    {link.label} &#8599;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-info w-full">
          <div className="menu-info-row">
            <a href="">X &#8599;</a>
            <a href="">Instagram &#8599;</a>
            <a href="">Linkedin &#8599;</a>
            <a href="">Youtube &#8599;</a>
            <a href="">Facebook &#8599;</a>
          </div>
          <div className="menu-info-row">
            <p>info@krisnu.com</p>
            <p>2344 555 555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
