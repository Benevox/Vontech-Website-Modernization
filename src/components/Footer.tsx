import React from 'react';
import footerImage from '@/assets/footer.png';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <img 
        src={footerImage} 
        alt="Vontech footer - Company information and links" 
        className="w-full object-cover"
      />
    </footer>
  );
};
