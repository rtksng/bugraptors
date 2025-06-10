import React from 'react';
import { FaShoppingCart, FaBuilding, FaTruck, FaChartLine, FaStore, FaBullseye, FaCogs, FaBox } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const RetailCommercePage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Retail Software Testing - Nurturing Successful Digital Transformations
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Adding Quality To Retail UX, Sales And ROI
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              CRM, POS, WMS, & Merchandising, We Do Testing To Maximize Your Business Potential
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Let's Talk About Added Profitability!
            </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="At BugRaptors, We Cater Digital Testing Services To De-risk Your Retail Software Journey"
            para1="RetailRaptors helps you transform your Digital Commerce journey by enabling dynamic and end-to-end testing on all your futuristic retail applications and platforms."
            para2="Whether you are working on advanced omnichannel strategies or need to streamline customer experience optimization, RetailRaptors has all the capabilities you need to attain the Global Retail Compliance Benchmarks."
          />

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Multi-Channel Commerce Testing</h3>
              <p className="text-gray-400">CRM, eCommerce, Kiosk, Mobile POS, & PoS</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaBuilding className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Enterprise Management</h3>
              <p className="text-gray-400">Finance, Accounting, Integration, Master Data Management, & Reporting</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaTruck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Supply Chain Management</h3>
              <p className="text-gray-400">Warehouse, Inventory, & Order Management</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaChartLine className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Retail Operation Automation</h3>
              <p className="text-gray-400">Sales Optimization & Logistics Management</p>
            </div>
          </div>
        </div>

        {/* Real-Time Solutions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Real-Time Solutions For Real-World Problems In Retail Software Testing"
                para1="RetailRaptors as a comprehensive retail test automation tool gives you all the command you need on working most complex retail test suites. Irrespective of the application (E-commerce or Omnichannel), RetailRaptors brings you best of test management, CI/CD Integrations, and Cloud testing advantage."
                para2="Taking Retail into the digital world is all about creating smooth customer interactions across platforms. We help you achieve the integrated experience allowing a growth boost through automated testing excellence."
              />

              {/* Four Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Effortless Transitions</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">We help you make way for cyber resilience with rich test coverage through automation</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Zero Risk Assurance</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">From ERP integrations to CRM applications, we help you enjoy a unified experience</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Continuous Testing Aid</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Accelerate your test process with continuous testing support on QA</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Domain Expertise</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Global brands or departmental store chains, we have the testing expertise you seek</p>
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
                title="Our QA & Software Testing Services For Retail Industry"
                para1="RetailRaptors delivers comprehensive QA and software testing services specifically designed for retail and e-commerce businesses to ensure optimal performance and customer satisfaction."
                para2="Our specialized testing frameworks cover everything from point-of-sale systems to complex omnichannel platforms, ensuring seamless shopping experiences and superior business performance across all customer touchpoints."
              />

              {/* Four Service Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Retail Systems */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaStore className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Retail Systems</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Integrations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Disruption Prevention
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      UX And QA Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Performance Testing
                    </li>
                  </ul>
                </div>

                {/* Targeted Crowd Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaBullseye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Targeted Crowd Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Load Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Front End Operations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Customer Convenience
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Web/ECommerce Testing
                    </li>
                  </ul>
                </div>

                {/* Workflow Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaCogs className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Workflow Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Functionality
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Security Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Production Readiness Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Monitoring & Support Assistance
                    </li>
                  </ul>
                </div>

                {/* Product Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaBox className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Product Testing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Flexibility
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Scalability
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Compatibility
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      End-To-End Quality Assurance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Retail Software Testing - Business Focus Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <SectionTitle
                    title="Retail & Commerce Software Testing - Keeping Your Customer Experience In Line"
                    para1="RetailRaptors helps you transform your Digital Commerce journey by providing advanced retail testing automation that addresses complex customer interaction challenges. From multi-channel commerce platforms to enterprise resource planning systems, RetailRaptors brings you the best of automated testing precision and retail domain expertise."
                    para2="Whether you are working on omnichannel retail strategies or need to streamline customer experience optimization across touchpoints, RetailRaptors has all the capabilities you need to attain Global Retail Compliance Benchmarks and ensure seamless customer journeys."
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
                          <FaShoppingCart className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Retail Excellence</h3>
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
                    Retail And Commerce Business Demands Zero Downtime! Find Out How Our Software Testing & QA Services Can Be The Ultimate Aid To Your Business ROI.
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

export default RetailCommercePage; 