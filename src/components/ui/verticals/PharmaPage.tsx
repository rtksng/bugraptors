import React from 'react';
import { FaPills, FaFlask, FaMicroscope, FaShieldAlt, FaCheckCircle, FaChartBar, FaClock, FaCogs, FaFileAlt, FaHeartbeat, FaUserShield, FaDesktop, FaLaptop } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const PharmaPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="relative min-h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
              filter: 'brightness(0.15)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-left text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pharma Software Testing Services
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-300">
                Keep Your Pharma Systems & Software Fully Compliant
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                Bringing you pharma software testing solutions to meet criticalities surrounding accuracy, compliance, and peace of mind.
              </p>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Talk With Our Experts
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="container mx-auto px-4 py-16">
          <SectionTitle
            title="QA Pharmaceuticals - Keeping Your Operations Uninterrupted"
            para1="When you are in an industry that demands consistency at all times, it becomes necessary to keep up with the regulatory benchmarks and compliance objectives. More importantly, Pharma industry cannot bear customer constraints when stakes are always high."
            para2="At BugRaptors, we help you keep your process and operations alive with complete regulatory assistance and pharmacy quality assurance to keep your operations away from risks. From zero disruptions to efficiency in the system, we help you test your pharma software for the highest quality standards."
          />

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Regulatory Compliance</h3>
              <p className="text-gray-400">FDA, GMP & ISO Standards Compliance</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Data Security & Integrity</h3>
              <p className="text-gray-400">Protect Sensitive Patient & Research Data</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaChartBar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Performance Optimization</h3>
              <p className="text-gray-400">Clinical Systems & Lab Equipment Integration</p>
            </div>

            <div className="bg-custom-transparent rounded-xl p-6 border border-purple-500/10 hover:border-pink-500/30 transition-all duration-300">
              <div className="text-pink-400 mb-4">
                <FaClock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Accelerated Time to Market</h3>
              <p className="text-gray-400">Faster Drug Development & Approval Cycles</p>
            </div>
          </div>
        </div>

        {/* Real-Time Testing Solutions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Comprehensive Pharma Testing Solutions For Critical Healthcare Operations"
                para1="From clinical trial management systems to laboratory information systems, we provide end-to-end testing solutions that ensure your pharmaceutical operations meet the highest standards of quality and compliance."
                para2=""
              />

              {/* Four Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FaPills className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Clinical Trial Systems</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">EDC, CTMS, and patient randomization systems testing</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FaFlask className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Laboratory Information Systems</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">LIMS, analytical instruments, and data management validation</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FaMicroscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Drug Discovery Platforms</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Bioinformatics tools and molecular modeling software testing</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-purple-700/20 hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <FaShieldAlt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">Regulatory Compliance</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">21 CFR Part 11, GxP validation, and audit trail verification</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions We Offer Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Solutions We Offer In - Pharmacy Quality Assurance"
                para1=""
                para2=""
              />

              {/* Seven Solution Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* End-to-End IT Compliance */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaFileAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">End-to-End IT Compliance</h3>
                  <p className="text-gray-300 text-center">The pharma industry needs to go through so many regulations and complications. We help you with end-to-end compliance</p>
                </div>

                {/* Quality Engineering For Digital Health */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaHeartbeat className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">Quality Engineering For Digital Health</h3>
                  <p className="text-gray-300 text-center">Multi-disciplinary quality engineering support to complement your digital health operations and serve consistently to the clients across the globe</p>
                </div>

                {/* Regulatory Assistance */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaUserShield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">Regulatory Assistance</h3>
                  <p className="text-gray-300 text-center">From FDA's computer software assurance guidelines to other regulatory protocols, we help you future proof your digital solutions</p>
                </div>

                {/* Verification & Validation */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaShieldAlt className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">Verification & Validation</h3>
                  <p className="text-gray-300 text-center">Be it manual testing or automated testing services, we help you verify and validate your solutions across all devices and environments</p>
                </div>

                {/* System Software Validation */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaDesktop className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">System Software Validation</h3>
                  <p className="text-gray-300 text-center">When you need to harness the power of enterprise solutions like SAP, ERP, WA, etc. We help you validate integrations for success</p>
                </div>

                {/* UI/UX Testing */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaLaptop className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">UI/UX Testing</h3>
                  <p className="text-gray-300 text-center">We deliver you the confidence of testing well-design, responsive, and highly intuitive solutions for minimum usage barriers</p>
                </div>

                {/* Data Integrity & Monitoring */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaCogs className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-4">Data Integrity & Monitoring</h3>
                  <p className="text-gray-300 text-center">From aligning with data integrity standards to mission-critical systems like MES or SCADA, we never let you fall</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Get Free Audit of Your Pharma Applications!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Automation Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="Reinforce Your Pharma Operations With AI Automation"
                para1="With our End-to-end Testing & IT Compliance Services, we light you the path to unhindered deliveries, richer user-experience, and dynamic operational performance with our advanced test automation solution for pharma industry."
                para2=""
              />

              {/* Three Benefits */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Disinherit Complications</h3>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Suspend Rework</h3>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No Regulatory Delays</h3>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Plan A Conversation On How Your Business Could Thrive.
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Connect Today!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-50/5 to-gray-100/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="What Benefits Pharma Software Testing Could Deliver?"
                para1=""
                para2=""
              />

              {/* Four Benefit Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Benefit 01 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-purple-400">01</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Highest Level of Quality & Compliance</h3>
                  <p className="text-gray-300 text-sm">Improved efficiency of your computerized systems with complete compliance and validation support</p>
                </div>

                {/* Benefit 02 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-purple-400">02</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Gain A Competitive Advantage</h3>
                  <p className="text-gray-300 text-sm">With improved methodologies and technology access, dominate your industry through more efficient deliveries</p>
                </div>

                {/* Benefit 03 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-purple-400">03</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Secure Sensitive Data</h3>
                  <p className="text-gray-300 text-sm">Whether it is any confidential business data or sensitive information relating to health security, we help you improve SDLC & STLC</p>
                </div>

                {/* Benefit 04 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-purple-400">04</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">Unparalleled Digital Health Experience</h3>
                  <p className="text-gray-300 text-sm">Obtain the synergy between your process, approach, methodology, and results through tool, tech, and management assistance</p>
                </div>
              </div>

              {/* Case Studies Button */}
              <div className="text-center mb-12">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Explore our Pharma Software Testing Case Studies/Work
                </button>
              </div>

              {/* Struggling Banner */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Struggling With A Risky Pharma System?
                    </h3>
                    <p className="text-lg text-purple-100">
                      Connect With Our Pharma Domain Testing Team To Get Thorough Assistance On Functionality, Performance, Security, And More For Your Pharma Application Or Enterprise Software.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Connect Today!
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

export default PharmaPage; 