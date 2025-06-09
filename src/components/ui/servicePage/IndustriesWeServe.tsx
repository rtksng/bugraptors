import React from 'react';
import { 
  FaHeartbeat, 
  FaUniversity, 
  FaCar, 
  FaShoppingCart, 
  FaGamepad, 
  FaIndustry,
  FaArrowRight
} from 'react-icons/fa';

const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      icon: <FaHeartbeat className="text-4xl text-red-400" />,
      title: "Healthcare",
      description: "HIPAA-compliant testing for medical software, patient management systems, and healthcare applications.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaUniversity className="text-4xl text-blue-400" />,
      title: "Finance & Banking",
      description: "Secure testing for financial applications, payment systems, and regulatory compliance validation.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <FaCar className="text-4xl text-green-400" />,
      title: "Automotive",
      description: "Testing for connected vehicles, autonomous systems, and automotive software platforms.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaShoppingCart className="text-4xl text-purple-400" />,
      title: "E-commerce",
      description: "Performance testing for high-traffic retail platforms, payment gateways, and customer experiences.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <FaGamepad className="text-4xl text-orange-400" />,
      title: "Gaming",
      description: "Quality assurance for mobile games, console games, and interactive entertainment platforms.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaIndustry className="text-4xl text-cyan-400" />,
      title: "Manufacturing",
      description: "Testing for industrial automation, IoT systems, and manufacturing execution platforms.",
      color: "from-cyan-500 to-blue-500"
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
            <span className="text-white">Industries</span>
            <span className="custom-text-gradient"> We Serve</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Specialized testing expertise across diverse industries with deep domain knowledge and compliance understanding.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background Orb */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${industry.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {industry.description}
                </p>

                {/* Learn More Link */}
                <div className="pt-4">
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

export default IndustriesWeServe; 