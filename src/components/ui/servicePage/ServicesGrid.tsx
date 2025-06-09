import React from 'react';
import { 
  FaRobot, 
  FaMobile, 
  FaShieldAlt, 
  FaCog, 
  FaDatabase, 
  FaBolt,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: <FaRobot className="text-4xl text-purple-400" />,
      title: "AI-Powered Automation",
      description: "Leverage machine learning and AI to create intelligent test automation that adapts and evolves with your application.",
      features: ["Smart Test Generation", "Self-Healing Tests", "Predictive Analytics", "Continuous Learning"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaMobile className="text-4xl text-blue-400" />,
      title: "Mobile Testing Excellence",
      description: "Comprehensive mobile testing across iOS, Android, and cross-platform applications with real device testing.",
      features: ["Real Device Testing", "Performance Optimization", "UI/UX Validation", "Cross-Platform Support"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-400" />,
      title: "Security & Penetration",
      description: "Advanced security testing to identify vulnerabilities and ensure your applications are protected against threats.",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Compliance Validation"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaCog className="text-4xl text-orange-400" />,
      title: "API & Backend Testing",
      description: "Thorough API testing ensuring data integrity, performance, and seamless integration across all endpoints.",
      features: ["RESTful API Testing", "GraphQL Testing", "Data Validation", "Performance Testing"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaDatabase className="text-4xl text-indigo-400" />,
      title: "Big Data Testing",
      description: "Validate massive datasets and ensure data accuracy, completeness, and performance at enterprise scale.",
      features: ["Data Validation", "ETL Testing", "Performance Analysis", "Data Quality Assurance"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <FaBolt className="text-4xl text-yellow-400" />,
      title: "Performance & Load",
      description: "Ensure your applications can handle peak loads with comprehensive performance and stress testing.",
      features: ["Load Testing", "Stress Testing", "Scalability Analysis", "Performance Optimization"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="custom-text-gradient"> Testing Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Comprehensive testing solutions tailored to meet your specific needs and ensure the highest quality standards for your software applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background Orb */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="pt-6">
                  <button className="group/button flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                    Learn More
                    <FaArrowRight className="ml-2 transform group-hover/button:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid; 