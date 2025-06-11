import React from 'react';
import { FaLightbulb, FaUsers, FaTrophy } from 'react-icons/fa';

const WhyChooseUsServices: React.FC = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-5xl text-yellow-400" />,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies and methodologies to deliver state-of-the-art testing solutions that keep you ahead of the competition.",
      color: "from-yellow-500 to-orange-500",
      glowColor: "group-hover:shadow-yellow-500/30"
    },
    {
      icon: <FaUsers className="text-5xl text-blue-400" />,
      title: "Expert Team",
      description: "Our certified testing professionals bring years of experience across diverse industries and technologies to ensure comprehensive quality assurance.",
      color: "from-blue-500 to-cyan-500",
      glowColor: "group-hover:shadow-blue-500/30"
    },
    {
      icon: <FaTrophy className="text-5xl text-green-400" />,
      title: "Proven Results",
      description: "With 500+ successful projects and 99.9% bug detection rate, we have a track record of delivering exceptional quality and client satisfaction.",
      color: "from-green-500 to-emerald-500",
      glowColor: "group-hover:shadow-green-500/30"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-[120px] "></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-green-500/8 rounded-full blur-[120px]  delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Why Choose</span>
            <span className="custom-text-gradient"> BugRaptors</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Experience the difference with our comprehensive testing approach, expert team, and proven track record of delivering exceptional quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-black/20 hover:shadow-2xl ${feature.glowColor} transform hover:-translate-y-2 hover:scale-105 transition-all duration-500`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background Orb */}
              <div className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full "></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/50 rounded-full  delay-500"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsServices; 