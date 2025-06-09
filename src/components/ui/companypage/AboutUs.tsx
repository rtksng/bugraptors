import React from 'react';
import { FaRocket, FaShieldAlt, FaUsers, FaGlobe } from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge testing methodologies and AI-powered solutions."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Quality First",
      description: "Uncompromising commitment to delivering the highest quality assurance services to our clients."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Team",
      description: "Highly skilled professionals with extensive experience across diverse industries and technologies."
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and culturally diverse testing perspectives."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="About BugRaptors"
          title="Empowering Software Excellence"
          subtitle="Building trust through uncompromising quality and innovative testing solutions"
        />

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Our Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 2015, BugRaptors began as a vision to revolutionize software testing. 
                What started as a small team of passionate QA engineers has grown into a global 
                leader in quality assurance services.
              </p>
              <p>
                Today, we serve over 500+ clients worldwide, from innovative startups to Fortune 500 
                companies, helping them deliver bug-free, secure, and high-performing software solutions.
              </p>
              <p>
                Our commitment to excellence, continuous innovation, and customer success has established 
                us as a trusted partner in the software development lifecycle.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-[#1a1f4b]/40 to-[#0d1333]/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold custom-text-gradient mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold custom-text-gradient mb-2">8+</div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold custom-text-gradient mb-2">1000+</div>
                  <div className="text-gray-300 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold custom-text-gradient mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Expert Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-custom-transparent rounded-2xl shadow-2xl p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-purple-500/20 hover:border-purple-400/40 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-custom-transparent rounded-bl-full"></div>

              {/* Icon Container */}
              <div className="relative mb-6 w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
                <div className="relative z-10">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Bottom Glowing Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              <div className="absolute bottom-8 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 