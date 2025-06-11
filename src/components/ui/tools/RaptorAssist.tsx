import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import WhyChooseSection from '../common/WhyChooseSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import PinkBackgroundSection from '../common/PinkBackgroundSection';
import MoboraptorsSection from './MoboraptorsSection';
import SectionTitle from '../common/SectionTittle';
import HeroesCommon from '../common/HeroesCommon';
import BlogSectionCommon from '../common/BlogSectionCommon';
import NewSectionCommon from '../common/NewSectionCommon';
import NewsletterSectionCommon from '../common/NewsletterSectionCommon';
import OtherOfficesInfo from '../common/OtherOfficesInfo';

const RaptorAssist: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorAssist CTA clicked - redirect to consultation');
  };

  const handleDemoClick = () => {
    console.log('Book Your Free Demo clicked - redirect to demo booking');
  };

  const raptorAssistIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );

  // Core Features for WhyChooseSection
  const coreFeatures = [
    {
      number: "01",
      title: "Smart Recommendations",
      description: "Receive AI-powered suggestions for test optimization, risk assessment, and quality improvements based on advanced machine learning algorithms.",
      additionalDescription: "Our intelligent system analyzes your testing patterns and provides actionable insights to enhance efficiency."
    },
    {
      number: "02",
      title: "Automated Insights",
      description: "Generate automated reports and insights from testing data to identify patterns, trends, and potential issues before they impact production.",
      additionalDescription: "Transform raw testing data into meaningful analytics that drive informed decision-making."
    },
    {
      number: "03",
      title: "Interactive Guidance",
      description: "Get step-by-step guidance and answers to testing questions with our intelligent assistant that understands your context.",
      additionalDescription: "Access real-time support and expert recommendations tailored to your specific testing scenarios."
    },
    {
      number: "04",
      title: "Quality Optimization",
      description: "Continuously improve your testing processes with AI-driven optimization suggestions and performance monitoring.",
      additionalDescription: "Achieve higher quality outcomes through intelligent automation and predictive analytics."
    }
  ];

  // How RaptorAssist Works data
  const howRaptorAssistWorksItems = [
    {
      title: "Input Requirements",
      description: "Provide specific project details and requirements.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "AI Analysis",
      description: "RaptorAssist's AI engine processes the data to craft tailored test artifacts.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Review and Export",
      description: "Review the generated artifacts and export them for immediate use.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  // Pink Background Section Items
  const pinkSectionItems = [
    {
      title: "Unprecedented Efficiency",
      description: "Experience an 8x acceleration in test case generation, revolutionizing your testing workflow.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Precision and Customization",
      description: "Generate test artifacts precisely tailored to your project's unique needs, ensuring thorough testing coverage.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Time and Resource Saving",
      description: "Say goodbye to manual test case creation and focus on what matters - testing and quality assurance.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "High-Quality Documentation",
      description: "Rest assured knowing that your testing documentation is of the highest caliber, meeting industry standards.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  // Other Products data
  const otherProducts = [
    {
      name: "MoboRaptors",
      description: "Driving the intelligence of automation to your mobile testing initiatives.",
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
        <HeroesCommon
          align="left"
          title="RaptorAssist - Elevating Testing Efficiency"
          description="Unleash the Power of AI in Testing! "
          buttonText="Get Started"
          tag="RaptorAssist" subtitle={''}        />

        {/* Experience Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <SectionTitle
                  title="The Future Of Testing Efficiency Is Here!"
                  para1="The heart of RaptorAssist's power lies in its AI-driven test case generation, which operates at an astounding 8 times the speed of traditional methods. This transformative feature ensures that testing teams can achieve unparalleled productivity gains, focusing their efforts on critical tasks while RaptorAssist handles the meticulous task of test case creation. By seamlessly adapting to specific project requirements, RaptorAssist empowers testing professionals to achieve an unprecedented level of precision in their testing process."
                  para2="In addition to its impressive speed and precision, RaptorAssist significantly streamlines the documentation process. No longer burdened by the manual creation of testing documents, testing teams can now trust RaptorAssist to produce documentation that not only meets but exceeds industry standards. This means that testing professionals can devote more time to actual testing, confident in the knowledge that their documentation is of the highest caliber. With RaptorAssist, testing efficiency reaches new heights, setting a new standard for quality assurance in the software development industry"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <WhyChooseSection
          title="What Features Does It Offer?"
          description="Discover the powerful capabilities that make RaptorAssist the ultimate testing efficiency solution"
          items={[
            {
              number: "01",
              title: "AI-Powered Test Case Generation",
              description: "RaptorAssist harnesses the power of AI to generate test cases at an astounding 8x speed, turbocharging your testing process."
            },
            {
              number: "02",
              title: "Tailored Test Artifacts",
              description: "Craft test plans, use cases, and custom test cases effortlessly, all precisely aligned with your project's unique requirements."
            },
            {
              number: "03",
              title: "High-Quality Documentation",
              description: "Say goodbye to manual document creation. RaptorAssist ensures your testing documentation is of the highest quality, every time."
            }
          ]}
        />

        {/* How RaptorAssist Works Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#020317] via-[#1a0b2e] to-[#020317]">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 sm:w-72 sm:h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 sm:mb-16">
                <SectionTitle
                  title="How It Works?"
                  para1="RaptorAssist simplifies the testing process like never before. With its intuitive interface, users can input specific requirements, and RaptorAssist takes care of the rest. The AI engine analyzes the data and generates comprehensive test artifacts in record time."
                />
              </div>

              {/* Process Flow */}
              <div className="relative">
                {/* Connection Lines */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 transform -translate-y-1/2 z-0"></div>

                {/* Steps */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                  {howRaptorAssistWorksItems.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-20">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Card */}
                      <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 pt-10 sm:pt-12 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                        {/* Icon */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 custom-bg-color rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-gradient-to-br group-hover:from-cyan-500/25 group-hover:to-purple-500/25 transition-all duration-300">
                          <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                            {item.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-center group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                          {item.description}
                        </p>

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>
                      </div>

                      {/* Arrow (except for last item) */}
                      {index < howRaptorAssistWorksItems.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-cyan-400 z-10">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pink Background Section - Why Must You Choose RaptorAssist? */}
        <PinkBackgroundSection
          title="Why Must You Choose RaptorAssist?"
          items={pinkSectionItems}
          buttonText="Book Your Free Demo"
          onButtonClick={handleDemoClick}
        />
        
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

export default RaptorAssist; 