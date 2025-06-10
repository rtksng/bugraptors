import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import MoboraptorsSection from './MoboraptorsSection';
import PinkBackgroundSection from '../common/PinkBackgroundSection';

const RaptorGen: React.FC = () => {
  const handleCtaClick = () => {
    console.log('RaptorGen Learn More clicked - redirect to documentation');
  };

  const handleDemoClick = () => {
    console.log('Book Your Free Demo clicked - redirect to demo booking');
  };

  const raptorGenIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
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

  // How RaptorGen Works data
  const howRaptorGenWorksItems = [
    {
      title: "AI-Powered Test Case Generation",
      description: "RaptorGen leverages advanced artificial intelligence to automatically generate comprehensive test cases based on code analysis, business requirements, and user behavior patterns. Create complete test suites in minutes, not hours.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Smart Test Data Generation",
      description: "Our intelligent data generation engine creates realistic test datasets, edge cases, and boundary conditions automatically. Generate valid and invalid data combinations to ensure comprehensive test coverage across all scenarios.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Code Coverage Analysis",
      description: "RaptorGen analyzes your codebase to identify coverage gaps and generates targeted test cases to achieve maximum code coverage. Ensure every function, branch, and condition is thoroughly tested.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Multi-Framework Support",
      description: "Generate test cases for popular testing frameworks including Jest, Mocha, Pytest, JUnit, and more. Our flexible architecture adapts to your existing testing infrastructure and coding standards.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "Automated Test Export",
      description: "RaptorGen automatically exports generated test cases in your preferred format and integrates seamlessly with CI/CD pipelines. Share test suites across teams and maintain consistency in testing practices.",
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
        <HeroSection
          logoIcon={raptorGenIcon}
          logoText="RaptorGen"
          mainHeading="Intelligent Test Case Generation Platform"
          highlightText=""
          description="Automatically create comprehensive test suites, scenarios, and data sets to maximize coverage"
          ctaText="Generate Tests with RaptorGen"
          onCtaClick={handleCtaClick}
          showMobileIllustration={false}
        />

        {/* Foster Test Generation Section */}
        <section className="py-20 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Title */}
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Revolutionize Your Testing Process!
                  </span>
                </h2>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Transform your testing workflow with RaptorGen's intelligent test case generation capabilities. Our AI-powered platform analyzes your code, understands business logic, and automatically creates comprehensive test suites that ensure maximum coverage and quality.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  RaptorGen eliminates the tedious manual process of writing test cases by leveraging machine learning algorithms to generate realistic test scenarios, edge cases, and data combinations. Accelerate your testing cycle while maintaining the highest quality standards.
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Core Features
                  </span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Automated test case generation based on code analysis.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Smart test data generation with realistic edge cases.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Comprehensive code coverage analysis and optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Try RaptorGen Button */}
              <div className="text-left">
                <button 
                  onClick={handleCtaClick}
                  className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Generate Tests with RaptorGen
                </button>
              </div>
            </div>
          </div>
        </section>
       
        {/* How RaptorGen Works Section */}
        <PinkBackgroundSection
          title="How RaptorGen Works?"
          items={howRaptorGenWorksItems}
          buttonText="Book Your Free Demo"
          onButtonClick={handleDemoClick}
        />

        {/* Test Generation Benefits Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                      <span className="text-gray-700">Why Must You Choose </span>
                      <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        RaptorGen?
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        AI-powered automatic test case generation
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Intelligent test data and edge case creation
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Maximum code coverage optimization
                      </p>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Multi-framework support and seamless integration
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button 
                      onClick={handleCtaClick}
                      className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-center justify-center h-96">
                      {/* Test Generation Illustration */}
                      <div className="text-center">
                        <svg className="w-32 h-32 mx-auto mb-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                        </svg>
                        <div className="space-y-2">
                          <div className="h-2 bg-cyan-200 rounded w-3/4 mx-auto"></div>
                          <div className="h-2 bg-cyan-200 rounded w-1/2 mx-auto"></div>
                          <div className="h-2 bg-cyan-200 rounded w-2/3 mx-auto"></div>
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

export default RaptorGen; 