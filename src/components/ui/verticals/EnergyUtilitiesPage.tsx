import React from 'react';
import { FaBolt, FaWater, FaSolarPanel, FaIndustry, FaShieldAlt, FaThumbsUp, FaLightbulb, FaCogs, FaDesktop, FaTachometerAlt, FaUsers, FaDatabase } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const EnergyUtilitiesPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Energy & Utility Testing – Uninterrupted Quality On Power & Transmissions
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                Innovating Utility Technology For Reliable Solutions
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                End-to-end Testing & QA Services To Power Up Secure Usability
              </p>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Talk to Our Experts!
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="Get Software Testing Services Made For Added Reliability And Improved Predictability With BugRaptors"
            para1="EnergyRaptors helps you transform your Energy & Utility operations by enabling dynamic and end-to-end testing on all your critical power and transmission systems."
            para2="Whether you are working on smart grid implementations or need to streamline utility management optimization, EnergyRaptors has all the capabilities you need to attain the Global Energy Compliance Benchmarks."
          />

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Compliance? Let Us Handle!</h3>
              <p className="text-gray-400">NERC and ADA Regulations, we keep you compliant</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 mb-4">
                <FaThumbsUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Reliability That You Seek</h3>
              <p className="text-gray-400">Improve your customer base with better SAID and CAIDI score</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 mb-4">
                <FaLightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Tailor Made QA Solutions</h3>
              <p className="text-gray-400">Extra assurance on usability, functionality, and performance</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-yellow-500/30 transition-all duration-300">
              <div className="text-yellow-400 mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Security At Its Best</h3>
              <p className="text-gray-400">Say no to cyber-threats with security assurance</p>
            </div>
          </div>
        </div>

        {/* Performance-Driven Solutions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Performance-Driven Testing Solutions Made To Smoothen Energy & Utility Software"
                para1="EnergyRaptors as a comprehensive energy test automation tool gives you all the command you need on working most complex utility test suites. Irrespective of the application (Smart Grid or Legacy Systems), EnergyRaptors brings you best of test management, CI/CD Integrations, and Cloud testing advantage."
                para2="Struggling through provider competition or rising energy demand? We help you work on your power & utility business with innovative testing strategies for necessary performance upgrades through automated testing excellence."
              />

              {/* Four Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Accelerate Your Applications</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">We bring you data-driven testing solutions ensuring faster builds, quicker upgrades, and anything you need for critical control</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Assurance On Accessibility</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Serving across regional or global boundaries? Offering ultimate standards and app experience to your users with WCAG 2.0 and ADA compliance</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Redefining Efficiency</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Third-party integrations or seamless operability, we help you ensure compliance on all your tasks related to billing, customer service, and more</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Zero Breach Risk</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get off any system vulnerabilities for your distribution or connected devices with our advanced security testing services for improved cyber resilience</p>
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
                title="Our QA & Software Testing Services For Energy & Utility Businesses"
                para1="EnergyRaptors delivers comprehensive QA and software testing services specifically designed for energy and utility businesses to ensure optimal performance and operational reliability."
                para2="Our specialized testing frameworks cover everything from smart grid systems to complex utility management platforms, ensuring seamless energy distribution and superior operational performance across all critical infrastructure touchpoints."
              />

              {/* Four Service Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Core Systems */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaDesktop className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Core Systems</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Enterprise Asset Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      GIS & Asset Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Mobile Workforce Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Project Management, Forecasting & Dispatch
                    </li>
                  </ul>
                </div>

                {/* Meter Reading */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaTachometerAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Meter Reading</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      AMI & Smart Meters
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Outage Management & Demand Side Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      In Home Displays And Meter Data Management System
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Energy Management System
                    </li>
                  </ul>
                </div>

                {/* Consumer Services & ETRM */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaUsers className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Consumer Services & ETRM</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Customer Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Information Management Such As Collections
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Billing, Pricing, Acquisition & Enrollment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Correspondence And Complaint Management Functionality
                    </li>
                  </ul>
                </div>

                {/* ETRM & Enterprise Solutions */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaDatabase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">ETRM & Enterprise Solutions</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Front Office, Risk Management, Data Feed And Market Integration
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Integration, SOA Services, & Infrastructure Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      SAP - EAM, Oracle Utilities, PEACE, CRM, IVR, Hyperion
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Digital Testing, Mobility, Analytics, Cloud/SaaS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Energy Software Testing - Business Focus Section */}
        <section className="py-20 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.2)'
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <SectionTitle
                    title="Energy & Utility Software Testing – Keeping Your Transmission Needs In Line"
                    para1="EnergyRaptors helps you transform your Energy & Utility operations by providing advanced energy testing automation that addresses complex transmission and distribution challenges. From smart grid platforms to enterprise utility systems, EnergyRaptors brings you the best of automated testing precision and energy domain expertise."
                    para2="Whether you are working on power generation modernization or need to streamline transmission optimization across networks, EnergyRaptors has all the capabilities you need to attain Global Energy Compliance Benchmarks and ensure reliable power delivery."
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
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg">
                          <FaBolt className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Energy Excellence</h3>
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
                    Energy And Utilities Business Demands Zero Downtime! Find Out How Our Software Testing & QA Services Can Be The Ultimate Aid To Your Business ROI.
                  </h3>
                  <p className="text-lg text-gray-200">
                    Learn More About How QA Could Drive More Value To Your Business!
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Find Out How!
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

export default EnergyUtilitiesPage; 