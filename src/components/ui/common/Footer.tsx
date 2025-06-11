import React, { useState, useEffect } from 'react';
import { 
  FaBuilding, 
  FaCogs, 
  FaRocket, 
  FaBook, 
  FaTwitter, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaInfo
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => observer.disconnect();
  }, []);

  const footerSections = [
    {
      title: 'About Us',
      icon: <FaBuilding className="text-purple-400" />,
      items: [
        { label: 'Company', link: '#', description: 'Learn about our mission' },
        { label: 'Life at BugRaptors', link: '#', description: 'Join our team' },
        { label: 'Engagement Model', link: '#', description: 'How we work' },
        { label: 'Corporate News', link: '#', description: 'Latest updates' },
      ]
    },
    {
      title: 'Services',
      icon: <FaCogs className="text-blue-400" />,
      items: [
        { label: 'Automation Testing', link: '#', description: 'AI-powered testing' },
        { label: 'Manual Testing', link: '#', description: 'Expert QA services' },
        { label: 'TCOE Testing', link: '#', description: 'Center of excellence' },
        { label: 'API Testing', link: '#', description: 'Backend validation' },
        { label: 'Security Testing', link: '#', description: 'Vulnerability assessment' },
        { label: 'Big Data Testing', link: '#', description: 'Data validation' },
        { label: 'Blockchain Testing', link: '#', description: 'DApp testing' },
      ]
    },
    {
      title: 'Solutions',
      icon: <FaRocket className="text-cyan-400" />,
      items: [
        { label: 'BugBot', link: '#', description: 'AI testing assistant' },
        { label: 'MoboRaptors', link: '#', description: 'Mobile testing suite' },
        { label: 'RaptorVista', link: '#', description: 'Analytics platform' },
      ]
    },
    {
      title: 'Resources',
      icon: <FaBook className="text-green-400" />,
      items: [
        { label: 'Blogs', link: '#', description: 'Industry insights' },
        { label: 'Case Studies', link: '#', description: 'Success stories' },
        { label: 'Ebooks', link: '#', description: 'Free downloads' },
      ]
    },
    {
      title: 'More Info',
      icon: <FaInfo className="text-orange-400" />,
      items: [
        { label: 'Contact Us', link: '#', description: 'Get in touch' },
        { label: 'Support', link: '#', description: '24/7 assistance' },
        { label: 'Careers', link: '#', description: 'Join our team' },
        { label: 'FAQ', link: '#', description: 'Common questions' },
      ]
    }
  ];

  const socialLinks = [
    { 
      icon: <FaTwitter />, 
      url: '#', 
      label: 'Twitter', 
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:from-blue-300 hover:to-blue-500',
      followers: '12.5K'
    },
    { 
      icon: <FaFacebookF />, 
      url: '#', 
      label: 'Facebook', 
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-500 hover:to-blue-700',
      followers: '8.3K'
    },
    { 
      icon: <FaLinkedinIn />, 
      url: '#', 
      label: 'LinkedIn', 
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-400 hover:to-blue-600',
      followers: '15.2K'
    },
    { 
      icon: <FaYoutube />, 
      url: '#', 
      label: 'YouTube', 
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:from-red-400 hover:to-red-600',
      followers: '5.1K'
    }
  ];

  return (
    <footer id="footer" className="relative  text-white overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full "
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Floating Orbs */}
            
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Top Border with Animation */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent "></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header Section with Logo */}
        <div className={`mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Logo and Description */}
          <div className=" space-y-8">
            <div className="group">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <img src="/src/assets/logo.svg" alt="BugRaptors" className="relative h-12 transform group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-6 group">
              <h3 className="text-lg font-semibold relative inline-block">
                <span className="flex items-center space-x-3">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                    {section.title}
                  </span>
                </span>
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <li key={item.label}>
                    <a 
                      href={item.link}
                      className="group/link relative block p-2 -mx-2 rounded-lg hover:bg-purple-500/5 transition-all duration-300"
                      style={{ animationDelay: `${(sectionIndex * 100) + (index * 50)}ms` }}
                    >
                      <div className="flex-1">
                        <div className="text-sm text-gray-300 group-hover/link:text-white transition-colors duration-300">
                          {item.label}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover/link:opacity-100 transition-all duration-300"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className={`relative flex flex-col md:flex-row justify-between items-center pt-8 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <div key={social.label} className="group relative">
                <a
                  href={social.url}
                  className={`relative w-14 h-14  rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 
                    flex items-center justify-center group-hover:border-purple-500/40 hover:scale-110 transition-all duration-300 ${social.hoverColor}`}
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>
                  <div className="relative  text-gray-400 group-hover:text-white transform group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
                
                {/* Follower count tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {social.followers} followers
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400 flex items-center">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Copyright © 2024 All Rights Reserved by 
              <span className="ml-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                BugRaptors
              </span>
            </p>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 relative group">
                Privacy Policy
                <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors duration-300 relative group">
                Terms of Service
                <div className="absolute bottom-0 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 