import React from 'react';
import { FaCogs, FaIndustry, FaRobot, FaChartLine, FaShieldAlt, FaUsers, FaBug, FaMobile, FaClipboardCheck, FaCode, FaClock, FaTools, FaCheckCircle, FaRocket, FaGlobe, FaLock, FaSearch, FaCloud, FaDatabase, FaNetworkWired, FaCertificate, FaDesktop, FaFileAlt } from 'react-icons/fa';
import NavigationBar from '../common/NavigationBar';
import ContactUs from '../common/ContactUs';
import Footer from '../common/Footer';
import SectionTitle from '../common/SectionTittle';

const ManufacturingPage: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden text-white">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900/20 to-blue-900/20 py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Manufacturing Testing Services - Building Tomorrow's Production Excellence
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Optimize your manufacturing operations with precision testing services. We ensure zero defects, maximum efficiency, and seamless automation across your entire production ecosystem.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Optimize Your Production
                </button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
                    <FaIndustry className="w-32 h-32 text-purple-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Central Message */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              tag="Excellence in Manufacturing"
              title="We Optimize Your Manufacturing Software, So You Can Focus On Production Innovation"
              para1="Transform your manufacturing processes with cutting-edge testing solutions that ensure seamless operations, maximum uptime, and zero-defect production cycles."
              para2="Our comprehensive quality assurance approach covers everything from IoT integration to supply chain management, delivering manufacturing excellence at scale."
            />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <FaBug />, number: "2,50,000+", label: "Production Bugs Eliminated" },
                { icon: <FaUsers />, number: "150+", label: "Manufacturing Experts" },
                { icon: <FaIndustry />, number: "500+", label: "Plants Optimized" },
                { icon: <FaCogs />, number: "1,200+", label: "Systems Tested" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-xl">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Core Manufacturing Testing Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive testing solutions tailored for modern manufacturing environments
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaRobot className="w-12 h-12" />,
                  title: "Automation Testing",
                  description: "Robotic system validation and process automation testing for seamless production flows."
                },
                {
                  icon: <FaNetworkWired className="w-12 h-12" />,
                  title: "IoT Integration",
                  description: "Connected device testing and industrial IoT ecosystem validation for smart factories."
                },
                {
                  icon: <FaChartLine className="w-12 h-12" />,
                  title: "Production Analytics",
                  description: "Real-time monitoring systems and performance analytics platform testing."
                },
                {
                  icon: <FaShieldAlt className="w-12 h-12" />,
                  title: "Quality Assurance",
                  description: "Comprehensive QA processes ensuring zero-defect manufacturing standards."
                }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20 hover:border-orange-500/40 transition-all duration-300 group">
                  <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Manufacturing Excellence Through Precision Testing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deliver superior manufacturing outcomes with our specialized testing approach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Zero-Defect Production",
                  description: "Eliminate production errors and maintain consistent quality standards across all manufacturing processes."
                },
                {
                  number: "02", 
                  title: "Operational Efficiency",
                  description: "Optimize workflows and reduce downtime through comprehensive system validation and performance testing."
                },
                {
                  number: "03",
                  title: "Smart Integration",
                  description: "Seamlessly integrate IoT devices, automation systems, and analytics platforms for intelligent manufacturing."
                },
                {
                  number: "04",
                  title: "Scalable Solutions",
                  description: "Future-proof your manufacturing operations with testing solutions that grow with your business needs."
                }
              ].map((benefit, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20 hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-purple-800/40 hover:to-blue-800/40 transition-all duration-300 h-full">
                    <div className="text-6xl font-bold text-orange-400/30 mb-4 group-hover:text-orange-400/50 transition-colors duration-300">
                      {benefit.number}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Our QA & Software Testing Services For Manufacturing Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive testing solutions covering every aspect of manufacturing operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Production Systems",
                  icon: <FaCogs className="w-8 h-8" />,
                  services: [
                    "Manufacturing Execution Systems (MES)",
                    "Enterprise Resource Planning (ERP)",
                    "Supply Chain Management",
                    "Inventory Management Systems",
                    "Production Planning & Scheduling"
                  ]
                },
                {
                  title: "Automation & IoT", 
                  icon: <FaRobot className="w-8 h-8" />,
                  services: [
                    "Industrial Automation Testing",
                    "IoT Device Integration",
                    "SCADA System Validation",
                    "Robotic Process Automation",
                    "Sensor Network Testing"
                  ]
                },
                {
                  title: "Quality & Compliance",
                  icon: <FaCertificate className="w-8 h-8" />,
                  services: [
                    "ISO 9001 Compliance Testing",
                    "Six Sigma Implementation",
                    "Regulatory Standards Validation",
                    "Quality Management Systems",
                    "Audit Trail Verification"
                  ]
                },
                {
                  title: "Performance & Security",
                  icon: <FaShieldAlt className="w-8 h-8" />,
                  services: [
                    "Performance Load Testing",
                    "Cybersecurity Assessment",
                    "Data Integrity Validation",
                    "System Reliability Testing",
                    "Disaster Recovery Testing"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-8 border border-purple-500/20 hover:border-orange-500/40 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-orange-400 mr-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <FaCheckCircle className="w-4 h-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two-Column Content Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Manufacturing Testing Services Engineered For Peak Performance
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    At Bugraptors, we understand that modern manufacturing demands precision, efficiency, and unwavering reliability. Our specialized testing services are designed to optimize every aspect of your manufacturing operations, from production line automation to supply chain integration.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our team of manufacturing domain experts combines deep industry knowledge with cutting-edge testing methodologies to deliver solutions that enhance productivity, reduce operational costs, and ensure consistent quality standards.
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center">
                      <FaCheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span>24/7 Production Support</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span>Zero Downtime Testing</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span>Industry 4.0 Ready</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-purple-600/30 to-orange-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/20">
                  <div className="text-center">
                    <FaIndustry className="w-24 h-24 text-purple-300 mx-auto mb-4" />
                    <p className="text-lg text-gray-300">Smart Manufacturing Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready To Transform Your Manufacturing Operations? Let's Build Production Excellence Together!
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our manufacturing experts are available 24/7 to optimize your production systems and ensure zero-defect operations.
              </p>
              <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Start Your Manufacturing Journey!
              </button>
            </div>
          </div>
        </section>

        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default ManufacturingPage; 