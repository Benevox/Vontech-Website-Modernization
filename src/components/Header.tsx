import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[rgba(8,8,8,0.9)] absolute z-10 flex w-[1280px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap -translate-x-2/4 translate-y-[0%] px-8 py-4 rounded-[30px] left-2/4 top-[60px] max-md:top-[20px] max-md:px-5">
      <img
        src="vontech.png"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />
      
      {/* Desktop Navigation */}
      <nav className="self-stretch hidden lg:flex min-w-60 items-center gap-9 flex-wrap my-auto">
        <a href="#home" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Home
        </a>
        <a href="#about" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          About
        </a>
        <a href="#services" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Services
        </a>
        <div className="self-stretch flex items-center gap-[5px] my-auto">
          <a href="#resources" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <div className="self-stretch flex flex-col overflow-hidden items-center justify-center w-[26px] my-auto pt-1">
            <img
              src="drop down.svg"
              alt="Dropdown arrow"
              className="aspect-[1] object-contain w-6"
            />
          </div>
        </div>
        <a href="#career" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Career
        </a>
        <a href="#events" className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors">
          Events
        </a>
      </nav>

      {/* Desktop Login Button */}
      <button className="hidden lg:flex justify-center items-center self-stretch gap-2 text-xl text-[#181818] font-semibold whitespace-nowrap bg-[#FFE21B] my-auto px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
        Login
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgba(8,8,8,0.95)] mt-4 rounded-[20px] mx-4 p-6 flex flex-col gap-4">
          <a href="#home" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">
            About
          </a>
          <a href="#services" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">
            Services
          </a>
          <a href="#resources" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">
            Resources
          </a>
          <a href="#career" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">
            Career
          </a>
          <a href="#events" className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors">
            Events
          </a>
          <button className="justify-center items-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors mt-2">
            Login
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
