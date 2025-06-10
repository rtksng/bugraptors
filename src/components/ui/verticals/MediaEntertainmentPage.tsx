import React from 'react';
import { FaVideo, FaGamepad, FaMusic, FaFilm } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const MediaEntertainmentPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <div className="container mx-auto px-4 py-16">
        {/* Header Section using SectionTitle */}
        <SectionTitle
          tag="Media & Entertainment Solutions"
          title="Creating Captivating Digital Entertainment Experiences"
          para1="Deliver exceptional content experiences with comprehensive testing solutions for streaming platforms, gaming applications, and digital media systems."
          para2="From video streaming to interactive gaming, we ensure media companies provide seamless and engaging entertainment for global audiences."
        />

        {/* Key Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaVideo className="w-8 h-8" />,
              title: "Streaming Platforms",
              description: "Video streaming service testing"
            },
            {
              icon: <FaGamepad className="w-8 h-8" />,
              title: "Gaming Applications",
              description: "Mobile and console game testing"
            },
            {
              icon: <FaMusic className="w-8 h-8" />,
              title: "Music Platforms",
              description: "Audio streaming system validation"
            },
            {
              icon: <FaFilm className="w-8 h-8" />,
              title: "Content Management",
              description: "Digital content delivery systems"
            }
          ].map((service, index) => (
            <div key={index} className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-red-500/30 transition-all duration-300">
              <div className="text-red-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
          <div className="text-center">
            <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Explore Media & Entertainment Solutions
            </button>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default MediaEntertainmentPage; 