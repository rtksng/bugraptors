import React from 'react';
import { FaUtensils, FaTruck, FaMobileAlt, FaLeaf } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const FoodBeveragesPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Food & Beverages Solutions"
          title="Serving Quality Through Technology Excellence"
          para1="Enhance customer dining experiences with comprehensive testing solutions for restaurant management systems, food delivery apps, and culinary platforms."
          para2="From order management to delivery tracking, we ensure food businesses deliver exceptional service and customer satisfaction."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaUtensils className="w-8 h-8" />,
              title: "Restaurant Management",
              description: "POS and ordering system testing"
            },
            {
              icon: <FaTruck className="w-8 h-8" />,
              title: "Delivery Platforms",
              description: "Food delivery app validation"
            },
            {
              icon: <FaMobileAlt className="w-8 h-8" />,
              title: "Mobile Ordering",
              description: "Restaurant app optimization"
            },
            {
              icon: <FaLeaf className="w-8 h-8" />,
              title: "Supply Chain",
              description: "Inventory and sourcing systems"
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
              Explore Food & Beverage Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default FoodBeveragesPage; 