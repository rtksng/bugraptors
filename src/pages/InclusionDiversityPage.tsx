import React from 'react';
import NavigationBar from '../components/ui/common/NavigationBar';
import Footer from '../components/ui/common/Footer';
import ContactUs from '../components/ui/common/ContactUs';
import DEIHero from '../components/ui/inclusionDiversity/DEIHero';
import BridgingDifferences from '../components/ui/inclusionDiversity/BridgingDifferences';
import WelcomingIdeas from '../components/ui/inclusionDiversity/WelcomingIdeas';
import WomenAtBugRaptors from '../components/ui/inclusionDiversity/WomenAtBugRaptors';
import CSRLens from '../components/ui/inclusionDiversity/CSRLens';
import CSRTestimonial from '../components/ui/inclusionDiversity/CSRTestimonial';
import CareerServicesCTA from '../components/ui/inclusionDiversity/CareerServicesCTA';
import PugmarksSlider from '../components/ui/inclusionDiversity/PugmarksSlider';
import BlogsSection from '../components/ui/inclusionDiversity/BlogsSection';
import LatestNewsSection from '../components/ui/inclusionDiversity/LatestNewsSection';
import GlobalOffices from '../components/ui/lifeatbugraptors/GlobalOffices';

const InclusionDiversityPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <DEIHero />
        <BridgingDifferences />
        <WelcomingIdeas />
        <WomenAtBugRaptors />
        <CSRLens />
        <CSRTestimonial />
        <CareerServicesCTA />
        <PugmarksSlider />
        <BlogsSection />
        <LatestNewsSection />
        <GlobalOffices />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default InclusionDiversityPage; 