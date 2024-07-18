"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';

const Navbar = () => {
  // Define the possible types for scrollDirection as 'up', 'down', or null
  const [isScrolled, setIsScrolled] = useState(false);

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
    ? 'h-20 mx-16 px-8'
    : 'h-12 mx-4 px-2';

  const linkStyles = isScrolled
  ? 'space-x-2'
  : 'space-x-6';

  return (
    <>
    <div className=''>
      <Contact />
      <Hero />
    </div>
    </>
  );
};

export default Navbar;
