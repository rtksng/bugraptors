import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import MegaMenu from './MegaMenu';

const NavigationWithMegaMenu: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'QA Offerings', 
      href: '#', 
      hasMegaMenu: true,
      onClick: toggleMegaMenu 
    },
    { name: 'Tools', href: '/tools' },
    { name: 'Industries', href: '/industries' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-[#020317] border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">
              BugRaptors
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasMegaMenu ? (
                    <button
                      onClick={item.onClick}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isMegaMenuOpen
                          ? 'text-white bg-purple-500/20'
                          : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                      }`}
                    >
                      {item.name}
                      <FaChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isMegaMenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white hover:bg-purple-500/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="custom-bg-color text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <div className="relative">
        <MegaMenu isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#020317] border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.hasMegaMenu ? (
                  <button
                    onClick={item.onClick}
                    className="w-full text-left text-gray-300 hover:text-white hover:bg-purple-500/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white hover:bg-purple-500/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a
                href="/contact"
                className="custom-bg-color text-white block text-center px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationWithMegaMenu; 