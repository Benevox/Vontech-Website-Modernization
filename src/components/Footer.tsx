import React from 'react';
import footerImg from '@/assets/Footer_CS.png';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <img 
        src={footerImg} 
        alt="VonTech footer with company links and social media" 
        className="w-full h-auto"
      />
    </footer>
  );
};
