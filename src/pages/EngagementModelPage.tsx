import React from 'react';
import NavigationBar from '../components/ui/common/NavigationBar';
import EngagementModelHero from '../components/ui/engagementmodel/EngagementModelHero';
import CreateDreamTeam from '../components/ui/engagementmodel/CreateDreamTeam';
import WhatMakesUsSpecial from '../components/ui/engagementmodel/WhatMakesUsSpecial';
import ContactUs from '../components/ui/common/ContactUs';
import Footer from '../components/ui/common/Footer';

const EngagementModelPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <EngagementModelHero />
        <CreateDreamTeam />
        <WhatMakesUsSpecial />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default EngagementModelPage; 