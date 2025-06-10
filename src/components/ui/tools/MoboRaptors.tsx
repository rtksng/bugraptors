import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import MoboraptorsSection from './MoboraptorsSection';
import HeroSection from '../common/HeroSection';
import SectionTitle from '../common/SectionTittle';

const MoboRaptors: React.FC = () => {
  const handleCtaClick = () => {
    // Handle CTA button click - could navigate to contact form or open modal
    console.log('CTA clicked - redirect to consultation');
  };

  const mobileIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );

  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <HeroSection
          logoIcon={mobileIcon}
          logoText="MoboRaptors"
          mainHeading="Transforming Mobile Solutions With Advanced"
          highlightText="Automation"
          description="Bringing you one of the most advanced mobile test automation frameworks made to accelerate productivity and test effectiveness. From overcoming software challenges to empowering digital businesses, MoboRaptors is our proprietary mobile test automation framework."
          ctaText="Consult Our Mobile Automation Experts"
          onCtaClick={handleCtaClick}
          showMobileIllustration={true}
        />

        {/* Quality and Speed Section */}

        <SectionTitle

          title="Quality and Speed with MoboRaptors"
          para1="MoboRaptors helps you transform your Digital Transformation journey by aiding dynamic and end-to-end testing on all your futuristic mobile app projects."
          para2="Whether you are working on advanced agile methodology or need to streamline DevOps culture, MoboRaptors has all the capabilities you need to attain the Global Compliance Benchmarks."
         
        />


        {/* Third-Party Integrations Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <SectionTitle
                title="Third-Party Integrations"
                para1="MoboRaptors as a mobile test automation tool gives you all the command you need on working most complex test suites. Irrespective of the application(Conventional or Hybrid), MoboRaptors brings you best of test management, CI/CD Integrations, and Cloud testing advantage."
              />


              {/* Integration Logos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-blue-400">JIRA</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-green-400">TestRail</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-red-400">Jenkins</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-orange-400">BrowserStack</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 flex items-center justify-center h-24">
                  <div className="text-2xl font-bold text-purple-400">SAUCE LABS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power of Four in One Framework Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Blob */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                  <SectionTitle
                    title="Power of four in one Mobile App Automation Framework"
                    para1="Power of three in one Mobile App Automation Framework From proceeding in modules or leading through keywords, feeding on data or user behavior, MoboRaptors brings you the best of Modular Driven Framework, Keyword Driven Framework, Data-Driven Framework, and Behaviour Driven Framework."
                  />

                </div>

                {/* Right Content - Framework List */}
                <div className="relative">
                  <div className="space-y-6">
                    <div className="flex items-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        01
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Modular Driven Framework</h3>
                        <p className="text-gray-400">Organized test structure with reusable modules for efficient test maintenance and scalability.</p>
                      </div>
                    </div>

                    <div className="flex items-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        02
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Keyword Driven Framework</h3>
                        <p className="text-gray-400">Simplified test creation using keywords that abstract complex operations for non-technical users.</p>
                      </div>
                    </div>

                    <div className="flex items-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        03
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Behavior Driven Framework</h3>
                        <p className="text-gray-400">BDD approach enabling collaboration between technical and business teams through readable scenarios.</p>
                      </div>
                    </div>

                    <div className="flex items-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 group-hover:scale-110 transition-transform duration-300">
                        04
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Data Driven Framework</h3>
                        <p className="text-gray-400">Execute tests with multiple data sets from external sources for comprehensive coverage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Vision */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Vision
                    </span>
                  </h3>
                  <h4 className="text-2xl font-semibold text-white mb-6">
                    Infusing Quality Beyond Verticals
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To align mobile technologies with quality by pertaining to user requirements, and business objectives using intelligent test automation
                  </p>
                </div>

                {/* Mission */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Mission
                    </span>
                  </h3>
                  <h4 className="text-2xl font-semibold text-white mb-6">
                    Creating Sustainable Value For Customers
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To ensure every user enjoys quality mobile technology & every business could foster QA through automation testing
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-16">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Book Free Consultation With Our QA Experts
                    <svg
                      className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Next-Gen Mobile Test Automation Framework Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              <SectionTitle

                title=" Next-Gen Mobile Test Automation Framework"
                para1=" While the hassle of taking the product quickly into the market often makes mobile development companies skip or pursue incomplete testing, the selection of right test tools and skills is another extreme challenge. On top of that, the heavy investment made on resource accommodation and tools procurement to foster mobile test automation poses another challenge to the organizations. BugRaptors as a test automation framework allows users with diverse mobile testing goals enjoy all the ease of testing."

              />



              <h3 className="text-2xl font-semibold text-white text-center mb-16">
                Our best-in-class mobile test automation framework offers
              </h3>

              {/* Framework Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Convenience of Use & Customization
                      </h4>
                      <p className="text-gray-400 text-sm">User-friendly interface with extensive customization options for diverse testing needs.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        10X Execution
                      </h4>
                      <p className="text-gray-400 text-sm">Dramatically accelerated test execution speed for faster release cycles.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Quick Installation
                      </h4>
                      <p className="text-gray-400 text-sm">Streamlined setup process to get your testing environment ready in minutes.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Uncomplicated Learning Curve
                      </h4>
                      <p className="text-gray-400 text-sm">Intuitive design that allows teams to become productive quickly without extensive training.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Robust Test Assistance
                      </h4>
                      <p className="text-gray-400 text-sm">Comprehensive support system with intelligent test suggestions and debugging tools.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Load Test Integration
                      </h4>
                      <p className="text-gray-400 text-sm">Seamless integration with load testing tools for comprehensive performance validation.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Extensive Database Support
                      </h4>
                      <p className="text-gray-400 text-sm">Wide compatibility with various database systems for comprehensive data validation.</p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start">
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full mr-4 mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        Cut Off Driver Initialization
                      </h4>
                      <p className="text-gray-400 text-sm">Optimized driver management that eliminates initialization overhead for faster testing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* How MoboRaptors Squares Up Mobile Test Automation Challenges Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle
                title="How MoboRaptors Squares Up Mobile Test Automation Challenges"
                para1="Built with industry expertise, MoboRaptors brings along all the proficiency from the testing industry to nurture automated end-to-end testing. Whether you need to pursue third-party integrations or you need help cope up with expanding finances, MoboRaptors helps you take over all the technical, functional, and financial challenges."
              />

              {/* Challenges Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Intelligent Integration</h3>
                  <p className="text-gray-400">Supports a variety of tools, including Selenium, etc.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Rapid Customization</h3>
                  <p className="text-gray-400">Hybrid framework model to intensify testing</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Rich Compatibility</h3>
                  <p className="text-gray-400">Multiple OS/Browser Support</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Better Test Workflow</h3>
                  <p className="text-gray-400">Effective CI/CD Integration</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sophisticated Testing</h3>
                  <p className="text-gray-400">Ease to run across multiple test scenarios</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">API Integration</h3>
                  <p className="text-gray-400">Move into cloud with ease</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Flexible Execution</h3>
                  <p className="text-gray-400">Uninterrupted End-to-end testing</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Expandable</h3>
                  <p className="text-gray-400">Capable of handling scalable test requirements</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cost-effective</h3>
                  <p className="text-gray-400">No massive up-front cost involved</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Easy Database Linking</h3>
                  <p className="text-gray-400">Use your legacy data for future advantage</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Reporting Repositories</h3>
                  <p className="text-gray-400">Allure reporting, extent report, cucumber report, & more</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Independent Test Data</h3>
                  <p className="text-gray-400">Have maverick advantage to your test goals</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Extensive Code Reuse</h3>
                  <p className="text-gray-400">Get the ability to save your efforts</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Hybrid Testing</h3>
                  <p className="text-gray-400">Perform Nonfunctional testing on multiple environments</p>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Making a Difference with Every Project Section */}
        <MoboraptorsSection />

        <Footer />
      </main>
    </div>
  );
};

export default MoboRaptors; 