import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import ResultsSection from '@/components/ResultsSection';
import FinalThoughtsSection from '@/components/FinalThoughtsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="items-stretch relative flex flex-col overflow-hidden bg-[#FBFBFB]">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="px-20 max-md:px-5">
          <ChallengeSection />
          <SolutionSection />
          <ResultsSection />
          <FinalThoughtsSection />
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
