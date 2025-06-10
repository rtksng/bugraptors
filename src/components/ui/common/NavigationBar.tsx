import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';

const navLinks = [
  { name: 'Services', href: '/services' },
  { 
    name: 'Company', 
    href: '/company',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Corporate News', href: '/company/corporate-news' },
      { name: 'Inclusion & Diversity (DEI)', href: '/company/inclusion-diversity' },
      { name: 'Life at BugRaptors', href: '/company/life-at-bugraptors' },
      { name: 'Career', href: '/company/career' },
      { name: 'Engagement Model', href: '/company/engagement-model' },
    ]
  },
  { name: 'Insights', href: '#' },
  { 
    name: 'Tools', 
    href: '#',
    hasDropdown: true,
    isHoverDropdown: true,
    dropdownItems: [
      { name: 'MoboRaptors', href: '/tools/moboraptors' },
      { name: 'RaptorVista', href: '/tools/raptorvista' },
      { name: 'BugBot', href: '/tools/bugbot' },
      { name: 'RaptorGen', href: '/tools/raptorgen' },
      { name: 'RaptorHub', href: '/tools/raptorhub' },
      { name: 'RaptorAssist', href: '/tools/raptorassist' },
      { name: 'RaptorSelect', href: '/tools/raptorselect' },
      { name: 'RaptorScan', href: '/tools/raptorscan' },
      { name: 'RaptorVision', href: '/tools/raptorvision' },
      { name: 'RaptorSecurity', href: '/tools/raptorsecurity' },
    ]
  },
  { name: 'Contact Us', href: '#' },
];

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (linkName: string) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  const handleMouseEnter = (linkName: string) => {
    setHoverDropdown(linkName);
  };

  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

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
        <div className="hidden lg:flex gap-8" ref={dropdownRef}>
          {navLinks.map((link) => {
            const isExternalLink = link.href.startsWith('#');
            const linkClasses = "relative group text-gray-300 hover:text-white font-medium text-lg transition-all duration-300 py-2 px-4 rounded-full";
            
            if (link.hasDropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={link.isHoverDropdown ? () => handleMouseEnter(link.name) : undefined}
                  onMouseLeave={link.isHoverDropdown ? handleMouseLeave : undefined}
                >
                  <button
                    onClick={link.isHoverDropdown ? undefined : () => toggleDropdown(link.name)}
                    className={`${linkClasses} flex items-center gap-2 cursor-pointer `}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <FaChevronDown 
                      className={`w-3 h-3 transition-transform duration-300 ${
                        (link.isHoverDropdown ? hoverDropdown === link.name : activeDropdown === link.name) ? 'rotate-180' : ''
                      }`} 
                    />
                    <div className="absolute inset-0 custom-bg-color rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {(link.isHoverDropdown ? hoverDropdown === link.name : activeDropdown === link.name) && (
                    <div className={`absolute top-full left-0 pt-2 z-50`}>
                      {/* Invisible bridge to prevent dropdown from closing */}
                      {link.isHoverDropdown && (
                        <div className="absolute top-0 left-0 right-0 h-2 bg-transparent"></div>
                      )}
                      <div className={`w-64 ${
                        link.isHoverDropdown 
                          ? 'bg-[#6B21A8] border-purple-300/30' 
                          : 'bg-[#4C1D95] border-purple-400/20'
                      } rounded-lg shadow-xl border overflow-hidden`}>
                        {link.dropdownItems?.map((item, index) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => {
                              setActiveDropdown(null);
                              setHoverDropdown(null);
                            }}
                            className={`block px-4 py-3 text-white transition-colors duration-200 border-b last:border-b-0 ${
                              link.isHoverDropdown 
                                ? 'hover:bg-purple-700/60 border-purple-300/20' 
                                : 'hover:bg-purple-600/50 border-purple-400/10'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            } else if (isExternalLink) {
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
            
            if (link.hasDropdown) {
              return (
                <div key={link.name} style={{ animationDelay: `${index * 100}ms` }}>
                  <button
                    onClick={() => toggleDropdown(`mobile-${link.name}`)}
                    className={`${linkClasses} w-full text-left flex items-center justify-between`}
                  >
                    <span>{link.name}</span>
                    <FaChevronDown 
                      className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === `mobile-${link.name}` ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {/* Mobile Dropdown Items */}
                  {activeDropdown === `mobile-${link.name}` && (
                    <div className="mt-2 ml-4 space-y-1">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block text-gray-400 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-purple-600/20 transition-all duration-300"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else if (isExternalLink) {
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