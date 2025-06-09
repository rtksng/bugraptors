import React from 'react';
import { FaGlobe, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const BridgingDifferences: React.FC = () => {
  const benefits = [
    {
      icon: <FaGlobe className="text-2xl text-purple-400" />,
      text: "Diversity gives us the expertise to cater global marketplace with creative response"
    },
    {
      icon: <FaLightbulb className="text-2xl text-blue-400" />,
      text: "Diversity encourages our teams to find out new ways of performing things while allowing the management to encourage fair performance management"
    },
    {
      icon: <FaUsers className="text-2xl text-pink-400" />,
      text: "Diversity helps us to reinforce and expand our offerings and services for a better business experience"
    },
    {
      icon: <FaRocket className="text-2xl text-green-400" />,
      text: "Diversity drives innovation and helps us create breakthrough solutions that serve our global client base"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bridging Human Differences
            </span>
            <br />
            <span className="text-white">For Prosperity</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When we say diversity, we believe in the freedom of expression based on cultural and ethical backgrounds. 
                For us, diversity serves as a source of innovation as different opinions and ideas help us to create trends 
                than follow the already existing hype.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Some of the most significant benefits of a diverse culture that we have measured so far include:
              </p>
            </div>

            {/* Statistics or Additional Info */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Diverse Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-300 text-sm">Countries Represented</div>
              </div>
            </div>
          </div>

          {/* Right Benefits List */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Diverse Community
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Be part of a team that values every perspective and celebrates the strength that comes from our differences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgingDifferences; 