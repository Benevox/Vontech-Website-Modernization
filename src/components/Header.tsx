import React from 'react';
import headerImg from '@/assets/header_img.png';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 max-md:pt-6 max-sm:pt-4">
      <img 
        src={headerImg} 
        alt="VonTech navigation header" 
        className="w-full h-auto"
      />
    </header>
  );
};
