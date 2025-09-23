


import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="justify-between items-center absolute z-10 flex w-[1280px] max-w-full gap-[40px_100px] flex-wrap -translate-x-2/4 translate-y-[0%] bg-[rgba(255,255,255,0.15)] px-8 py-4 rounded-[30px] left-2/4 top-[60px] max-md:px-5">
      <img
        src="Vontech-Logo 1.png"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />
      <nav className="self-stretch flex min-w-60 items-center gap-9 flex-wrap my-auto max-md:max-w-full">
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-gray-200 transition-colors">
          Home
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-gray-200 transition-colors">
          About
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-gray-200 transition-colors">
          Services
        </a>
        <div className="self-stretch flex items-center gap-[5px] my-auto">
          <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-gray-200 transition-colors">
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
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-gray-200 transition-colors">
          Career
        </a>
        <a href="#" className="text-white text-xl font-medium self-stretch my-auto hover:text-gray-200 transition-colors">
          Events
        </a>
      </nav>
      <button className="justify-center items-center self-stretch flex gap-2 text-xl text-[#181818] font-semibold whitespace-nowrap bg-[#FFE21B] my-auto px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-yellow-300 transition-colors">
        Login
      </button>
    </header>
  );
};

export default Header;
