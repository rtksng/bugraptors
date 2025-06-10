import React from 'react';
import { FaUtensils, FaTruck, FaMobileAlt, FaLeaf, FaCogs, FaPlay, FaChartLine, FaSync, FaSave, FaUsers } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const FoodBeveragesPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.2)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Food and Beverages Software Testing
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Test Automation For Food Delivery Apps & Software
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Align with the changing customer preferences while cutting off any risks or potential performance failures.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Connect With Our FMCG Testing Experts
            </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="Make Your FMCG Digital Initiatives Thrive With Quality"
            para1="With time, the food industry has gone through extensive digitization. From supply chain solutions to food delivery applications, everything from manufacturing to delivery has been transformed. However, the growing utility and expanding operations have created space for strains surrounding daily distribution, seasonal spikes, and varying user demand."
            para2="At BugRaptors, we help you strengthen your food and beverages software with quality assurance and software testing. From uninterrupted operations to sustaining customer service, we help you accelerate your development and deployment process."
          />
        </div>

        {/* How Software Testing Complements Your FMCG Business Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="How Software Testing and QA Complements Your FMCG Business?"
                para1=""
                para2=""
              />

              {/* Three Benefits Cards */}
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">Say No To System Lag</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">Stay Prepared For Volume Spikes</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">Full Manual & Test Automation Support</h3>
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
                    Wondering What Else You Can Gain?
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Reach Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BugRaptors Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Why Choose BugRaptors For FMCG Software Testing"
                para1=""
                para2=""
              />

              {/* Six Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaCogs className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Continuous Testing</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Streamline your test initiatives with CI/CD workflows while working on potential third-party integrations</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaPlay className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Orchestrated Test Execution</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">We help you create customized and highly configurable test suites that complement your test requirements</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Volume Testing</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">No matter how much you want to scale, we help you gain zero disruptions and most accurate performance</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaSync className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Support Through Change</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Develop, upgrade, test and deploy as we help you visualize your product journey without any latency</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaSave className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Save Your Resources</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">From specialized scripts to dynamic customizations, we help you test by saving your time, budget, and resources</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Unmatched Expertise</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">Get the immediate and expert assistance from our QA professionals who are always available to collaborate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Speak To Our FMCG Domain QA Consultants
                  </h3>
                  <p className="text-purple-100 text-lg">
                    Plan A Conversation With Our Experts To Find How We Can Help You Improve Your Food & Beverage Software/Application
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Let's Plan A Call
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

export default FoodBeveragesPage; 