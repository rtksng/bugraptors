import React from 'react';
import { FaUniversity, FaShieldAlt, FaUsers, FaFileAlt } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const GovernmentPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Government Solutions"
          title="Serving Citizens Through Secure Government Technology"
          para1="Enable efficient public services with comprehensive testing solutions for government platforms, citizen service portals, and public administration systems."
          para2="From digital identity to e-governance, we ensure government agencies deliver secure, accessible, and reliable digital services to citizens."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaUniversity className="w-8 h-8" />,
              title: "E-Government Platforms",
              description: "Digital government service testing"
            },
            {
              icon: <FaShieldAlt className="w-8 h-8" />,
              title: "Security & Compliance",
              description: "Government security standards"
            },
            {
              icon: <FaUsers className="w-8 h-8" />,
              title: "Citizen Services",
              description: "Public service portal testing"
            },
            {
              icon: <FaFileAlt className="w-8 h-8" />,
              title: "Document Management",
              description: "Government records systems"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-slate-500/30 transition-all duration-300">
              <div className="text-slate-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Government Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default GovernmentPage; 