import React from 'react';
import { FaHeart, FaLaptop, FaGraduationCap, FaMedkit, FaUmbrellaBeach, FaCoffee, FaGamepad, FaTrophy } from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';

const CompanyCulture: React.FC = () => {
  const benefits = [
    {
      icon: <FaLaptop className="w-8 h-8" />,
      title: "Remote Flexibility",
      description: "Work from anywhere with flexible hours and modern tools",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Continuous learning opportunities and certification programs",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <FaMedkit className="w-8 h-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      gradient: "from-cyan-600 to-purple-600"
    },
    {
      icon: <FaUmbrellaBeach className="w-8 h-8" />,
      title: "Paid Time Off",
      description: "Generous vacation days and personal time off",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Performance Rewards",
      description: "Recognition programs and performance-based bonuses",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      icon: <FaCoffee className="w-8 h-8" />,
      title: "Great Workspace",
      description: "Modern offices with free snacks and recreational areas",
      gradient: "from-blue-600 to-indigo-600"
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and innovative solutions to complex problems."
    },
    {
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between professional and personal life."
    },
    {
      title: "Collaborative Spirit",
      description: "Teamwork and collaboration are at the heart of everything we do."
    },
    {
      title: "Continuous Growth",
      description: "We invest in our people's growth and provide opportunities to advance their careers."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-pink-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Company Culture"
          title="Where Great Minds Thrive"
          subtitle="Join a culture that values innovation, growth, and work-life balance"
        />

        {/* Culture Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cultureValues.map((value, index) => (
            <div
              key={value.title}
              className="group text-center p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <FaHeart className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="custom-text-gradient">Employee Benefits</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative bg-custom-transparent rounded-2xl shadow-2xl p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-purple-500/20 hover:border-purple-400/40 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glowing Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-custom-transparent rounded-bl-full"></div>

                {/* Icon Container */}
                <div className="relative mb-6 w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
                  <div className="relative z-10">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Glowing Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${benefit.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Section */}
        <div className="text-center bg-custom-transparent rounded-2xl p-8 border border-purple-500/20">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <FaGamepad className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold custom-text-gradient">Life at BugRaptors</h3>
            <FaCoffee className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Beyond work, we're a community that celebrates achievements, enjoys team outings, 
            gaming sessions, and creates lasting friendships. Join us for a journey where your 
            career growth meets personal fulfillment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture; 