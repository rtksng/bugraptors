import React from 'react';
import { FaPlane, FaHotel, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaShieldAlt, FaChartBar, FaClock } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const TravelHospitalityPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.2)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel and Hospitality Software Testing Services
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Deliver Hyper-Personalized Hospitality & Delightful Traveling Experience
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-400">
              From frictionless customer experience to exposure and performance, get top-notch assistance on hospitality & travel software testing services.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Let's Connect!
            </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="Dominate Your Travel Domain By Becoming Digital Assured-First"
            para1="The growing need for technology requires sophisticated access to travel and hospitality solutions. With completely strategized and end-to-end testing practices, software testing allows delivering a dynamic user experience for hotels, restaurants, tourism, or recreation service provider."
            para2="From faulty operations to reservation blunders, BugRaptors proactively delivering software testing in the hospitality industry since long which allows you to address all the potential flaws that could hamper your travel & hospitality app. We ensure cost-effective and result-driven assistance."
          />
        </div>

        {/* Testing Solutions Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Testing Solutions For The Travel & Hospitality Sector"
                para1=""
                para2=""
              />

              {/* Six Service Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Functional Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaCheckCircle className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Functional Testing</h3>
                  <p className="text-gray-400 text-center">Web, mobile, or desktop, we can save you from the hassle of functionality testing across different platforms</p>
                </div>

                {/* Automation Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaMapMarkerAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Automation Testing</h3>
                  <p className="text-gray-400 text-center">GUI, user interface, or API, we save you time and keep things streamlined with access to automated testing solutions</p>
                </div>

                {/* Performance Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaChartBar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Performance Testing</h3>
                  <p className="text-gray-400 text-center">Load capacity or software and hardware integration, we deliver performance-driven faultless systems</p>
                </div>

                {/* Usability Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaHotel className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Usability Testing</h3>
                  <p className="text-gray-400 text-center">From user-specific enhancements to potential UI/UX issues, we help you stay focused for maximum ROI</p>
                </div>

                {/* User Acceptance Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaPlane className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">User Acceptance Testing</h3>
                  <p className="text-gray-400 text-center">Cut off the stress of creating an inefficient app with dedicated user acceptability testing solutions</p>
                </div>

                {/* Security & Data Integrity */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaShieldAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">Security & Data Integrity</h3>
                  <p className="text-gray-400 text-center">Keep your software, hardware, and database in sync with comprehensive security testing solutions</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Speak To Our Travel Domain Knowledge Expert!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Benefits We Have Delivered To Clients With Our Travel & Hospitality Software Testing"
                para1="BugRaptors is proactively delivering travel domain software testing in the hospitality industry and has served multiple travel domain clients with finest user experience, boosted ROI and;"
                para2=""
              />

              {/* Four Benefits Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">30 Percent Cost Reduction</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">Up to 5X Faster Deliveries</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">Better Test Workflow</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-center">
                  <div className="w-2 h-16 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">Enhanced Turnaround Time</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Addressing Futuristic Travel Software Development Challenges Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Addressing Futuristic Travel Software Development Challenges"
                para1=""
                para2=""
              />

              {/* Three Challenge Cards */}
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Software That Are Made To Satisfaction */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaHotel className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-6">Software That Are Made To Satisfaction</h3>
                  <p className="text-gray-400 text-center">Since travel and hospitality technology need to be highly responsive to cater to the user requirements related to reservations, payments, and travel options, we help you test your applications for maximum user satisfaction.</p>
                </div>

                {/* Adaptive To Development Changes */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaChartBar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-6">Adaptive To Development Changes</h3>
                  <p className="text-gray-400 text-center">From code quality to performance, we help you with intelligent test execution. Be it the most basic unit testing or platform specific testing requirements related to API or UI, we keep your code in check for effective development.</p>
                </div>

                {/* Keeping User Privacy On Top */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaShieldAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-6">Keeping User Privacy On Top</h3>
                  <p className="text-gray-400 text-center">PCI DSS, GDPR, CCPA, or PII, we keep you compliant. Our testing solutions are data-driven and are designed to take on analyze requests, respond accordingly, and minimize the interactions of the backend systems with the data.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First CTA Banner */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Wondering You Have A Different Concern?
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Get Free QA Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why BugRaptors Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Why BugRaptors For Travel & Hospitality Software/App Testing?"
                para1=""
                para2=""
                align="left"
              />

              {/* Six Benefits in Two Columns */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-300 text-lg">Bespoke testing solutions to complement your business objectives</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-300 text-lg">Automation testing services to save time & budget</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-300 text-lg">Continuous communication and reporting to meet quality standards</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-300 text-lg">Attain all the necessary government regulations & compliance goals</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-300 text-lg">Optimize CI/CD pipeline with improved testing practices</p>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                    <p className="text-gray-300 text-lg">Dynamic engagement models to complement global clientele</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Dive For The Next Level!
                  </h3>
                  <p className="text-lg text-gray-200">
                    Find Out How We Can Complement Your Industry?
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Start A Conversation
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

export default TravelHospitalityPage; 