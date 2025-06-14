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

const RaptorSelect: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorSelect Learn More clicked - redirect to documentation');
  };

  const handleDemoClick = () => {
    console.log('Book Your Free Demo clicked - redirect to demo booking');
  };

  const raptorSelectIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  // Other Products data
  const otherProducts = [
    {
      name: "MoboRaptors",
      description: "Redefining the dynamics of web testing with powerful automation.",
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

  // How RaptorSelect Works data
  const howRaptorSelectWorksItems = [
    {
      title: "Code Generation Logic Active Element Locator Capture",
      description: "RaptorSelect leverages advanced code generation logic to automatically create code snippets based on the elements present on your web page. It ensures a swift and accurate generation process, minimizing manual effort.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Customizable Template",
      description: "We provide a highly customizable Java, JavaScript, & Python template with predefined page objects, allowing for easy adaptation to your specific requirements. This flexibility empowers you to fine-tune the generated code to suit your project's unique needs.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Integration with Testing Frameworks",
      description: "RaptorSelect seamlessly integrates with popular testing frameworks such as Selenium and WebdriverIO. It ensures that you can seamlessly incorporate the generated Page Objects into your existing testing infrastructure.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "Intuitive User Interface",
      description: "Our user-friendly interface is designed to facilitate easy review and modification of the generated page objects. The intuitive layout ensures that even users with minimal coding experience can navigate and make necessary adjustments effortlessly.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "File Generation and Sharing",
      description: "RaptorSelect enables the swift generation of Page Object files in various formats. You can easily download these files for integration into your testing environment. Additionally, we provide convenient options for sharing these generated files on social media platforms or messaging services, simplifying collaboration among team members.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
          title="RaptorSelect - Page Object Generator Plugin"
          description="An All-new Approach To Page Object Generation  "
          buttonText="Learn More"
          tag="RaptorSelect" subtitle={''}        />
        
        {/* Foster Test Automation Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#020317] via-[#1a0b2e] to-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl "></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl  delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="mb-12">
                <SectionTitle
                  title="Foster Test Automation Your Way!"
                  para1='Accelerate the creation of test automation frameworks by generating the necessary code structure for page object pattern implementation through Raptor Select. Testers can define page elements within the generated page objects, enabling faster and more efficient test automation development.'
                  para2='RaptorSelect is an essential tool to improve your workflow. It will generate Page Object Model on the active tab with a single click, provided that all the options and templates are configured. The generated Page Object Model will be saved to the pre-configured download folder, striving to reduce manual involvement.'
                />
              </div>

              {/* Features Section */}
              <div className="mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Features
                  </span>
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      A customizable Java template with pre-defined page objects.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Rapid page object pattern implementation with just a click.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      Define page elements within the generated page objects.
                    </p>
                  </div>
                </div>
              </div>

              {/* Try RaptorSelect Button */}
              <div className="text-left">
                <button
                  onClick={handleCtaClick}
                  className="px-6 sm:px-8 py-3 custom-bg-color hover:opacity-90 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  Try RaptorSelect
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How RaptorSelect Works Section */}
        <PinkBackgroundSection
          title="How RaptorSelect Works?"
          items={howRaptorSelectWorksItems}
        />

        {/* Page Object Generation Benefits Section */}
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317]">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500/8 rounded-full blur-3xl "></div>
            <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500/8 rounded-full blur-3xl  delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <SectionTitle
                      title="Why Must You Choose RaptorSelect?"
                      align='left'
                    />
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Instantly create page objects
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Define page elements, actions, and assertions
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Time-saving and fast QA execution process
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 custom-bg-color rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        Dynamically reduce manual involvement
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
                      {/* Robot/AI Illustration */}
                      <div className="text-center">
                        <svg className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 custom-bg-color opacity-50 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 custom-bg-color opacity-50 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 custom-bg-color opacity-50 rounded w-2/3 mx-auto"></div>
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

export default RaptorSelect; 