import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import MoboraptorsSection from './MoboraptorsSection';
import PinkBackgroundSection from '../common/PinkBackgroundSection';

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
        <HeroSection
          logoIcon={raptorScanIcon}
          logoText="RaptorScan"
          mainHeading="Advanced Security Scanning Platform"
          highlightText=""
          description="Identify security threats, vulnerabilities, and compliance issues across your applications"
          ctaText="Start Security Scan"
          onCtaClick={handleCtaClick}
          showMobileIllustration={false}
        />

        {/* Foster Security Scanning Section */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Get Over Broken Links Through Automation Using RaptorScan
                  </span>
                </h2>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  RaptorScan is an AI-powered tool designed to identify broken or inaccessible links on your website. It scans your entire website or specific pages to quickly pinpoint 404 errors and other broken link issues that can negatively impact user experience. RaptorScan then generates a comprehensive report detailing the broken links, their locations, and error codes.
                </p>
              </div>

              {/* Try RaptorScan Button */}
              <div className="text-left">
                <button
                  onClick={handleCtaClick}
                  className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Start Security Scan
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* How Does RaptorScan Work Section */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        How Does RaptorScan Work?
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      With RaptorScan, you can easily manage a user-friendly and healthy website. This is how it operates:
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Enter Your Website URL</h4>
                        <p className="text-gray-700 leading-relaxed">
                          We need to simply open the website we want to scan and click on the scan button in the RaptorScan menu of the BugBot chrome extension.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Start the Scan</h4>
                        <p className="text-gray-700 leading-relaxed">
                          The "Scan" button will be clicked to start the procedure. The robust AI engine of RaptorScan will quickly examine the links on your website.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Receive a Detailed Report</h4>
                        <p className="text-gray-700 leading-relaxed">
                          You'll get a thorough report outlining all broken or unreachable links in a matter of minutes. The report contains direct links for easy access and resolution, error codes, and the URLs of the impacted sites.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Fix and Enhance</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Equipped with the report's insights, you can effectively address the issues found, guaranteeing your visitors a seamless and uninterrupted browsing experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      RaptorScan gives you the confidence to securely manage a link-free website, which improves user experience, search engine rankings, and overall website performance.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center justify-center h-96">
                      {/* Dashboard/Analytics Illustration */}
                      <div className="text-center">
                        <svg className="w-32 h-32 mx-auto mb-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 bg-pink-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-pink-200 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 bg-pink-200 rounded w-2/3 mx-auto"></div>
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
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-900/40 rounded-3xl"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Have Questions About RaptorScan?
                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleCtaClick}
                    className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border-4 border-white/20"
                  >
                    Contact Us!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features of RaptorScan Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-rose-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Title */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Features of RaptorScan
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  RaptorScan offers a comprehensive suite of features designed to streamline your website maintenance and improve user experience:
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink-600">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Deep Scanning
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thoroughly analyzes your entire website or specific pages to uncover all broken or inaccessible links.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink-600">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Detailed Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Generates clear and concise reports with the URLs of broken links, affected pages, error codes, and direct links for easy navigation.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink-600">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    No Installation Required
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    RaptorScan works without a hitch inside your browser; no other software is required.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-200 transition-all duration-300 hover:shadow-xl hover:shadow-pink-100/50">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink-600">04</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Single-Click Convenience
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    With only one click, start a scan and get a thorough report.
                  </p>
                </div>
              </div>

              {/* Bottom Message */}
              <div className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  With these powerful features, RaptorScan gives you the ability to manage a smoothly operating website that pleases users and produces superior outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Say No To Broken Links Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-900/40 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-y-36 -translate-x-36"></div>
              <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full translate-y-28 translate-x-28"></div>

              <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="mb-6 md:mb-0 max-w-3xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Say No To Broken Links With Unmatched QA Efficiency
                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleCtaClick}
                    className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border-4 border-white/20 whitespace-nowrap"
                  >
                    Connect With Our Team Today!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Security Benefits Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        Why Choose RaptorScan?
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      RaptorScan stands out as the ideal choice for maintaining a flawless website experience. Here's why
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">01</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Unmatched Ease of Use</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Effortlessly identify broken links with our intuitive interface.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">02</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Peace of Mind</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Rest assured that your website is free of broken links and functioning at its best.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">03</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Efficient Resource Management</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Save time and resources by automating the link checking process.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">04</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Enhanced User Satisfaction</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Ensure a smooth browsing experience for your visitors, boosting engagement and conversions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Don't compromise on your website's performance. Choose RaptorScan and unlock a world of seamless user experiences.
                    </p>
                    <button
                      onClick={handleCtaClick}
                      className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center justify-center h-96">
                      {/* Security Shield Illustration */}
                      <div className="text-center">
                        <svg className="w-32 h-32 mx-auto mb-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 bg-pink-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-pink-200 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 bg-pink-200 rounded w-2/3 mx-auto"></div>
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

        <Footer />
      </main>
    </div>
  );
};

export default RaptorScan; 