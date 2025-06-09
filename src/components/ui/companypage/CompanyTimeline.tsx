import React from 'react';
import { FaRocket, FaAward, FaUsers, FaGlobeAmericas, FaStar, FaLightbulb } from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';

const CompanyTimeline: React.FC = () => {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "BugRaptors was established with a vision to revolutionize software testing.",
      icon: <FaRocket className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Secured our first Fortune 500 client, marking a significant milestone.",
      icon: <FaStar className="w-6 h-6" />,
      highlight: false
    },
    {
      year: "2019",
      title: "AI Integration",
      description: "Pioneered AI-powered testing solutions, setting industry standards.",
      icon: <FaLightbulb className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations globally, serving clients across 25+ countries.",
      icon: <FaGlobeAmericas className="w-6 h-6" />,
      highlight: false
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for excellence in quality assurance services.",
      icon: <FaAward className="w-6 h-6" />,
      highlight: true
    },
    {
      year: "2024",
      title: "Team Growth",
      description: "Grew to 50+ expert engineers and served 500+ clients worldwide.",
      icon: <FaUsers className="w-6 h-6" />,
      highlight: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/8 to-cyan-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Our Journey"
          title="Milestones That Define Us"
          subtitle="From a small startup to a global leader in quality assurance"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${
                    milestone.highlight 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/50' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}>
                    <div className="absolute inset-0 rounded-full animate-ping bg-current opacity-20"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`group relative bg-custom-transparent rounded-2xl p-6 border ${
                    milestone.highlight 
                      ? 'border-purple-500/30 hover:border-purple-400/50' 
                      : 'border-blue-500/20 hover:border-blue-400/40'
                  } transition-all duration-300 hover:scale-105 hover:-translate-y-2`}>
                    
                    {/* Glowing Effect */}
                    <div className={`absolute inset-0 ${
                      milestone.highlight 
                        ? 'bg-gradient-to-r from-purple-600/10 to-blue-600/10' 
                        : 'bg-gradient-to-r from-blue-600/10 to-cyan-600/10'
                    } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                    <div className="relative z-10">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full mb-4 ${
                        milestone.highlight 
                          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30' 
                          : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30'
                      }`}>
                        <div className={`p-1 rounded-full mr-3 ${
                          milestone.highlight ? 'custom-bg-color' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}>
                          <div className="text-white">
                            {milestone.icon}
                          </div>
                        </div>
                        <span className={`font-bold text-lg ${
                          milestone.highlight ? 'text-purple-300' : 'text-blue-300'
                        }`}>
                          {milestone.year}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline; 