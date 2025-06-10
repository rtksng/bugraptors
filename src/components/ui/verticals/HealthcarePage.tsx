import React from 'react';
import { FaHeartbeat, FaUserMd, FaHospital, FaAmbulance, FaSearch, FaHandHoldingHeart, FaUsers, FaMobileAlt } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const HealthcarePage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Extend Compassionate Care With Healthcare Testing Services
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl">
                When it comes to patient safety & quality care, software bugs could lead to menace...
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Get end-to-end QA solutions for undisrupted workflow with BugRaptors
              </p>
              
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Talk to our team
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          {/* Central Message using SectionTitle */}
          <SectionTitle
            title="We Ensure The Health Of Your Software, So That You Can Offer Best Care To Your Patients"
            para1="Healthcare software requires the highest standards of quality assurance to ensure patient safety and regulatory compliance."
            para2="Our comprehensive testing solutions help healthcare organizations deliver reliable, secure, and efficient digital solutions."
          />

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-custom-transparent rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaSearch className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Bugs Killed</h3>
                <p className="text-3xl font-bold text-white">5,00,000+</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-custom-transparent rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaHandHoldingHeart className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Certified Team</h3>
                <p className="text-3xl font-bold text-white">200+</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-custom-transparent rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaUsers className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Customers Served</h3>
                <p className="text-3xl font-bold text-white">1000+</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-custom-transparent rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <FaMobileAlt className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Apps Tested</h3>
                <p className="text-3xl font-bold text-white">750+</p>
              </div>
            </div>
          </div>

        </div>

        {/* Safety, Security, & Compliance Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="custom-text-gradient">
                    Safety, Security, & Compliance - We Ensure 100% Risk-Free Applications
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                  Either it is your standard health record maintenance software or a complete ERP software, we pick all the stress by overcoming potential threats.
                </p>
              </div>

              {/* Four Benefits Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Convenience & Compatibility At Its Best</h3>
                  <p className="text-gray-400">Integrate disparate solutions to get all the essential control you need? We can help you ensure smooth and secure transitions</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Usability Crafted For Convenience</h3>
                  <p className="text-gray-400">Experience all the ease with usability as you take your applications to your staff, customers, or any of the users</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Error-Free Operations</h3>
                  <p className="text-gray-400">We help you prevent disaster with your applications. We offer healthcare testing services that counterattack all predictable issues</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Drive Better Returns</h3>
                  <p className="text-gray-400">Keep patient data secure and cut all the costs related to continuous testing. We help you enjoy foolproof Quality Testing Services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QA & Software Testing Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="custom-text-gradient">
                    Explore Our QA & Software Testing Services For Healthcare Industry
                  </span>
                </h2>
              </div>

              {/* Three Service Categories */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Core Service */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Core Service</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Functionality Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Performance Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Usability Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Test Advisory And Consulting Services
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Test Automation
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Test Support Services
                    </li>
                  </ul>
                </div>

                {/* Compliance Services */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Compliance Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      HIPAA
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      DICOM
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      FDA
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      HL7
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      ICD 10 Compliance
                    </li>
                  </ul>
                </div>

                {/* Niche Services */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Niche Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Browser Compatibility Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Data Warehouse Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Globalization Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Mobile Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      SOA Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      User Experience Testing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare Testing Services Crafted For Your Needs Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    <span className="custom-text-gradient">
                      Healthcare Testing Services Crafted For Your Needs
                    </span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    At Bugraptors, we bring you extensive and robust software testing services for 
                    hospitals, healthcare centers, and essential care providing networks. We have years of 
                    expertise providing quality assurance in healthcare, working over regulatory reforms, 
                    structural challenges, and software accountability.
                  </p>
                  
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Either it is medical software testing or any other software testing in the healthcare 
                    domain, we bring you best in class service and the latest technology, taking you closer 
                    to digitalization for big data, cloud computing, data security, and mobility solutions.
                  </p>
                  
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Free QA Assessment
                  </button>
                </div>

                {/* Right Content - Image Placeholder */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
                    <div className="flex items-center justify-center h-64 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-blue-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <p className="text-blue-200 text-lg font-medium">Healthcare Professionals</p>
                        <p className="text-blue-300 text-sm">Working with Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-purple-200 text-sm md:text-base mb-2">
                      We Know Healthcare Industry Demands 24/7 Availability, And So We Are Available To Assist You At All The Times
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Connect With Our Experts To Plan Your Journey Towards Quality Assurance.
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Find Out How!
                    </button>
                  </div>
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

export default HealthcarePage; 