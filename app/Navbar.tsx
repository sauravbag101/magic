"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Logo from '@/public/logo-removebg-preview.png'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full  bg-slate-100  top-0 left-0 right-0  border   ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              
                {/* <h2 className="text-2xl text-cyan-600 font-bold">LOGO</h2> */}
                <Image src={Logo} alt="" width={16} height={16} className='w-6 h-6' />
              
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
              <button
               className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
               onClick={() => setNavbar(!navbar)}
               >
               {navbar ? (
                <IoMdClose className="w-8 h-8 text-black" />
                ) : (
               <LuMenu className="w-8 h-8 text-Black" />
                )}
               </button>

              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="pb-0 text-md  text-slate-400 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(false)}>
                    About
                  </Link>
                </li>
                <li className="pb-0 text-md text-center text-slate-400 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(false)}>
                    Blogs
                  </Link>
                </li>
                <li className="pb-0 text-md text-center text-slate-400 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(false)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-0 text-md text-center text-slate-400 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(false)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

