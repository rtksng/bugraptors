import React, { useState } from 'react';
import logo from '../../assets/logo.svg';

const navLinks = [
  { name: 'Services', href: '#' },
  { name: 'Company', href: '#' },
  { name: 'Insights', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#050a27]/95 via-[#0a0f2e]/95 to-[#050a27]/95 backdrop-blur-sm border-b border-purple-500/20 shadow-2xl">
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto flex items-center justify-between px-4 h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="BugRaptors Logo" 
              className="relative h-8 sm:h-10 w-auto filter brightness-110 group-hover:brightness-125 transition-all duration-300" 
            />
          </div>
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5"
            >
              <span className="relative z-10">{link.name}</span>
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="group relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <span className="relative z-10 flex items-center">
              Get Started
              <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 rounded-lg border border-purple-400/50 group-hover:border-purple-300 transition-colors duration-300"></div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-gradient-to-b from-[#0a0f2e]/95 to-[#050a27]/95 backdrop-blur-lg border-t border-purple-500/20`}>
        <div className="px-4 py-4 sm:py-6 space-y-2 sm:space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 hover:text-white font-medium text-base sm:text-lg py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 transition-all duration-300 border border-transparent hover:border-purple-500/30"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-4 left-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-6 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      </div>
    </nav>
  );
};

export default NavigationBar; 