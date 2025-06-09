import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Company', href: '/company' },
  { name: 'Insights', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? 'bg-[#0a0f2e]/90 backdrop-blur-md shadow-lg border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      {/* Glowing Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container mx-auto flex items-center justify-between px-4 h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img
              src={logo}
              alt="BugRaptors Logo"
              className="relative h-8 sm:h-10 w-auto filter brightness-110 group-hover:brightness-125 transition-all duration-300"
            />
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => {
            const isExternalLink = link.href.startsWith('#');
            const linkClasses = "relative group text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 py-2 px-4 rounded-full";
            
            if (isExternalLink) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClasses}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 custom-bg-color rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={linkClasses}
                >  
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 custom-bg-color rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            }
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="group relative px-4 py-2 sm:px-6 sm:py-3 custom-bg-color hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden text-sm sm:text-base cursor-pointer">
            <span className="relative z-10 flex items-center">
              Get Started
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-gradient-to-b from-[#0a0f2e]/95 to-[#050a27]/95 backdrop-blur-lg border-t border-purple-500/20`}
      >
        <div className="px-4 py-4 sm:py-6 space-y-2 sm:space-y-4">
          {navLinks.map((link, index) => {
            const isExternalLink = link.href.startsWith('#');
            const linkClasses = "block text-gray-300 hover:text-white font-medium text-base sm:text-lg py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 transition-all duration-300 border border-transparent hover:border-purple-500/30";
            
            if (isExternalLink) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClasses}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </a>
              );
            } else {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={linkClasses}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </Link>
              );
            }
          })}
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