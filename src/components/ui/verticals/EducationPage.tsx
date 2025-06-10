import React from 'react';
import { FaGraduationCap, FaBookOpen, FaChalkboardTeacher, FaLaptop } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const EducationPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Education Solutions"
          title="Empowering Learning Through Quality Technology"
          para1="Transform educational experiences with comprehensive testing solutions for e-learning platforms, student management systems, and educational technology."
          para2="From online classrooms to assessment tools, we ensure educational institutions deliver reliable and engaging digital learning solutions."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaBookOpen className="w-8 h-8" />,
              title: "E-Learning Platforms",
              description: "Online learning system testing"
            },
            {
              icon: <FaGraduationCap className="w-8 h-8" />,
              title: "Student Management",
              description: "Academic system validation"
            },
            {
              icon: <FaChalkboardTeacher className="w-8 h-8" />,
              title: "Virtual Classrooms",
              description: "Remote learning solutions"
            },
            {
              icon: <FaLaptop className="w-8 h-8" />,
              title: "Educational Apps",
              description: "Mobile learning platforms"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Education Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default EducationPage; 