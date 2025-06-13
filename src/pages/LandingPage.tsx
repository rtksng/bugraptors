import React from 'react';
import Hero from '../components/ui/landingPage/Hero';
import NavigationBar from '../components/ui/common/NavigationBar';
import Benchmarks from '../components/ui/landingPage/Benchmarks';
import AIServices from '../components/ui/landingPage/IndustryExpertise';
import ProprietaryTools from '../components/ui/landingPage/ProprietaryTools';
import DomainsWeServe from '../components/ui/landingPage/DomainsWeServe';
import SoftwareTestingOfferings from '../components/ui/landingPage/OurServices';
import WhyChooseBugRaptors from '../components/ui/landingPage/WhyChooseUs';
import ClientTestimonials from '../components/ui/landingPage/ClientTestimonials';
import FAQs from '../components/ui/landingPage/FAQs';
import BlogsNews from '../components/ui/landingPage/BlogsNews';
import DevOpsCTA from '../components/ui/landingPage/DevOpsExcellence';
import ContactUs from '../components/ui/common/ContactUs';
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