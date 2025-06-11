import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import MoboraptorsSection from './MoboraptorsSection';
import PinkBackgroundSection from '../common/PinkBackgroundSection';
import SectionTitle from '../common/SectionTittle';
import CommonCTABar from '../common/CommonCTABar';
import HeroesCommon from '../common/HeroesCommon';
import BlogSectionCommon from '../common/BlogSectionCommon';
import NewSectionCommon from '../common/NewSectionCommon';
import NewsletterSectionCommon from '../common/NewsletterSectionCommon';
import OtherOfficesInfo from '../common/OtherOfficesInfo';

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
      {/* Add animated blur effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

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
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}

        <HeroesCommon
          align="left"
          title="RaptorSecurity"
          subtitle="Web Application Security Testing"
          description="Uncover and mitigate vulnerabilities with RaptorSecurity's comprehensive web application assessment."
          buttonText="Get In Touch With Us Today !"
          tag="RaptorScan"
          icon={raptorSecurityIcon}
        />

        {/* Foster Security Scanning Section */}
        <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#020317] to-[#1a0b2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="mb-12">
                <SectionTitle
                  title="Don't Just Scan; Protect and Secure your Web Application with RaptorSecurity"
                  para1='RaptorSecurity is a cutting-edge web application vulnerability assessment tool. It thoroughly examines your web applications and servers, simulating attacks to identify weaknesses like injection flaws, file inclusions, and configuration issues. RaptorSecurity testing tool then provides a detailed report with actionable recommendations, prioritized by severity, to help you secure your digital assets.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* How Does RaptorSecurity Work Section */}
        <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#020317]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 lg:space-y-8">
                  <div>
                    <SectionTitle
                      title="How Does RaptorSecurity Work?"
                      align='left'
                    />
                  </div>

                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Intelligent Crawling:</h4>
                        <p className="text-gray-300 leading-relaxed">
                          The RaptorSecurity Testing Tool begins a methodical crawl over the pages and endpoints of your online application, charting its architecture piece by piece.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Simulated Attacks:</h4>
                        <p className="text-gray-300 leading-relaxed">
                          RaptorSecurity simulates a variety of real-world attack situations, including as file inclusions, injection attacks, cross-site scripting (XSS), and many more. It does this by acting as an advanced security testing framework.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Response Analysis:</h4>
                        <p className="text-gray-300 leading-relaxed">
                          The RaptorSecurity Tool carefully examines how your application reacts to these fictitious attacks, looking for irregularities, mistakes, and possible weak areas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Vulnerability Detection:</h4>
                        <p className="text-gray-300 leading-relaxed">
                          RaptorSecurity identifies particular vulnerabilities by comparing the behavior of the application with the attack simulations. This reveals flaws that might be exploited by hostile actors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Comprehensive Reporting:</h4>
                        <p className="text-gray-300 leading-relaxed">
                          This procedure ends with a thorough vulnerability report that gives you the information you need to rank and resolve the security threats that have been found.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
                    <div className="flex items-center justify-center h-80 lg:h-96">
                      {/* Security Lock Illustration */}
                      <div className="text-center">
                        <svg className="w-24 md:w-32 h-24 md:h-32 mx-auto mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 bg-white/20 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-white/20 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 bg-white/20 rounded w-2/3 mx-auto"></div>
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
        <CommonCTABar
          title="Ready to unleash RaptorSecurity and fortify your web applications?"
          buttonText="Get In Touch With Us Today !"
          onButtonClick={handleCtaClick}
        />

        {/* Actionable Vulnerability Report Section */}
        <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#020317] to-[#1a0b2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 lg:mb-16">
                <SectionTitle
                  title="Actionable Vulnerability Report"
                  para1='The true power of the RaptorSecurity Testing Tool lies in its ability to transform raw data into actionable insights. Upon completing its rigorous assessment, RaptorSecurity generates a comprehensive vulnerability report that serves as your roadmap to remediation.'
                />
              </div>

              {/* Key Elements Header */}
              <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                  Key Elements of the Report:
                </h3>
              </div>

              {/* Three Column Layout */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
                {/* Clear Issue Definitions */}
                <div className="relative group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10 h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 lg:w-20 h-16 lg:h-20 custom-bg-color rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-4">
                        Clear Issue Definitions
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-center">
                      Each identified vulnerability is described in concise terms, providing a clear understanding of the potential security risk.
                    </p>
                  </div>
                </div>

                {/* Prioritized Severity Levels */}
                <div className="relative group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10 h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 lg:w-20 h-16 lg:h-20 custom-bg-color rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-4">
                        Prioritized Severity Levels
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-center">
                      Vulnerabilities are classified into five severity categories (Critical, High, Medium, Low, and Info), which helps you concentrate your attention on the most urgent problems first.
                    </p>
                  </div>
                </div>

                {/* Practical Remediation Guidance */}
                <div className="relative group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:bg-white/10 h-full">
                    <div className="text-center mb-6">
                      <div className="w-16 lg:w-20 h-16 lg:h-20 custom-bg-color rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 lg:w-10 h-8 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-4">
                        Practical Remediation Guidance
                      </h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-center">
                      RaptorSecurity gives you the tools to act right away by providing step-by-step instructions on how to solve issues rather than merely pointing them out.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="text-center mb-8 lg:mb-12">
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  This report serves as your guide for fortifying the defenses of your web application so that you may successfully reduce or eliminate the dangers that have been identified.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <button
                  onClick={handleCtaClick}
                  className="inline-flex items-center px-8 lg:px-10 py-3 lg:py-4 custom-bg-color text-white text-lg font-semibold rounded-full hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
        <CommonCTABar
          title="Don't Leave Security to Chance!"
          buttonText="Get Started With RaptorSecurity Today!"
          onButtonClick={handleCtaClick}
        />

        {/* Security Benefits Section */}
        <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#1a0b2e] to-[#020317]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8">
                  <SectionTitle
                    title="Why Choose RaptorSecurity?"
                    para1="RaptorSecurity stands out as the premier choice for comprehensive web application security testing due to its unique blend of power, precision, and practicality."
                    align='left'
                  />

                  <div className="space-y-6">
                    {/* Benefit 1 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-white">01</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Unmatched Breadth and Depth</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Using its strong Security Testing Framework, the RaptorSecurity Testing Tool thoroughly examines your web apps to find vulnerabilities that other tools might overlook. RaptorSecurity investigates every possible vulnerability, from straightforward injection holes to complex business logic mistakes.
                        </p>
                      </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-white">02</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Actionable Insights</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Not only does RaptorSecurity find vulnerabilities, it gives you the ability to fix them. Its comprehensive reports guarantee that you can quickly reduce hazards by offering concise, practical repair advice
                        </p>
                      </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-white">03</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Adaptable and Scalable</h4>
                        <p className="text-gray-300 leading-relaxed">
                          RaptorSecurity adapts to your demands, whether you have a single web application or a whole ecosystem. It is intended to grow seamlessly, providing efficient testing regardless of the size of your environment
                        </p>
                      </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-white">04</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Prioritized for Efficiency</h4>
                        <p className="text-gray-300 leading-relaxed">
                          The severity-based classification in RaptorSecurity's reports allows you to concentrate your remediation efforts by concentrating on the most serious threats first.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Choose RaptorSecurity, our web app security testing tool, and gain the confidence that comes with knowing your web applications are fortified against the ever-evolving landscape of cyber threats.
                    </p>
                    <button
                      onClick={handleCtaClick}
                      className="px-8 py-3 custom-bg-color hover:opacity-90 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right Illustration */}
                <div className="relative">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center justify-center h-96">
                      <div className="text-center space-y-6">
                        {/* Security Shield */}
                        <div className="w-24 h-24 custom-bg-color rounded-full flex items-center justify-center mx-auto shadow-2xl">
                          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                          </svg>
                        </div>

                        {/* Mobile Device */}
                        <div className="bg-gray-900/50 rounded-3xl p-4 w-48 h-72 mx-auto shadow-2xl backdrop-blur-sm border border-white/10">
                          <div className="custom-bg-color rounded-2xl p-6 h-full flex flex-col items-center justify-center">
                            <h3 className="text-white text-lg font-bold mb-4">Security</h3>
                            <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center mb-4">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                              </svg>
                            </div>
                            <div className="text-xs text-white/80">Secure your login</div>
                          </div>
                        </div>

                        {/* Security Stats */}
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">99.9%</div>
                          <div className="text-sm text-gray-300">Security Coverage</div>
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
        <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-[#020317] to-[#1a0b2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-6">
                  <SectionTitle
                    title="Key Security Assessment Test Cases:"
                    para1="No effort is spared with RaptorSecurity, our in-house security testing tool, to protect your online apps. With the use of a broad range of security assessment test cases and its thorough testing methodology, every potential vulnerability is examined:"
                    align='left'
                  />
                </div>

                {/* Right Side - Stacked Cards */}
                <div className="relative">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    {/* Card Stack */}
                    <div className="absolute inset-0 space-y-3 lg:space-y-4 overflow-y-auto custom-scrollbar">
                      {/* Card 1 - Full TCP Port Scan */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Full TCP Port Scan</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Identifies all open ports on your system, revealing potential entry points for attackers.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 - SQL Injection Testing */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">SQL Injection Testing</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Comprehensive testing for SQL injection vulnerabilities across all database interactions.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 - Cross-Site Scripting (XSS) */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Cross-Site Scripting (XSS)</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Detects reflected, stored, and DOM-based XSS vulnerabilities in web applications.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 4 - Authentication Bypass */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 12H9v4H5v-4H3l3.5-4.5a6 6 0 0111.743-5.743L15 7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Authentication Bypass</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Tests for weaknesses in authentication mechanisms and session management.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 5 - Directory Traversal */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Directory Traversal</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Identifies path traversal vulnerabilities that could expose sensitive files.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 6 - CSRF Protection Testing */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">CSRF Protection Testing</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Validates Cross-Site Request Forgery protection mechanisms across all forms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 7 - File Upload Vulnerabilities */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">File Upload Vulnerabilities</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Tests file upload functionality for malicious file execution and storage issues.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 8 - XML External Entity (XXE) */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">XML External Entity (XXE)</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Identifies XML parsing vulnerabilities that could lead to data disclosure.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 9 - Session Management */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Session Management</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Evaluates session handling, timeout policies, and session fixation vulnerabilities.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 10 - Server-Side Request Forgery */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Server-Side Request Forgery</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Tests for SSRF vulnerabilities that could access internal resources.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 11 - Business Logic Flaws */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Business Logic Flaws</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Identifies application-specific logic vulnerabilities and workflow bypasses.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 12 - API Security Testing */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">API Security Testing</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Comprehensive testing of REST and GraphQL APIs for security vulnerabilities.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 13 - Input Validation Testing */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Input Validation Testing</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Tests all input fields for proper validation and sanitization mechanisms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 14 - Configuration Security */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Configuration Security</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Evaluates server and application configurations for security misconfigurations.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 15 - Cryptographic Implementation */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 12H9v4H5v-4H3l3.5-4.5a6 6 0 0111.743-5.743L15 7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Cryptographic Implementation</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Tests encryption strength, key management, and cryptographic best practices.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Card 16 - Infrastructure Security */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 transform hover:-translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 lg:w-12 h-10 lg:h-12 custom-bg-color rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 lg:w-6 h-5 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-base lg:text-lg font-bold text-white mb-2">Infrastructure Security</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
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

export default RaptorSecurity; 