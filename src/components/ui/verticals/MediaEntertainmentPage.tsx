import React from 'react';
import { FaVideo, FaGamepad, FaMusic, FaFilm, FaDesktop, FaCogs, FaBrain, FaStar, FaCheckCircle, FaBullseye, FaClipboardList, FaLaptop, FaUsers, FaDatabase, FaTachometerAlt, FaBullhorn, FaPlay, FaShieldAlt } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const MediaEntertainmentPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.2)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Streaming and Broadcasting Through Quality
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              Accessibility, Functionality, Performance, Security, & More. Complete QA & Testing Solution For Media & Entertainment Companies.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Talk To Our QA Experts!
            </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="Get Media Testing Services To Deliver High-Quality Digital Experiences With BugRaptors"
            para1=""
            para2=""
          />

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaCogs className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Struggling For Seamless Viewing? Let Us Handle!</h3>
              <p className="text-gray-400">Improved Release Velocity, Productivity, & Quality</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaDesktop className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Better Device Coverage</h3>
              <p className="text-gray-400">Test across different devices to offer improved connectivity</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Quality Over Every Channel</h3>
              <p className="text-gray-400">Viewing quality or continuity get over all the issues</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaStar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Service Confidence</h3>
              <p className="text-gray-400">Local or global markets, test for reliability</p>
            </div>
          </div>
        </div>

        {/* Media & OTT Testing Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Media & OTT Testing Services For No-Bug Entertainment Solutions"
                para1="Deliver flawless experience to your customers with our vetted team of media and OTT testers. We help you discover all the issues with media streaming or gaming for unexpected usage patterns"
                para2=""
              />

              {/* Four Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Fasten Your Applications</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">We bring you media software testing solutions made for fastening your applications for unhindered customer experience</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">02</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Build Productivity Through Accessibility</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Qualified testing teams to help you meet your productivity needs through improved accessibility on software and applications.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Efficiency At Its Best</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Either integrations or third-party applications, we help you build efficiency through premium QA service</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">04</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">No Breaches Promise</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Wondering how to deal with vulnerabilities? We can help you with advanced security testing support for greater resilience.</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Let's Revolutionize Media & Entertainment Industry With Us!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* QA Automation Testing Services Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="BugRaptors QA Automation Testing Services For Media & Entertainment Businesses"
                para1="We bring you advanced media testing services to boost your media business ROI."
                para2=""
              />

              {/* Four Service Categories */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Core Systems */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaCogs className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Core Systems</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Role-Based Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Testing Across Multiple Handsets and Platforms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Latency, Frame Rate, & Network Connectivity
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      RAM Usage and Consumption
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Graphical User Interface
                    </li>
                  </ul>
                </div>

                {/* Betting */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaGamepad className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Betting</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Event Selection & Blocking of Events
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Odds Compiling or Odds Changes
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Managing Risks, Transaction Integrity on Betting
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Responsible Gaming
                    </li>
                  </ul>
                </div>

                {/* Performance & Load */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaDatabase className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Performance & Load</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      No Delayed Telecasts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Simultaneous User Testing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Testing Across Platforms
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      User Experience
                    </li>
                  </ul>
                </div>

                {/* Focused Oversight */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaBullseye className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Focused Oversight</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      No Disruption
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Reduced Defects
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Structured Testing Methodologies
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      Scalability & Convenience
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Free QA Assessment of Your Media Software
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Media Streaming & OTT Testing Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Media Streaming Testing */}
                <div className="text-left">
                  <SectionTitle
                    title="Media Streaming Testing For Uninterrupted User-Experience"
                    para1="With our media streaming testing solutions, we assure your product meets its business functions offering the ultimate end user experience."
                    para2=""
                    align="left"
                  />
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Multi-platform Parameter Support</strong></span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Earliest Bug Detection & Rectification</strong></span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Cross-platform App Behavior Assurance</strong></span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Accessibility, Performance, & Usability, You Seek</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Right Content - OTT Testing */}
                <div className="text-left">
                  <SectionTitle
                    title="OTT Testing At BugRaptors"
                    para1="Since OTT is the future of entertainment, we help you achieve every benchmark and criteria for positive user-experience through our tailored OTT platform testing services."
                    para2=""
                    align="left"
                  />
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Consistent Delivery:</strong> A consistent output on streaming and user-experience for reliable content delivery</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Media Transfer:</strong> Rapid data exchange with checks on how information is stored, processed, & displayed</span>
                    </li>
                    <li className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                      <span><strong className="text-white">Playback Quality:</strong> We ensure your users never lose their interest with on-demand content availability</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Test Your OTT Platform Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Media & Entertainment Software Testing - Business Focus Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <SectionTitle
                    title="Media & Entertainment Software Testing - Improving Your Telecasts"
                    para1="If you are looking for some testing services for media & entertainment industry, we can help you work on all the telecasts and gaming support. At BugRaptors, we help you have the flexibility that you need with your business operations through advanced testing services."
                    para2="Since media telecasts and gaming users can't wait, overcoming the quality issues need real-time analysis of response time. Our bespoke QA and software testing solutions allow you to take a grip on customer retention through advanced decision-making and optimal response."
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
                          <FaPlay className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Media Excellence</h3>
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
                    Learn How Our Media Testing Solutions Could Aid Your Entertainment & Streaming Business
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Connect Today!
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

export default MediaEntertainmentPage; 