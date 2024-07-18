"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Signico from "./Signico";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const toggleTranslation = () => {
    setIsTranslated((prevState) => !prevState);
  };
  const closeMenu = () => {
    setIsTranslated(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled beyond a certain point (e.g., 50px)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define classes for the navbar depending on the scroll state
  const navStyles = isScrolled
    ? 'h-20 mx-20 '
    : 'h-12 mx-0 px-0';

  const linkStyles = isScrolled
  ? 'bg-neutral-900 px-10'
  : '';

  


  return (
    <>
      <header className="z-50">
      <motion.nav
      className={` ${navStyles} py-2 fixed top-0 w-full transition-all duration-1000`}
      initial={{ y: -50 }}
      animate={{ y: 0 }}
    >
        <nav className={`max-w-7xl z-50  transform-none fixed top-4 ${navStyles}  inset-x-0 w-[95%] lg:w-full`}>
        
          <div className="hidden lg:block w-full">
            <div className={`w-full ${linkStyles} flex relative justify-between py-3 rounded-md transition duration-200`}>
              <div >
                <Link
                  className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                  href="/"
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="white"></circle>
                    <path
                      d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                      fill="#111B21"
                    ></path>
                  </svg>
                  <span className="text-white font-bold">Last Song Only</span>
                </Link>
              </div>
                <div className={`flex items-center gap-1.5`}>
                <Link
                    className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                    href="/music"
                  >
                    Music
                  </Link>
                  <Link
                    className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                    href="/charts"
                  >
                    Charts
                  </Link>
                  <Link
                    className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                    href="/features"
                  >
                    Features
                  </Link>
                  <Link
                    className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                    href="/pricing"
                  >
                    Pricing
                  </Link>
                  <Link
                    className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                    href="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>
            <Signico />
            
              
            </div>
          </div>
          
          <div className="flex h-full w-full items-center lg:hidden ">
            <div className="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5 transition duration-200">
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
                href="/"
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white"></circle>
                  <path
                    d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                    fill="#111B21"
                  ></path>
                </svg>
                <span className="text-white font-bold">Last Song Only</span>
              </Link>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-white h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
              </svg>
            </div>
          </div>
        </nav>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
