import React from 'react';
import headerImage from '@/assets/header.png';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#FBFBFB] pt-6 px-20 max-md:px-5">
      <img 
        src={headerImage} 
        alt="Vontech navigation header" 
        className="w-full object-contain"
      />
    </header>
  );
};
