import React from 'react';
import Hero from '../components/landingPage/Hero';
import NavigationBar from '../components/landingPage/NavigationBar';
import Benchmarks from '../components/landingPage/Benchmarks';
import AIServices from '../components/landingPage/AIServices';
import ProprietaryTools from '../components/landingPage/ProprietaryTools';
import DomainsWeServe from '../components/landingPage/DomainsWeServe';
import SoftwareTestingOfferings from '../components/landingPage/SoftwareTestingOfferings';
import WhyChooseBugRaptors from '../components/landingPage/WhyChooseBugRaptors';
import ClientTestimonials from '../components/landingPage/ClientTestimonials';
import FAQs from '../components/landingPage/FAQs';
import BlogsNews from '../components/landingPage/BlogsNews';
import DevOpsCTA from '../components/landingPage/DevOpsCTA';
import ContactUs from '../components/landingPage/ContactUs';
import Footer from '../components/landingPage/Footer';

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