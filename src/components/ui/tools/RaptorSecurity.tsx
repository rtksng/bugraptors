import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import MoboraptorsSection from './MoboraptorsSection';
import PinkBackgroundSection from '../common/PinkBackgroundSection';

const RaptorSecurity: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorSecurity Learn More clicked - redirect to documentation');
  };

  const handleDemoClick = () => {
    console.log('Book Your Free Demo clicked - redirect to demo booking');
  };

  const raptorSecurityIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 7v2m0 4h.01" />
    </svg>
  );

  // Other Products data
  const otherProducts = [
    {
      name: "BugBot",
      description: "Simplify software testing with AI-powered test case generation and validation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      hoverColor: "text-green-400"
    },
    {
      name: "RaptorSelect",
      description: "An All-new Approach To Page Object Generation",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      hoverColor: "text-orange-400"
    },
    {
      name: "RaptorScan",
      description: "Advanced security and vulnerability scanning platform.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      hoverColor: "text-pink-400"
    }
  ];

  // How RaptorSecurity Works data
  const howRaptorSecurityWorksItems = [
    {
      title: "Penetration Testing Automation",
      description: "RaptorSecurity employs advanced penetration testing techniques to simulate real-world cyberattacks. Our automated testing framework identifies vulnerabilities and attack vectors before malicious actors can exploit them.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 7v2m0 4h.01" />
        </svg>
      )
    },
    {
      title: "Comprehensive Vulnerability Assessment",
      description: "Our platform conducts thorough vulnerability assessments across web applications, networks, and infrastructure. Generate detailed security reports with prioritized remediation recommendations and risk assessments.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Security Compliance Framework",
      description: "RaptorSecurity ensures your applications meet industry security standards including OWASP Top 10, NIST, SOC 2, and regulatory compliance requirements. Automated checks maintain continuous compliance monitoring.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Security Command Center",
      description: "Our centralized security dashboard provides real-time visibility into your security posture. Monitor threats, track remediation progress, and coordinate security responses from a single interface.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Security Report Generation",
      description: "RaptorSecurity automatically generates comprehensive security reports with executive summaries, technical details, and remediation roadmaps. Export reports in multiple formats for stakeholders and audit purposes.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      {/* Add styles for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
        }
      `}</style>
      
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <HeroSection
          logoIcon={raptorSecurityIcon}
          logoText="RaptorSecurity"
          mainHeading="Comprehensive Security Testing Platform"
          highlightText=""
          description="Safeguard your applications with advanced penetration testing and security compliance tools"
          ctaText="Secure with RaptorSecurity"
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
                    Don't Just Scan; Protect and Secure your Web Application with RaptorSecurity
                  </span>
                </h2>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  RaptorSecurity is a cutting-edge web application vulnerability assessment tool. It thoroughly examines your web applications and servers, simulating attacks to identify weaknesses like injection flaws, file inclusions, and configuration issues. RaptorSecurity testing tool then provides a detailed report with actionable recommendations, prioritized by severity, to help you secure your digital assets.
                </p>
              </div>

              {/* Try RaptorSecurity Button */}
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

        {/* How Does RaptorSecurity Work Section */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        How Does RaptorSecurity Work?
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Intelligent Crawling:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          The RaptorSecurity Testing Tool begins a methodical crawl over the pages and endpoints of your online application, charting its architecture piece by piece.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Simulated Attacks:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          RaptorSecurity simulates a variety of real-world attack situations, including as file inclusions, injection attacks, cross-site scripting (XSS), and many more. It does this by acting as an advanced security testing framework.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Response Analysis:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          The RaptorSecurity Tool carefully examines how your application reacts to these fictitious attacks, looking for irregularities, mistakes, and possible weak areas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Vulnerability Detection:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          RaptorSecurity identifies particular vulnerabilities by comparing the behavior of the application with the attack simulations. This reveals flaws that might be exploited by hostile actors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Comprehensive Reporting:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          This procedure ends with a thorough vulnerability report that gives you the information you need to rank and resolve the security threats that have been found.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center justify-center h-96">
                      {/* Security Lock Illustration */}
                      <div className="text-center">
                        <svg className="w-32 h-32 mx-auto mb-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
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
                    Ready to unleash RaptorSecurity and fortify your web applications?

                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleCtaClick}
                    className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border-4 border-white/20"
                  >
                    Get In Touch With Us Today !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

     {/* Actionable Vulnerability Report Section */}
     <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Actionable Vulnerability Report
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  The true power of the RaptorSecurity Testing Tool lies in its ability to transform raw data into actionable insights. Upon completing its rigorous assessment, RaptorSecurity generates a comprehensive vulnerability report that serves as your roadmap to remediation.
                </p>
              </div>

              {/* Key Elements Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Key Elements of the Report:
                </h3>
              </div>

              {/* Three Column Layout */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {/* Clear Issue Definitions */}
                <div className="relative group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:shadow-xl h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-purple-600 mb-4">
                        Clear Issue Definitions
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Each identified vulnerability is described in concise terms, providing a clear understanding of the potential security risk.
                    </p>
                  </div>
                </div>

                {/* Prioritized Severity Levels */}
                <div className="relative group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:shadow-xl h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-purple-600 mb-4">
                        Prioritized Severity Levels
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-center">
                      Vulnerabilities are classified into five severity categories (Critical, High, Medium, Low, and Info), which helps you concentrate your attention on the most urgent problems first.
                    </p>
                  </div>
                </div>

                {/* Practical Remediation Guidance */}
                <div className="relative group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 group-hover:shadow-xl h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-purple-600 mb-4">
                        Practical Remediation Guidance
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-center">
                      RaptorSecurity gives you the tools to act right away by providing step-by-step instructions on how to solve issues rather than merely pointing them out.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  This report serves as your guide for fortifying the defenses of your web application so that you may successfully reduce or eliminate the dangers that have been identified.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Your Security Report
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
                    Don't Leave Security to Chance!

                  </h2>
                </div>
                <div>
                  <button
                    onClick={handleCtaClick}
                    className="px-10 py-4 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border-4 border-white/20 whitespace-nowrap"
                  >
                    Get Started With RaptorSecurity Today!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Benefits Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                        Why Choose RaptorSecurity?
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      RaptorSecurity stands out as the premier choice for comprehensive web application security testing due to its unique blend of power, precision, and practicality.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold text-white">01</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">Unmatched Breadth and Depth</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Using its strong Security Testing Framework, the RaptorSecurity Testing Tool thoroughly examines your web apps to find vulnerabilities that other tools might overlook. RaptorSecurity investigates every possible vulnerability, from straightforward injection holes to complex business logic mistakes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold text-white">02</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">Actionable Insights</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Not only does RaptorSecurity find vulnerabilities, it gives you the ability to fix them. Its comprehensive reports guarantee that you can quickly reduce hazards by offering concise, practical repair advice
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold text-white">03</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">Adaptable and Scalable</h4>
                          <p className="text-gray-700 leading-relaxed">
                            RaptorSecurity adapts to your demands, whether you have a single web application or a whole ecosystem. It is intended to grow seamlessly, providing efficient testing regardless of the size of your environment
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                            <span className="text-lg font-bold text-white">04</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-3">Prioritized for Efficiency</h4>
                          <p className="text-gray-700 leading-relaxed">
                            The severity-based classification in RaptorSecurity's reports allows you to concentrate your remediation efforts by concentrating on the most serious threats first.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Choose RaptorSecurity, our web app security testing tool, and gain the confidence that comes with knowing your web applications are fortified against the ever-evolving landscape of cyber threats.
                    </p>
                    <button
                      onClick={handleCtaClick}
                      className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center justify-center h-96">
                      {/* Mobile Security Illustration */}
                      <div className="text-center">
                        <div className="relative bg-gray-800 rounded-3xl p-4 mx-auto w-48 h-80 shadow-2xl">
                          <div className="bg-blue-600 rounded-2xl p-6 h-full flex flex-col items-center justify-center">
                            <h3 className="text-white text-lg font-bold mb-4">Security</h3>
                            <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center mb-4">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                              </svg>
                            </div>
                            <div className="text-xs text-white/80">Secure your login</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

   

        {/* Key Security Assessment Test Cases Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Key Security Assessment Test Cases:
                    </span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    No effort is spared with RaptorSecurity, our in-house security testing tool, to protect your online apps. With the use of a broad range of security assessment test cases and its thorough testing methodology, every potential vulnerability is examined:
                  </p>
                </div>

                {/* Right Side - Stacked Cards */}
                <div className="relative">
                  <div className="relative h-96 overflow-hidden">
                    {/* Card Stack */}
                    <div className="absolute inset-0 space-y-4 overflow-y-auto custom-scrollbar">
                      {/* Card 1 - Full TCP Port Scan */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Full TCP Port Scan</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Identifies all open ports on your system, revealing potential entry points for attackers.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 - SQL Injection Testing */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">SQL Injection Testing</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Comprehensive testing for SQL injection vulnerabilities across all database interactions.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 - Cross-Site Scripting (XSS) */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Cross-Site Scripting (XSS)</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Detects reflected, stored, and DOM-based XSS vulnerabilities in web applications.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4 - Authentication Bypass */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 12H9v4H5v-4H3l3.5-4.5" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Authentication Bypass</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Tests for weaknesses in authentication mechanisms and session management.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 5 - Directory Traversal */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Directory Traversal</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Identifies path traversal vulnerabilities that could expose sensitive files.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 6 - CSRF Protection Testing */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">CSRF Protection Testing</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Validates Cross-Site Request Forgery protection mechanisms across all forms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 7 - File Upload Vulnerabilities */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">File Upload Vulnerabilities</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Tests file upload functionality for malicious file execution and storage issues.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 8 - XML External Entity (XXE) */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">XML External Entity (XXE)</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Identifies XML parsing vulnerabilities that could lead to data disclosure.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 9 - Session Management */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Session Management</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Evaluates session handling, timeout policies, and session fixation vulnerabilities.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 10 - Server-Side Request Forgery */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.0s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Server-Side Request Forgery</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Tests for SSRF vulnerabilities that could access internal resources.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 11 - Business Logic Flaws */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.1s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Business Logic Flaws</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Identifies application-specific logic vulnerabilities and workflow bypasses.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 12 - API Security Testing */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">API Security Testing</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Comprehensive testing of REST and GraphQL APIs for security vulnerabilities.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 13 - Input Validation Testing */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.3s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Input Validation Testing</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Tests all input fields for proper validation and sanitization mechanisms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 14 - Configuration Security */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Configuration Security</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Evaluates server and application configurations for security misconfigurations.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 15 - Cryptographic Implementation */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 12H9v4H5v-4H3l3.5-4.5a6 6 0 0111.743-5.743L15 7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Cryptographic Implementation</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Tests encryption strength, key management, and cryptographic best practices.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 16 - Infrastructure Security */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{animationDelay: '1.6s'}}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">Infrastructure Security</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              Assesses underlying infrastructure security including network and server hardening.
                            </p>
                          </div>
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

export default RaptorSecurity; 