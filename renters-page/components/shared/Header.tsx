
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className={`container mx-auto px-6 py-4 flex justify-between items-center border-b transition-colors duration-300 ${scrolled ? 'border-white/10' : 'border-transparent'}`}>
        <div className="text-2xl font-bold text-white tracking-wider">
          سكاي كورت مول
        </div>
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse text-white">
          <a href="#" className="hover:text-gray-300 transition-colors">الرئيسية</a>
          <a href="#" className="hover:text-gray-300 transition-colors">عنا</a>
          <a href="#" className="font-bold border-b-2 border-highlight text-highlight">تأجير</a>
          <a href="#" className="hover:text-gray-300 transition-colors">تواصل معنا</a>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
}
