import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import WhyChooseSection from '../common/WhyChooseSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import CtaSection from '../common/CtaSection';
import HowItWorksSection from '../common/HowItWorksSection';
import MoboraptorsSection from './MoboraptorsSection';

const RaptorHub: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorHub CTA clicked - redirect to consultation');
  };

  const raptorHubIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  );

  // Core Features
  const coreFeatures = [
    {
      title: "Centralized Dashboard",
      description: "Unified view of all testing activities with comprehensive project tracking and real-time progress monitoring across all teams.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Media Management",
      description: "Seamless media file organization and access with intelligent categorization and version control for all testing assets.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M8 10h8M8 14h8" />
        </svg>
      )
    },
    {
      title: "Team Collaboration",
      description: "Enhanced collaboration tools with real-time communication, task assignment, and seamless workflow coordination.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboard with customizable reports and insights for data-driven testing decisions.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "QA Process Integration",
      description: "Seamless integration with existing QA processes and testing frameworks for enhanced workflow efficiency.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 100-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Resource Management",
      description: "Intelligent resource allocation and management with optimized utilization tracking and capacity planning.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    }
  ];

  // Benefits data
  const benefits = [
    {
      number: "01",
      title: "Enhanced Collaboration",
      description: "Foster seamless team collaboration with integrated communication tools and real-time project updates.",
      additionalDescription: "Accelerate bug identification and resolution through improved team coordination."
    },
    {
      number: "02",
      title: "Centralized Hub",
      description: "Organize and access all media files effortlessly with intelligent categorization and structured documentation.",
      additionalDescription: "Ensure a well-documented approach to testing with comprehensive asset management."
    },
    {
      number: "03",
      title: "Process Optimization",
      description: "Expedite the testing process while augmenting overall quality assurance efforts through streamlined workflows.",
      additionalDescription: "Eliminate external tools and reduce complexity with integrated testing solutions."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Enable comprehensive screenshot and video capture directly within the platform for thorough documentation.",
      additionalDescription: "Save valuable time and enhance testing accuracy with built-in media capture capabilities."
    }
  ];

  // Key Advantages
  const keyAdvantages = [
    {
      title: "Agile Testing Framework",
      description: "Implement agile testing methodologies with flexible workflows and rapid iteration capabilities for modern development cycles.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Effective Testing Management",
      description: "Comprehensive testing management with advanced tracking, scheduling, and resource allocation for maximum efficiency.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Media Integration",
      description: "Revolutionary media management system that seamlessly integrates with your testing workflow for enhanced documentation.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      description: "Effortless integration with existing QA processes and tools to enhance your current workflow without disruption.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  // Other Products data
  const otherProducts = [
    {
      name: "MoboRaptors",
      description: " Driving the intelligence of automation to yoru mobile testing intiatives",
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      hoverColor: "text-cyan-400"
    }
  ];

  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <HeroSection
          logoIcon={raptorHubIcon}
          logoText="RaptorAssist "
          mainHeading="Elevating Testing Efficiency"
          highlightText=""
          description='Innovative & Seamless Project Management Using "Media"'
          ctaText="Get Started"
          onCtaClick={handleCtaClick}
          showMobileIllustration={false}
        />

        {/* Experience Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Experience A New Era Of Agile And Effective Testing
                  </span>
                </h2>
                <div className="max-w-5xl mx-auto space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    By seamlessly integrating with your existing QA processes, RaptorHub enhances collaboration and accelerates bug identification and resolution. It provides a centralized hub where testers can effortlessly organize and access their media files, ensuring a structured and well-documented approach to testing.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    RaptorHub not only expedites the testing process but also augments the overall quality assurance efforts. By enabling testers to capture screenshots and videos directly within the plugin, it eliminates the need for external tools, reducing complexity and saving valuable time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Features It Offer Section */}
        <WhyChooseSection
          title="What Features It Offer?"
          description="Comprehensive media management and testing capabilities designed to streamline your workflow"
          items={[
            {
              number: "01",
              title: "Capture Screenshot",
              description: "Effortlessly take screenshots directly from within the plugin, ensuring a smooth testing process."
            },
            {
              number: "02", 
              title: "Screen Recording",
              description: "Record videos to provide detailed insights into your projects, enhancing collaboration and understanding."
            },
            {
              number: "03",
              title: "Upload Files", 
              description: "Easily upload various media files including images, videos, and documents, allowing for comprehensive project documentation."
            },
            {
              number: "04",
              title: "Flexibility",
              description: "Enjoy the freedom to edit and refine your screen recording content to highlight key insights and streamline your message."
            }
          ]}
        />

        {/* How It Works Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    How It Works?
                  </span>
                </h2>
                <div className="max-w-4xl space-y-6">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    RaptorHub simplifies project management by providing an intuitive interface to create and organize projects. Testers can effortlessly categorize their media files within projects, ensuring easy accessibility and structured organization.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Additionally, users have the option to capture videos and screenshots directly from within the plugin, further streamlining the testing process. Besides, you can also opt for sharing options facilitating seamless collaboration within your organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Must You Choose RaptorHub Section */}
        <HowItWorksSection
          title="Why Must You Choose RaptorHub?"
          items={[
            {
              title: "Efficient Project Management",
              description: "Organize and access your media files within projects ensuring a structured approach to testing.",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )
            },
            {
              title: "Enhanced Collaboration", 
              description: "Share screenshots and videos seamlessly with team members, fostering better understanding and collaboration.",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )
            },
            {
              title: "Streamlined Testing Process",
              description: "Capture screenshots and videos directly within the plugin, eliminating the need for external tools.", 
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )
            },
            {
              title: "Comprehensive Documentation",
              description: "Upload various media files, creating comprehensive documentation of your projects.",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              )
            }
          ]}
        />

        {/* Explore Our Other Products Section */}
        <ExploreProductsSection
          title="Explore Our Other Products"
          subtitle="Discover More Quality Assurance Solutions"
          products={otherProducts}
        />

        {/* Project Success Stories Section */}
        <MoboraptorsSection />

        <Footer />
      </main>
    </div>
  );
};

export default RaptorHub; 