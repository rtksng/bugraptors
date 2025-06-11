import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import MoboraptorsSection from './MoboraptorsSection';
import PinkBackgroundSection from '../common/PinkBackgroundSection';
import SectionTitle from '../common/SectionTittle';
import HeroesCommon from '../common/HeroesCommon';
import BlogSectionCommon from '../common/BlogSectionCommon';
import NewSectionCommon from '../common/NewSectionCommon';
import NewsletterSectionCommon from '../common/NewsletterSectionCommon';
import OtherOfficesInfo from '../common/OtherOfficesInfo';

const RaptorScan: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorScan Learn More clicked - redirect to documentation');
  };

  const handleDemoClick = () => {
    console.log('Book Your Free Demo clicked - redirect to demo booking');
  };

  const raptorScanIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  // Other Products data
  const otherProducts = [
    {
      name: "MoboRaptors",
      description: "Driving the intelligence of Automation to your mobile testing initiatives.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      hoverColor: "text-green-400"
    },
    {
      name: "RaptorVista",
      description: "Redefining the dynamics of web testing with powerful automation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      hoverColor: "text-orange-400"
    },
    {
      name: "BugBot",
      description: "Simplify software testing with AI-powered test case generation and validation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 7v2m0 4h.01" />
        </svg>
      ),
      hoverColor: "text-red-400"
    }
  ];



  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}


        <HeroesCommon
          align="left"
          title="RaptorScan - Advanced Security Scanning Platform"
          description="Eliminate Broken Links, Enhance User Experience"
          subtitle="RaptorScan is your AI-powered solution to effortlessly identify those pesky broken links."
          buttonText="Get Started Now!"
          tag="RaptorScan"
          icon={raptorScanIcon}
        />

        {/* Foster Security Scanning Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#020317] via-[#1a0b2e] to-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="mb-12 sm:mb-16">
                <SectionTitle
                  title="Get Over Broken Links Through Automation Using RaptorScan"
                  para1='RaptorScan is an AI-powered tool designed to identify broken or inaccessible links on your website. It scans your entire website or specific pages to quickly pinpoint 404 errors and other broken link issues that can negatively impact user experience. RaptorScan then generates a comprehensive report detailing the broken links, their locations, and error codes.'
                />

              </div>


              {/* Try RaptorScan Button */}
              <div className="text-left">
                <button
                  onClick={handleCtaClick}
                  className="px-6 sm:px-8 py-3 custom-bg-color hover:opacity-90 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Start Security Scan
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* How Does RaptorScan Work Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <SectionTitle
                      title="How Does RaptorScan Work?"
                      para1="With RaptorScan, you can easily manage a user-friendly and healthy website. This is how it operates:"
                      align='left'
                    />

                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Enter Your Website URL</h4>
                        <p className="text-gray-300 leading-relaxed">
                          We need to simply open the website we want to scan and click on the scan button in the RaptorScan menu of the BugBot chrome extension.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Start the Scan</h4>
                        <p className="text-gray-300 leading-relaxed">
                          The "Scan" button will be clicked to start the procedure. The robust AI engine of RaptorScan will quickly examine the links on your website.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Receive a Detailed Report</h4>
                        <p className="text-gray-300 leading-relaxed">
                          You'll get a thorough report outlining all broken or unreachable links in a matter of minutes. The report contains direct links for easy access and resolution, error codes, and the URLs of the impacted sites.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Fix and Enhance</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Equipped with the report's insights, you can effectively address the issues found, guaranteeing your visitors a seamless and uninterrupted browsing experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      RaptorScan gives you the confidence to securely manage a link-free website, which improves user experience, search engine rankings, and overall website performance.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                    <div className="flex items-center justify-center h-80 sm:h-96">
                      {/* Dashboard/Analytics Illustration */}
                      <div className="text-center">
                        <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 bg-cyan-400/30 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-cyan-400/30 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 bg-cyan-400/30 rounded w-2/3 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Have Questions About RaptorScan Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#020317] via-[#1a0b2e] to-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 bg-white/5 rounded-full translate-y-18 sm:translate-y-24 -translate-x-18 sm:-translate-x-24"></div>

              <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Have Questions About RaptorScan?
                  </h2>


                </div>
                <div>
                  <button
                    onClick={handleCtaClick}
                    className="px-8 sm:px-10 py-3 sm:py-4 custom-bg-color hover:opacity-90 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border-2 border-white/20"
                  >
                    Contact Us!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features of RaptorScan Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-pink-600/8 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-rose-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Title */}
              <div className="text-center mb-12 sm:mb-16">
                <SectionTitle
                  title="Features of RaptorScan"
                  para1="RaptorScan offers a comprehensive suite of features designed to streamline your website maintenance and improve user experience:"
                />

              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-cyan-400">01</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Deep Scanning
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Thoroughly analyzes your entire website or specific pages to uncover all broken or inaccessible links.
                  </p>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-cyan-400">02</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Detailed Reporting
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Generates clear and concise reports with the URLs of broken links, affected pages, error codes, and direct links for easy navigation.
                  </p>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-cyan-400">03</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    No Installation Required
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    RaptorScan works without a hitch inside your browser; no other software is required.
                  </p>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-cyan-400">04</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                    Single-Click Convenience
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    With only one click, start a scan and get a thorough report.
                  </p>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="text-center">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  With these powerful features, RaptorScan gives you the ability to manage a smoothly operating website that pleases users and produces superior outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Say No To Broken Links Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#020317] via-[#1a0b2e] to-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-54 h-54 sm:w-72 sm:h-72 bg-white/5 rounded-full -translate-y-27 sm:-translate-y-36 -translate-x-27 sm:-translate-x-36"></div>
              <div className="absolute bottom-0 right-0 w-42 h-42 sm:w-56 sm:h-56 bg-white/5 rounded-full translate-y-21 sm:translate-y-28 translate-x-21 sm:translate-x-28"></div>

              <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="mb-6 md:mb-0 max-w-3xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    Say No To Broken Links With Unmatched QA Efficiency
                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleCtaClick}
                    className="px-8 sm:px-10 py-3 sm:py-4 custom-bg-color hover:opacity-90 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border-2 border-white/20 whitespace-nowrap"
                  >
                    Connect With Our Team Today!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Security Benefits Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-rose-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <SectionTitle
                      title="Why Choose RaptorScan?"
                      para1='RaptorScan is the ideal choice for maintaining a flawless website experience. Here are some of the reasons why:'
                      align='left'
                    />

                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 custom-bg-color rounded-lg flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">01</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Unmatched Ease of Use</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Effortlessly identify broken links with our intuitive interface.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 custom-bg-color rounded-lg flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">02</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Peace of Mind</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Rest assured that your website is free of broken links and functioning at its best.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 custom-bg-color rounded-lg flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">03</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Efficient Resource Management</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Save time and resources by automating the link checking process.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 custom-bg-color rounded-lg flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-white">04</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Enhanced User Satisfaction</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Ensure a smooth browsing experience for your visitors, boosting engagement and conversions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6">
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      Don't compromise on your website's performance. Choose RaptorScan and unlock a world of seamless user experiences.
                    </p>
                    <button
                      onClick={handleCtaClick}
                      className="px-6 sm:px-8 py-3 custom-bg-color hover:opacity-90 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                    <div className="flex items-center justify-center h-80 sm:h-96">
                      {/* Security Shield Illustration */}
                      <div className="text-center">
                        <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 bg-cyan-400/30 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-cyan-400/30 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 bg-cyan-400/30 rounded w-2/3 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





        {/* Explore Our Other Products Section */}
        <ExploreProductsSection
          title="Explore Our Other Products"
          subtitle="Discover More AI-Powered Quality Assurance Solutions"
          products={otherProducts}
        />

        {/* Project Success Stories Section */}
        <MoboraptorsSection />
        {/* Blogs Section */}
        <BlogSectionCommon />

        {/* Newsletter/Ebook Subscription Section */}
        <NewsletterSectionCommon />

        {/* Latest News Section */}
        <NewSectionCommon />

        {/* Other Offices Info Section */}
        <OtherOfficesInfo />

        <Footer />
      </main>
    </div>
  );
};

export default RaptorScan; 