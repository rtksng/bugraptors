import React from 'react';
import { FaPlane, FaHotel, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const TravelHospitalityPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Travel & Hospitality Solutions"
          title="Creating Memorable Travel Experiences"
          para1="Enhance guest satisfaction with comprehensive testing solutions for booking platforms, hotel management systems, and travel applications."
          para2="From reservation systems to mobile travel apps, we ensure hospitality businesses deliver exceptional customer experiences."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaPlane className="w-8 h-8" />,
              title: "Booking Systems",
              description: "Travel reservation platform testing"
            },
            {
              icon: <FaHotel className="w-8 h-8" />,
              title: "Hotel Management",
              description: "Property management systems"
            },
            {
              icon: <FaMapMarkerAlt className="w-8 h-8" />,
              title: "Travel Apps",
              description: "Mobile travel companion apps"
            },
            {
              icon: <FaCalendarAlt className="w-8 h-8" />,
              title: "Event Management",
              description: "Conference and event platforms"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Travel Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default TravelHospitalityPage; 