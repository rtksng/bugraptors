import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763188?auto=format&fit=crop&w=400&q=80",
      bio: "15+ years of experience in software testing and quality assurance leadership.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Expert in test automation, AI integration, and scalable testing architectures.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of QA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      bio: "Specialized in mobile testing, performance optimization, and security testing.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kumar",
      role: "Lead Test Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "DevOps integration expert with focus on continuous testing and CI/CD pipelines.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 "></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Our Team"
          title="Meet the Experts Behind BugRaptors"
          subtitle="Passionate professionals dedicated to delivering exceptional quality assurance solutions"
        />

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-custom-transparent rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-tr-2xl"></div>

              {/* Member Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/90 via-[#0B1120]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    className="group/social p-3 bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-sm rounded-full text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="group/social p-3 bg-gradient-to-r from-cyan-600/80 to-cyan-700/80 backdrop-blur-sm rounded-full text-white hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-cyan-500/25"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full "></div>
                    <span className="text-white text-xs font-medium">Available</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Member Info */}
              <div className="relative z-10 p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-3">
                    <span className="text-purple-400 font-medium text-sm">{member.role}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center">
                  {member.bio}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Expert</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">Leader</span>
                </div>
              </div>

              {/* Enhanced Bottom Glowing Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>

              {/* Enhanced Floating Particles */}
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100  transition-opacity duration-300"></div>
              <div className="absolute bottom-20 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100  delay-300 transition-opacity duration-300"></div>
              <div className="absolute top-1/2 right-2 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100  delay-500 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Join Team CTA */}
        <div className="text-center mt-16">
          <div className="group relative inline-block p-8 bg-custom-transparent rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-br-3xl"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                Join Our Team
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-2xl group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                We're always looking for talented individuals who share our passion for quality and innovation. 
                Join us in shaping the future of software testing and be part of our mission to deliver excellence.
              </p>
              
              {/* Enhanced Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
                <div className="text-center p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                  <div className="text-lg font-bold custom-text-gradient">Remote Work</div>
                  <div className="text-gray-400 text-xs">Flexible Hours</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                  <div className="text-lg font-bold custom-text-gradient">Great Benefits</div>
                  <div className="text-gray-400 text-xs">Health & Wellness</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                  <div className="text-lg font-bold custom-text-gradient">Growth</div>
                  <div className="text-gray-400 text-xs">Career Development</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group/btn px-8 py-4 custom-bg-color text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View Open Positions
                    <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  Learn About Culture
                </button>
              </div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100  transition-opacity duration-300"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100  delay-300 transition-opacity duration-300"></div>
            <div className="absolute top-1/3 left-8 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100  delay-500 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 