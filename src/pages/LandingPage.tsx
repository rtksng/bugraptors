import React from 'react';
import Hero from '../components/ui/landingpage/Hero';
import NavigationBar from '../components/ui/common/NavigationBar';
import Benchmarks from '../components/ui/landingpage/Benchmarks';
import AIServices from '../components/ui/landingpage/AIServices';
import ProprietaryTools from '../components/ui/landingpage/ProprietaryTools';
import DomainsWeServe from '../components/ui/landingpage/DomainsWeServe';
import SoftwareTestingOfferings from '../components/ui/landingpage/SoftwareTestingOfferings';
import WhyChooseBugRaptors from '../components/ui/landingpage/WhyChooseBugRaptors';
import ClientTestimonials from '../components/ui/landingpage/ClientTestimonials';
import FAQs from '../components/ui/landingpage/FAQs';
import BlogsNews from '../components/ui/landingpage/BlogsNews';
import DevOpsCTA from '../components/ui/landingpage/DevOpsCTA';
import ContactUs from '../components/ui/landingpage/ContactUs';
import Footer from '../components/ui/common/Footer';

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