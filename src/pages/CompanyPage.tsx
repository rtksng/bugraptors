import React from 'react';
import NavigationBar from '../components/ui/common/NavigationBar';
import Footer from '../components/ui/common/Footer';
import CompanyHero from '../components/ui/companypage/CompanyHero';
import AboutUs from '../components/ui/companypage/AboutUs';
import CompanyTimeline from '../components/ui/companypage/CompanyTimeline';
import CompanyCulture from '../components/ui/companypage/CompanyCulture';
import ClientPartnerships from '../components/ui/companypage/ClientPartnerships';
import TeamSection from '../components/ui/companypage/TeamSection';
import CompanyCTA from '../components/ui/companypage/CompanyCTA';

const CompanyPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <CompanyHero />
        <AboutUs />
        <CompanyTimeline />
        <CompanyCulture />
        <ClientPartnerships />
        <TeamSection />
        <CompanyCTA />
        <Footer />
      </main>
    </div>
  );
};

export default CompanyPage; 