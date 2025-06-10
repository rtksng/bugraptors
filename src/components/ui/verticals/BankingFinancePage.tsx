import React from 'react';
import { FaUniversity, FaShieldAlt, FaCreditCard, FaChartBar } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const BankingFinancePage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Banking & Finance Solutions"
          title="Securing Financial Excellence Through Testing"
          para1="Ensure regulatory compliance and customer trust with comprehensive testing solutions for banking applications, payment systems, and financial platforms."
          para2="From transaction security to real-time processing, we help financial institutions deliver reliable and secure digital services."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaUniversity className="w-8 h-8" />,
              title: "Core Banking Testing",
              description: "Banking system validation"
            },
            {
              icon: <FaShieldAlt className="w-8 h-8" />,
              title: "Security Testing",
              description: "Financial data protection"
            },
            {
              icon: <FaCreditCard className="w-8 h-8" />,
              title: "Payment Gateway",
              description: "Transaction processing validation"
            },
            {
              icon: <FaChartBar className="w-8 h-8" />,
              title: "Risk Management",
              description: "Compliance and analytics"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-green-500/30 transition-all duration-300">
              <div className="text-green-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Banking Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default BankingFinancePage; 