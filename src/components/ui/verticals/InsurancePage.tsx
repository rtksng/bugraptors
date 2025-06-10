import React from 'react';
import { FaShieldAlt, FaCalculator, FaCar, FaHeartbeat } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const InsurancePage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Insurance Solutions"
          title="Securing Trust Through Insurance Technology"
          para1="Build customer confidence with comprehensive testing solutions for insurance platforms, claim management systems, and policy administration applications."
          para2="From underwriting to claims processing, we ensure insurance companies deliver reliable and efficient services to their policyholders."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaShieldAlt className="w-8 h-8" />,
              title: "Policy Management",
              description: "Insurance policy system testing"
            },
            {
              icon: <FaCalculator className="w-8 h-8" />,
              title: "Claims Processing",
              description: "Claims management validation"
            },
            {
              icon: <FaCar className="w-8 h-8" />,
              title: "Auto Insurance",
              description: "Vehicle insurance platforms"
            },
            {
              icon: <FaHeartbeat className="w-8 h-8" />,
              title: "Health Insurance",
              description: "Medical insurance systems"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="text-indigo-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Insurance Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default InsurancePage; 