import React from 'react';
import { FaUniversity, FaShieldAlt, FaUsers, FaFileAlt, FaDesktop, FaCogs, FaBrain, FaStar, FaCheckCircle, FaBullseye, FaClipboardList, FaLaptop, FaDatabase, FaTachometerAlt, FaBullhorn, FaGavel, FaUserShield, FaChartBar, FaClock } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const GovernmentPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.2)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Government Software Testing Making Technology Available For All
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              100 Percent Defect-free Software Solutions To Meet Public Needs
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Complete Testing & QA Solutions For Unlimited Accessibility
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Talk To Our Experts!
            </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="Citizen Files or Announcements, Our QA Testing Services Are Made To Keep Your Software Functioning For High-Quality Digital Experiences"
            para1=""
            para2=""
          />

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Accessibility Guidelines Compliance</h3>
              <p className="text-gray-400">WCAG 2.0 or ADA, We Keep You Compliant</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Performance With Reliability</h3>
              <p className="text-gray-400">Meet Extreme Demands Of The Users</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaChartBar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Efficiency Made For You</h3>
              <p className="text-gray-400">Public Portal or Internal Operations, We Bring You Efficiency</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Speed All Your Releases</h3>
              <p className="text-gray-400">AI or Automation, We Keep Your Back</p>
            </div>
          </div>
        </div>

        {/* Real-Time Testing Solutions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Real-Time Testing Solutions Made To Give The Tech To The Public"
                para1="Private citizens or government officials, we bring you the most reliable assistance with our software testing services."
                para2=""
              />

              {/* Four Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Performance Driven Solutions</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Election or Emergency, we help you with solutions that are meant to perform</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Budget Solutions Made To Save Time</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Keep all your tasks simplified through Automation, AI, and ML</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Secure Your Data</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">We help you prevent breaches on all your confidential data</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Accessibility Redefined</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Compliance or Ease of use, we help you offer the highest level of accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QA & Software Testing Services Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Our QA & Software Testing Services For Government"
                para1=""
                para2=""
              />

              {/* Four Service Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Test Strategy */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaClipboardList className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Test Strategy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Automation Strategy
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Test Process Consulting
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Functional Test Strategy
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Performance Strategy
                    </li>
                  </ul>
                </div>

                {/* Functionality */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaCogs className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Functionality</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      API Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Integration Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      System Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Regression Testing
                    </li>
                  </ul>
                </div>

                {/* Specialized Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaShieldAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Specialized Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Security Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Performance & Scalability
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Globalization And Localization
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Specialized Testing (SOA, Device, Etc.)
                    </li>
                  </ul>
                </div>

                {/* Sustainability */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaUsers className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Sustainability</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Patch/Fix
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Compatibility
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Regression
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Release & Deployment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government Software Testing - Business Focus Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <SectionTitle
                    title="Government Software Testing - Improving Your Telecasts"
                    para1="When you are a government organization that needs to keep track of all the information related to citizens or ensure that all the public operations are easily managed, you can simply choose the government software testing services to ensure a pleasing experience for all your consumers. We help you yield flawless functionality with performance and security."
                    para2="We at BugRaptors help you enjoy state-of-the-art testing services that bring you an intelligent test automation framework for optimizing your day-to-day operations. Our advanced software testing solutions made to reduce the time to market and offer quality for exceptional services."
                    align="left"
                  />
                  
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Free QA Assessment
                  </button>
                </div>

                {/* Right Content - Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-96 bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg">
                          <FaUniversity className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Government Excellence</h3>
                        <p className="text-purple-200 text-lg">Smart Testing Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Government Software? We Help You Enjoy The Best Testing & QA Services For Giving You The Ultimate User Experience.
                  </h3>
                  <p className="text-lg text-gray-200">
                    Drive More Value To Your Government Organization With Our QA Testing Services!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default GovernmentPage; 