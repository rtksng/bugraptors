import React from 'react';
import { FaProjectDiagram, FaBug, FaUsers, FaClock } from 'react-icons/fa';

const ServicesStats: React.FC = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-3xl text-blue-400" />,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects"
    },
    {
      icon: <FaBug className="text-3xl text-green-400" />,
      number: "99.9%",
      label: "Bug Detection Rate",
      description: "Industry-leading accuracy"
    },
    {
      icon: <FaUsers className="text-3xl text-purple-400" />,
      number: "50+",
      label: "Expert Engineers",
      description: "Certified testing professionals"
    },
    {
      icon: <FaClock className="text-3xl text-orange-400" />,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-8 rounded-3xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-purple-400 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesStats; 