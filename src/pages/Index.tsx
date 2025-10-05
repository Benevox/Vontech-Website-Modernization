import React from 'react';
import Header from '@/components/navigation/Header';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import WhoWeAreSection from '@/components/sections/WhoWeAreSection';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { CoreValuesSection } from '@/components/sections/CoreValuesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';

const Index = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <MissionVisionSection />
        <CoreValuesSection />
        <WhyChooseUsSection />
        <CallToActionSection />
      </main>
  <FooterSection />
    </div>
  );
};

export default Index;
