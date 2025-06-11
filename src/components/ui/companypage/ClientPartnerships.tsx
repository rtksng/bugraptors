import React from 'react';
import { FaHandshake, FaStar, FaGlobe, FaTrophy } from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';

const ClientPartnerships: React.FC = () => {
  const partnerships = [
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Trusted Partnerships",
      description: "Building long-term relationships with Fortune 500 companies and innovative startups",
      stats: "500+ Clients"
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients across 25+ countries with localized testing expertise",
      stats: "25+ Countries"
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Client Satisfaction",
      description: "Maintaining 99.9% client satisfaction rate through exceptional service delivery",
      stats: "99.9% Satisfaction"
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Award-winning QA solutions recognized by leading industry organizations",
      stats: "15+ Awards"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "https://via.placeholder.com/150x80/4338ca/ffffff?text=TechCorp" },
    { name: "InnovateLabs", logo: "https://via.placeholder.com/150x80/7c3aed/ffffff?text=InnovateLabs" },
    { name: "DataFlow", logo: "https://via.placeholder.com/150x80/0891b2/ffffff?text=DataFlow" },
    { name: "CloudSync", logo: "https://via.placeholder.com/150x80/059669/ffffff?text=CloudSync" },
    { name: "DigitalEdge", logo: "https://via.placeholder.com/150x80/dc2626/ffffff?text=DigitalEdge" },
    { name: "NextGen", logo: "https://via.placeholder.com/150x80/ea580c/ffffff?text=NextGen" },
    { name: "SmartSoft", logo: "https://via.placeholder.com/150x80/9333ea/ffffff?text=SmartSoft" },
    { name: "FutureTech", logo: "https://via.placeholder.com/150x80/1d4ed8/ffffff?text=FutureTech" }
  ];

  const testimonials = [
    {
      quote: "BugRaptors transformed our testing process and helped us achieve 40% faster releases.",
      company: "TechCorp",
      role: "CTO"
    },
    {
      quote: "Their AI-powered testing solutions have been game-changing for our mobile applications.",
      company: "InnovateLabs",
      role: "VP Engineering"
    },
    {
      quote: "Outstanding quality and reliability. They've become an integral part of our development team.",
      company: "DataFlow",
      role: "Head of QA"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/8 to-cyan-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Client Partnerships"
          title="Trusted by Industry Leaders"
          subtitle="Building successful partnerships with companies worldwide"
        />

        {/* Partnership Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnerships.map((partnership, index) => (
            <div
              key={partnership.title}
              className="group text-center p-6 bg-custom-transparent rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 w-16 h-16 mx-auto custom-bg-color rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                {partnership.icon}
              </div>
              
              <div className="text-2xl font-bold custom-text-gradient mb-2">
                {partnership.stats}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {partnership.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {partnership.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            <span className="custom-text-gradient">Trusted by Leading Companies</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group relative bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center text-white mb-12">
            <span className="custom-text-gradient">What Our Clients Say</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.company}
                className="group relative bg-custom-transparent rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-4xl text-purple-400/30 font-serif">"</div>
                
                <div className="relative z-10 pt-6">
                  <p className="text-gray-300 italic leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-sm">
                        {testimonial.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.company}</div>
                      <div className="text-purple-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100  transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100  delay-300 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPartnerships; 