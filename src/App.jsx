import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] font-['Inter',_ui-sans-serif,_system-ui]">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FooterCTA />
    </div>
  );
}

export default App;
