import React from 'react';
import { FaArrowRight, FaPhone } from 'react-icons/fa';

const ServicesCTA: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-[120px] "></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[120px]  delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <span className="text-white">Ready to Transform Your</span>
            <span className="block custom-text-gradient">Software Quality?</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
            Let's discuss your testing requirements and create a customized solution that ensures your software 
            meets the highest quality standards. Get started today with a free consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="group w-full sm:w-auto px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <span className="flex items-center justify-center">
                Start Your Project
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
              <span className="flex items-center justify-center">
                <FaPhone className="mr-2" />
                Schedule a Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA; 