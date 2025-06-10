import React from 'react';
import NavigationBar from '../components/ui/common/NavigationBar';
import Footer from '../components/ui/common/Footer';
import LifeHero from '../components/ui/lifeatbugraptors/LifeHero';
import GrowingSection from '../components/ui/lifeatbugraptors/GrowingSection';
import CEOMessage from '../components/ui/lifeatbugraptors/CEOMessage';
import WhatMakesUsUnique from '../components/ui/lifeatbugraptors/WhatMakesUsUnique';
import CoreValues from '../components/ui/lifeatbugraptors/CoreValues';
import OurRaptors from '../components/ui/lifeatbugraptors/OurRaptors';
import BrightFutureBanner from '../components/ui/lifeatbugraptors/BrightFutureBanner';
import CSRInitiatives from '../components/ui/lifeatbugraptors/CSRInitiatives';
import CSRGrid from '../components/ui/lifeatbugraptors/CSRGrid';
import EventsSection from '../components/ui/lifeatbugraptors/EventsSection';
import SocialGallery from '../components/ui/lifeatbugraptors/SocialGallery';
import GlobalOffices from '../components/ui/lifeatbugraptors/GlobalOffices';

const LifeAtBugRaptorsPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <LifeHero />
        <GrowingSection />
        <CEOMessage />
        <WhatMakesUsUnique />
        <CoreValues />
        <OurRaptors />
        <BrightFutureBanner />
        <CSRInitiatives />
        <CSRGrid />
        <EventsSection />
        <SocialGallery />
        <GlobalOffices />
        <Footer />
      </main>
    </div>
  );
};

export default LifeAtBugRaptorsPage; 