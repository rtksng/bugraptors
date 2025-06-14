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

const RaptorVision: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorVision Learn More clicked - redirect to documentation');
  };

  const handleDemoClick = () => {
    console.log('Book Your Free Demo clicked - redirect to demo booking');
  };

  const raptorVisionIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      hoverColor: "text-purple-400"
    }
  ];

  // Visual Testing Features data
  const visualTestingFeatures = [
    {
      title: "Active Screenshot Capture",
      description: "Implement a mechanism to capture and store screenshots of different builds.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Advanced Image Comparison",
      description: "Develop or integrate visual differentiator tools to compare screenshots for identifying visual differences.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "File Format Compatibility",
      description: "Ensure compatibility with common image formats (e.g., PNG, JPEG) for seamless comparison.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Direct Comparison Option",
      description: "Provide a streamlined option for direct comparison without manual uploading of screenshots.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "User-Friendly Interface",
      description: "Design an intuitive interface for easy screenshot upload, initiation of comparisons, and result visualization.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}


        <HeroesCommon
          align="left"
          title="RaptorVision – AI-based Visual Testing"
          description="Simplifying testing with more speed "
          buttonText="Let's Connect"
          tag="RaptorVision"
          icon={raptorVisionIcon} subtitle={''} />


        {/* Progress Towards Visionary Testing Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#020317] via-[#1a0b2e] to-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl "></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl  delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="mb-12 sm:mb-16">
                <SectionTitle
                  title="Progress Towards Visionary Testing"
                />

              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Visual Testing employs advanced algorithms to compare the expected visual appearance of applications or websites with their actual appearance, pinpointing any discrepancies or defects. The powerful tool covers a wide range of visual elements including text, images, colors, and layout by analyzing screenshots.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  RaptorVision captures and stores screenshots of the current build. Testers can then compare these screenshots with subsequent builds to identify any visual discrepancies or regressions in the user interface. The visual testing feature provides a visual diff tool that highlights differences between screenshots, making it easier to detect even subtle changes in the UI. All in all, visual diff is a utility that allows you to find the differences between two versions of the same file.
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                  <span className="text-radial-gradient">
                    Features That Make RaptorVision A Perfect Choice
                  </span>
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Visual testing includes a visual differentiator tool for comparing files.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Compare previous and new builds by analyzing screenshots.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Testers can use the screenshots to identify any inconsistencies.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Streamlines the task of testers by smoothing out the build comparison process.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Get detailed reports using the visual differentiator tool.
                    </p>
                  </div>
                </div>
              </div>

              {/* Try RaptorVision Button */}
              <div className="text-left">
                <button
                  onClick={handleCtaClick}
                  className="px-6 sm:px-8 py-3 custom-bg-color hover:opacity-90 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Try RaptorVision
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What Enables Smooth Visual Testing Section */}
        <PinkBackgroundSection
          title="What Enables Smooth Visual Testing On RaptorVision?"
          items={visualTestingFeatures}
          buttonText="Book Your Free Demo"
          onButtonClick={handleDemoClick}
        />

        {/* Why Must You Choose RaptorVision Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl "></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/8 rounded-full blur-3xl  delay-1000"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>


                    <SectionTitle
                      title="Why Must You Choose RaptorVision?"
                      align="left"
                    />
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Efficiently compares two versions of the same file.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Facilitates finding differences between builds or files.
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Automatically captures screenshots of builds.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6">
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
                      {/* VR/AR Testing Illustration */}
                      <div className="text-center">
                        <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default RaptorVision; 