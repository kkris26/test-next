import { Socials } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'  // Import Link from next/link
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <Link href="/" passHref> {/* Use Link for navigation */}
          <div className='h-auto w-auto flex flex-row items-center'>
            <Image
              src="/asset/NavLogo.png"
              alt='logo'
              width={70}
              height={70}
              className='cursor-pointer hover:animate-slowspin'
            />
            <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
              Webchain Dev
            </span>
          </div>
        </Link>
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861 bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-white'>
            <Link href="/" passHref> 
              <p className='cursor-pointer'> About Me</p> {/* Replaced a with p */}
            </Link>
            <Link href="/about" passHref>
              <p className='cursor-pointer'> Edu</p> {/* Replaced a with p */}
            </Link>
            <Link href="/contact" passHref>
              <p className='cursor-pointer'>Contact</p> {/* Replaced a with p */}
            </Link>
            <Link href="/video" passHref>
              <p className='cursor-pointer'>Video</p> {/* Replaced a with p */}
            </Link>
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          {Socials.map((social) => (
            <Image
              src={`asset/${social.src}`}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
