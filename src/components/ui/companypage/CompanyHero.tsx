import React from 'react';
import { FaArrowRight, FaBuilding } from 'react-icons/fa';
import StarDotsBlink from '../common/StarDotsBlink';

const CompanyHero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-[120px] "></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[120px]  delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
            <FaBuilding className="text-purple-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">About BugRaptors</span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block text-white mb-2">Pioneering</span>
              <span className="block custom-text-gradient">Quality Assurance</span>
              <span className="block text-white">Since 2015</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
              We are a leading quality assurance company dedicated to delivering exceptional testing solutions. 
              Our expert team ensures your software meets the highest standards of quality, security, and performance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="group w-full sm:w-auto px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center justify-center">
                Our Story
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
      <StarDotsBlink />
    </section>
  );
};

export default CompanyHero; 