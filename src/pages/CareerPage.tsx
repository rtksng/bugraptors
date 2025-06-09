import React from 'react';
import CareerHero from '../components/ui/careerpage/CareerHero';
import NavigationBar from '../components/ui/common/NavigationBar';
import BuildingCareers from '../components/ui/careerpage/BuildingCareers';
import WhyJoinBugRaptors from '../components/ui/careerpage/WhyJoinBugRaptors';
import CareerOpportunities from '../components/ui/careerpage/CareerOpportunities';
import EmployeeTestimonials from '../components/ui/careerpage/EmployeeTestimonials';
import JobApplications from '../components/ui/careerpage/JobApplications';
import HiringProcess from '../components/ui/careerpage/HiringProcess';
import ClientsWhoTrustUs from '../components/ui/careerpage/ClientsWhoTrustUs';
import UnderstandQA from '../components/ui/careerpage/UnderstandQA';
import ContactUs from '../components/ui/common/ContactUs';
import Footer from '../components/ui/common/Footer';

const CareerPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <CareerHero />
        <BuildingCareers />
        <WhyJoinBugRaptors />
        <CareerOpportunities />
        <EmployeeTestimonials />
        <JobApplications />
        <HiringProcess />
        <ClientsWhoTrustUs />
        <UnderstandQA />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default CareerPage; 