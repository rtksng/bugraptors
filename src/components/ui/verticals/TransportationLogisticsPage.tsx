import React from 'react';
import { FaTruck, FaShip, FaPlane, FaChartLine, FaBox, FaCogs, FaUsers, FaRoad, FaTachometerAlt, FaTasks, FaShippingFast, FaIndustry } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const TransportationLogisticsPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transport & Logistics Software Testing Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Land, Air, or Sea – Stay Robust At All The Times
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Next-gen Testing Solutions Made To Empower Your Transport Business
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Connect To Know More!
            </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="At BugRaptors, we bring you transport software testing services made to streamline logistics operations for maximum productivity"
            para1="TransportRaptors helps you transform your logistics and transportation operations by enabling comprehensive and end-to-end testing on all your mission-critical transport management systems and platforms."
            para2="Whether you are working on advanced fleet management solutions or need to optimize supply chain visibility, TransportRaptors has all the capabilities you need to attain the Global Transportation Compliance Benchmarks and ensure operational excellence."
          />

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaTasks className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Application Readiness</h3>
              <p className="text-gray-400">Quality, Reliability, Standardization, & More</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Operational Efficiency</h3>
              <p className="text-gray-400">Failover Protection & Performance Benchmarking</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaTruck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Simplified Tracking</h3>
              <p className="text-gray-400">Manage Consignments, Order Status, & RFID</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaTachometerAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Improved Analytics</h3>
              <p className="text-gray-400">A/B Test Performance & Business Analysis</p>
            </div>
          </div>
        </div>

        {/* Real-Time Solutions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Test Automation To Improve Transport & Logistics Software Testing"
                para1="Get the comprehensive assistance you need with transport and logistics software, applications, or website driving business goals."
                para2="TransportRaptors as a comprehensive transport test automation tool gives you all the command you need on working most complex logistics test suites. Irrespective of the application complexity, TransportRaptors brings you best of test management, CI/CD Integrations, and Cloud testing advantage."
              />

              {/* Four Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Better Test Coverage</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Thorough testing support throughout SDLC.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Uniform User Experience</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Staff or Customer, we ensure error-free use.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Data Privacy</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Keep all your customer and package data secure.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Improved ROI</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Meet all your revenue goals through digitization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drive Value Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Drive Value To Your Transport & Logistics Operations"
                para1="TransportRaptors delivers comprehensive testing solutions specifically designed for transportation and logistics businesses to ensure optimal operational performance and customer satisfaction."
                para2="Our specialized testing frameworks cover everything from fleet management systems to complex supply chain platforms, ensuring seamless logistics operations and superior business performance across all operational touchpoints."
              />

              {/* Three Service Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Trucking */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaTruck className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Trucking</h3>
                  <p className="text-gray-300 text-center">Fleet management or vehicle tracking system, we can overcome any inaccuracies</p>
                </div>

                {/* Shipping */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaBox className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Shipping</h3>
                  <p className="text-gray-300 text-center">From managing marine ships to yacht rental app, we own the expertise to test</p>
                </div>

                {/* Aircraft */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaPlane className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Aircraft</h3>
                  <p className="text-gray-300 text-center">Charter services or aircraft management solution, we assure you always fly high</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Connect To Know More!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* QA & Software Testing Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Range of - Our QA & Software Testing Services For Transport & Logistics"
                para1="TransportRaptors delivers comprehensive QA and software testing services specifically designed for transportation and logistics businesses to ensure optimal performance and operational excellence."
                para2="Our specialized testing frameworks cover everything from fleet management systems to complex supply chain platforms, ensuring seamless logistics operations and superior business performance across all operational touchpoints."
              />

              {/* Four Service Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Efficiency Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaChartLine className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Efficiency Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Performance Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Functionality Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Scalability Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Operational Testing
                    </li>
                  </ul>
                </div>

                {/* Automation */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaCogs className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Automation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Enterprise Operations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Invoicing & Payment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Deliveries
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Order Management
                    </li>
                  </ul>
                </div>

                {/* Specialized Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaShippingFast className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Specialized Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Faster Turnaround Time
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Regression Testing Cycle
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Improved Execution Time
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Domain-Based Competency
                    </li>
                  </ul>
                </div>

                {/* Management & More */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaUsers className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Management & More</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Quality Management
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      RFID
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Logistics Control
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Operability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Services Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Complement Your Business Services With Logistics Testing Solutions"
                para1="Since logistics business need accuracy to manage TMS functions at the same time with fleet you enhance your logistics and have for transport and logistics. To function well, we add a touch of quality assurance for your logistics and new way testing."
                para2="Whether you are working on advanced fleet management solutions or need to optimize supply chain visibility, our comprehensive testing frameworks ensure seamless logistics operations and superior business performance."
              />

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content - Two Columns */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Freight Management
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Integration with ERP systems
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Scheduled & Tracking
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Billing & Cost Management
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Reverse Logistics
                      </li>
                      <li className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        Transport Management & Visibility
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Content - Visual Card */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-96 bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg">
                          <FaTruck className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Transport Excellence</h3>
                        <p className="text-purple-200 text-lg">Smart Logistics Solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transport Software Testing - Business Focus Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <SectionTitle
                    title="Transport Software Testing - Redefining Operations & Management"
                    para1="Strong specific test management development logistics transport software QA you need focus is major OR & reporting and data insights they will and we bring you comprehensive value, you need deliver is essential. Better customer experience software and your need effective in recommended quality and software applications."
                    para2="From automated QA to software development standard solutions, our software testing BugRaptors we bring you QA & test automation services designed solutions with-in the operations test aids made to help you succeed."
                  />
                  
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Free QA Assessment Of Your Software
                  </button>
                </div>

                {/* Right Content - Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-80 h-96 bg-gradient-to-br from-purple-800 to-purple-900 rounded-3xl flex items-center justify-center border border-purple-500/30 shadow-2xl shadow-purple-500/20">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg">
                          <FaRoad className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Logistics Innovation</h3>
                        <p className="text-purple-200 text-lg">Advanced Testing Solutions</p>
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
                    Looking For Customized Transport & Logistics Software Testing Services?
                  </h3>
                  <p className="text-lg text-gray-200">
                    Let Us Help You Streamline Your Logistics Operations With Our Dedicated QA & Testing Services.
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

export default TransportationLogisticsPage; 