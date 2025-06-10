import React from 'react';
import { FaPlay, FaCog, FaRocket, FaLightbulb } from 'react-icons/fa';

const WhatMakesUsSpecial: React.FC = () => {
  const features = [
    {
      icon: <FaPlay className="w-6 h-6" />,
      title: 'Pure-Play Testing',
      description: 'Dedicated to quality, BugRaptors brings you the legacy of Seasia Group, a CMMI Level 5 Certified brand',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCog className="w-6 h-6" />,
      title: 'Precision At Its Best',
      description: 'From the right tools to dedicated frameworks, we help you reinforce your development lifecycle',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Automation Redefined!',
      description: 'Get all the expertise you need to optimize outcomes, no matter where you are located on globe',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: 'Constantly Innovating',
      description: 'Align with true digital transformation with the best of security, performance, and functionality',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Client logos data
  const clientLogos = [
    { name: 'zleLEAD', image: '/api/placeholder/120/60' },
    { name: 'allego', image: '/api/placeholder/120/60' },
    { name: 'BEDROCK', image: '/api/placeholder/120/60' },
    { name: 'cogniteq', image: '/api/placeholder/120/60' },
    { name: 'DormPress', image: '/api/placeholder/120/60' },
    { name: 'geotime', image: '/api/placeholder/120/60' },
    { name: 'Arabic Text', image: '/api/placeholder/120/60' },
    { name: 'SimTutor', image: '/api/placeholder/120/60' },
    { name: 'Logi Analytics', image: '/api/placeholder/120/60' },
    { name: 'multiplica', image: '/api/placeholder/120/60' },
    { name: 'MEDIGENIC', image: '/api/placeholder/120/60' },
    { name: 'JumlaPay', image: '/api/placeholder/120/60' },
    { name: 'Dicomo', image: '/api/placeholder/120/60' },
    { name: 'GSC', image: '/api/placeholder/120/60' },
    { name: 'KEY WARE', image: '/api/placeholder/120/60' },
    { name: 'ASSURANT', image: '/api/placeholder/120/60' },
    { name: 'BD', image: '/api/placeholder/120/60' },
    { name: 'Maycor', image: '/api/placeholder/120/60' }
  ];

  return (
    <>
      {/* What Makes Us Special Section */}
      <section className="relative py-20 bg-[#020317] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                What Makes Us{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Special?
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                With the proficiency of almost every business domain and industry, we help you provide 
                highly scalable and efficient quality engineering solutions.
              </p>
              
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Know More
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Right Side - Features Grid */}
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Hover Effect */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Who Trust Us Section */}
      <section className="relative py-20 bg-[#020317] overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/6 to-blue-500/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/6 to-purple-500/6 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Clients Who Trust Us
              </span>
            </h2>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-full h-12 bg-gray-300 rounded flex items-center justify-center text-gray-600 text-sm font-medium">
                  {client.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Understand QA More Closely!
              </h2>
              <p className="text-lg text-purple-100 max-w-2xl">
                Get Started With A Quick And Hassle-Free Consultation
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div>
              <button className="group relative px-8 py-4 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatMakesUsSpecial; 