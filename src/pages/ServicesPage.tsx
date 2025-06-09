import React from 'react';
import NavigationBar from '../components/ui/common/NavigationBar';
import Footer from '../components/ui/common/Footer';
import ServicesHero from '../components/ui/servicepage/ServicesHero';
import ServicesGrid from '../components/ui/servicepage/ServicesGrid';
import TestingProcess from '../components/ui/servicepage/TestingProcess';
import ServicesStats from '../components/ui/servicepage/ServicesStats';
import IndustriesWeServe from '../components/ui/servicepage/IndustriesWeServe';
import WhyChooseUsServices from '../components/ui/servicepage/WhyChooseUsServices';
import ServicesCTA from '../components/ui/servicepage/ServicesCTA';

const ServicesPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <ServicesHero />
        <ServicesGrid />
        <TestingProcess />
        <ServicesStats />
        <IndustriesWeServe />
        <WhyChooseUsServices />
        <ServicesCTA />
        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage; 