import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Footer from '../common/Footer';
import HeroSection from '../common/HeroSection';
import WhyChooseSection from '../common/WhyChooseSection';
import ExploreProductsSection from '../common/ExploreProductsSection';
import CtaSection from '../common/CtaSection';
import HowItWorksSection from '../common/HowItWorksSection';
import MoboraptorsSection from './MoboraptorsSection';
import SectionTitle from '../common/SectionTittle';

const BugBot: React.FC = () => {
  const handleCtaClick = () => {
    // Handle CTA button click - could navigate to contact form or open modal
    console.log('BugBot CTA clicked - redirect to consultation');
  };

  const bugBotIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  // Why Choose BugBot data
  const whyChooseItems = [
    {
      number: "01",
      title: "Instant & Efficient Testing Support",
      description: "BugBot is an extension to simplify communication with pre-built test automation. Quick and super-fast, you get quick access to typical software testing issues and edge cases.",
      additionalDescription: "From form validation to identifying numerous connection boundaries and edge cases that help you advance your test processes and always be Quality Assured."
    },
    {
      number: "02",
      title: "Cross-Platform Support",
      description: "Currently BugBot will help you align with different browsers and web technologies like DotNet, Java, PHP, AI more on Chrome & as a chrome plugin."
    },
    {
      number: "03",
      title: "24/7 Service Assistance",
      description: "We provide the tool for your test automation environment, and continuously plan your QA planning. With competent and QA professionals to help you keep things streamlined and synced with your testing plans and delivery dates following software development lifecycle."
    },
    {
      number: "04",
      title: "Massive Exposure Of A QA Company",
      description: "Choosing BugBot not only brings you the power of AI and Automation, but you also get the authentic support of BugRaptors QA experts. With experience serving 500+ clients and delivering you defect-free high assurance, you are always backed up."
    }
  ];

  // Other Products data
  const otherProducts = [
    {
      name: "MoboRaptors",
      description: "Driving the intelligence of Automation to your mobile testing initiatives.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      hoverColor: "text-purple-400"
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

  // How BugBot Works data
  const howItWorksItems = [
    {
      title: "Code Generation Logic Active Element Locator Capture",
      description: "BugBot leverages advanced code generation logic to automatically create code snippets based on the elements present on your web page. It ensures a swift and accurate generation process, minimizing manual effort.",
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Integration with Testing Frameworks",
      description: "BugBot seamlessly integrates with popular testing frameworks such as Selenium and WebdriverIO. It ensures that you can seamlessly incorporate the generated Page Objects into your existing testing infrastructure.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Intuitive User Interface",
      description: "Our user-friendly interface is designed to facilitate easy review and modification of the generated page objects. The intuitive layout ensures that even users with minimal coding experience can navigate and make necessary adjustments effortlessly.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "File Generation and Sharing",
      description: "BugBot enables the swift generation of Page Object files in various formats. You can easily download these files for integration into your testing environment. Additionally, we provide convenient options for sharing these generated files on social media platforms or messaging services, simplifying collaboration among team members.",
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
          logoIcon={bugBotIcon}
          logoText="BugBot"
          mainHeading="BugBot – Your Personal Testing Assistant"
          highlightText="AI-Powered Analysis"
          description="Exploratory testing was never this easy! Skip off all the hassle of creating common problematic values and edge cases with BugBot. 

"
          ctaText="Know More! or Get More Information"
          onCtaClick={handleCtaClick}
          showMobileIllustration={false}
        />

        {/* The Core Capabilities Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
              <SectionTitle
  title="The Core Capabilities"
  para1="From using the potential of generative AI to automation and visual testing, make your test process smooth with BugBot's dynamic test features."
/>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Test Forms For All Valid & Invalid Use Cases</h3>
                  <p className="text-gray-400">From email addresses to names, credit card info, & other data, validate every detail that enters website forms through automation.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Screen Recording On The Go</h3>
                  <p className="text-gray-400">Feel the convenience of testing with screen recording feature that allows you to add test, record and report test sessions.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Important? We Bring You Note Pin</h3>
                  <p className="text-gray-400">Pin the screen under validation or text to have quick access while making notes of any important test outcomes.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Subscribe To Fuel BugBot Benefits</h3>
                  <p className="text-gray-400">Enjoy the subscription so you have access to tailored test data resources specially crafted to meet unique test requirements.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Harness AI-enabled Visual Testing</h3>
                  <p className="text-gray-400">Use your captured screenshots for quick UI comparison while identifying any visual discrepancies on the go.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* How We Help You Stand Out Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
              <SectionTitle
  title="How We Help You Stand Out With BugBot?"
/>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 custom-bg-color rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50-60%</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Time Savings On Total Testing Process</h3>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 custom-bg-color rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">70%</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Manual Intervention Reduced</h3>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 custom-bg-color rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">60-70%</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Accuracy Under Specific Environments</h3>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 custom-bg-color rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Faster Execution & Delivery</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailor Your Testing Approach Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
              <SectionTitle
  title="Tailor Your Testing Approach"
  para1="Choose the Complete BugBot Suite or Individual AI Testing Tools"
/>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">RaptorGen</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">RaptorHub</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">RaptorAssist</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">RaptorSelect</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">RaptorVision</h3>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group text-center">
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">RaptorInsight</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose BugBot Section */}
        <WhyChooseSection
          title="Why Choose BugBot?"
          description="We follow the detailed test plans and methodologies to tackle the issues from the blockchain application permanently. Our process follows:"
          items={whyChooseItems}
        />

        {/* Drive Quality Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
  title="Drive Quality! Forget Bugs!"
  para1="BugBot brings you higher volume of pre-designed test data which makes it easy to test. From language defect analysis to testing out forms, BugBot gives you instant access to test data to detect validation issues and allows you to foster quality improvement."
/>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection
          title="Let's Make Testing Easy And Exciting"
          buttonText="Connect Today!"
          onButtonClick={handleCtaClick}
        />

        {/* Explore Our Other Products Section */}
        <ExploreProductsSection
          title="Explore Our Other Products"
          subtitle="Empower Your Quality Assurance Initiatives"
          products={otherProducts}
        />

        <MoboraptorsSection />

        <Footer />
      </main>
    </div>
  );
};

export default BugBot; 