import React from 'react';

// Common UI Components
import NavigationBar from '../components/ui/common/NavigationBar';
import ContactUs from '../components/ui/common/ContactUs';
import Footer from '../components/ui/common/Footer';

// Landing Page Specific UI Components
import Hero from '../components/ui/landingPage/Hero';
import Benchmarks from '../components/ui/landingPage/Benchmarks';
import AIServices from '../components/ui/landingPage/AIServices';
import ProprietaryTools from '../components/ui/landingPage/ProprietaryTools';
import DomainsWeServe from '../components/ui/landingPage/DomainsWeServe';
import SoftwareTestingOfferings from '../components/ui/landingPage/SoftwareTestingOfferings';
import WhyChooseBugRaptors from '../components/ui/landingPage/WhyChooseBugRaptors';
import ClientTestimonials from '../components/ui/landingPage/ClientTestimonials';
import FAQs from '../components/ui/landingPage/FAQs';
import BlogsNews from '../components/ui/landingPage/BlogsNews';
import DevOpsCTA from '../components/ui/landingPage/DevOpsCTA';

const LandingPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <Benchmarks />
        <AIServices />
        <ProprietaryTools />
        <DomainsWeServe />
        <SoftwareTestingOfferings />
        <WhyChooseBugRaptors />
        <ClientTestimonials />
        <FAQs />
        <BlogsNews />
        <DevOpsCTA />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;