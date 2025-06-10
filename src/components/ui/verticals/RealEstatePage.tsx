import React from 'react';
import { FaHome, FaKey, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const RealEstatePage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Real Estate Solutions"
          title="Building Digital Foundations for Real Estate Success"
          para1="Transform property management with comprehensive testing solutions for real estate platforms, property listing systems, and management applications."
          para2="From property searches to lease management, we ensure real estate companies deliver seamless digital experiences for buyers, sellers, and renters."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaHome className="w-8 h-8" />,
              title: "Property Management",
              description: "Real estate management systems"
            },
            {
              icon: <FaKey className="w-8 h-8" />,
              title: "Rental Platforms",
              description: "Lease and rental applications"
            },
            {
              icon: <FaMapMarkerAlt className="w-8 h-8" />,
              title: "Property Listings",
              description: "MLS and listing platforms"
            },
            {
              icon: <FaChartLine className="w-8 h-8" />,
              title: "Market Analytics",
              description: "Real estate data platforms"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-emerald-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Real Estate Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default RealEstatePage; 