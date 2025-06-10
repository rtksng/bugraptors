import React from 'react';
import { FaPills, FaFlask, FaMicroscope, FaShieldAlt } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const PharmaPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Pharmaceutical Solutions"
          title="Advancing Healthcare Through Pharmaceutical Excellence"
          para1="Ensure drug safety and regulatory compliance with comprehensive testing solutions for pharmaceutical systems, clinical trial platforms, and research applications."
          para2="From drug discovery to patient safety, we help pharmaceutical companies deliver life-saving treatments with confidence and regulatory compliance."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaPills className="w-8 h-8" />,
              title: "Drug Development",
              description: "Clinical research platform testing"
            },
            {
              icon: <FaFlask className="w-8 h-8" />,
              title: "Laboratory Systems",
              description: "LIMS and research tool validation"
            },
            {
              icon: <FaMicroscope className="w-8 h-8" />,
              title: "Clinical Trials",
              description: "Trial management system testing"
            },
            {
              icon: <FaShieldAlt className="w-8 h-8" />,
              title: "Regulatory Compliance",
              description: "FDA and GMP compliance testing"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Pharmaceutical Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default PharmaPage; 