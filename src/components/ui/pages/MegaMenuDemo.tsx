import React from 'react';
import NavigationWithMegaMenu from '../common/NavigationWithMegaMenu';
import Footer from '../common/Footer';

const MegaMenuDemo: React.FC = () => {
  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationWithMegaMenu />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  QA Offerings
                </span>
                <br />
                <span className="text-white">Mega Menu Demo</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Explore our comprehensive suite of quality assurance services through an intuitive mega menu interface. 
                Click on "QA Offerings" in the navigation above to see all our services organized by category.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 custom-bg-color text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                  Try the Mega Menu
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Mega Menu Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our mega menu provides an organized, user-friendly way to navigate through our comprehensive QA services
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Organized Categories</h3>
                  <p className="text-gray-400">Services are grouped into 5 main categories: Core QA, Quality Engineering, Bespoke Testing, Future-Ready Testing, and Test Consultation.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Interactive Submenus</h3>
                  <p className="text-gray-400">Some services have expandable submenus with specialized offerings, making navigation intuitive and detailed.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Responsive Design</h3>
                  <p className="text-gray-400">The mega menu adapts seamlessly to different screen sizes, providing optimal experience on desktop, tablet, and mobile devices.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Visual Hierarchy</h3>
                  <p className="text-gray-400">Clear visual hierarchy with proper spacing, typography, and color coding makes it easy to find the right service quickly.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Call-to-Action</h3>
                  <p className="text-gray-400">Built-in call-to-action buttons in the mega menu encourage user engagement and lead conversion.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                  <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Smooth Animations</h3>
                  <p className="text-gray-400">Smooth hover effects and transitions provide a polished, professional user experience throughout the navigation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Service Categories
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore the five main categories of our QA services available in the mega menu
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Core QA Services</h3>
                  <p className="text-gray-300 mb-4">Essential testing services that form the foundation of quality assurance.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Manual Testing</li>
                    <li>• Functional Testing</li>
                    <li>• API Testing</li>
                    <li>• And 6 more services</li>
                  </ul>
                </div>

                <div className="lg:col-span-1 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Quality Engineering</h3>
                  <p className="text-gray-300 mb-4">Advanced testing methodologies and automation frameworks.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Automation Testing</li>
                    <li>• Performance Testing</li>
                    <li>• Security Testing</li>
                    <li>• And 7 more services</li>
                  </ul>
                </div>

                <div className="lg:col-span-1 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl p-6 border border-cyan-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Bespoke Testing</h3>
                  <p className="text-gray-300 mb-4">Specialized testing solutions for unique business requirements.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Crowd Source Testing</li>
                    <li>• Accessibility Testing</li>
                    <li>• GDPR Compliance</li>
                    <li>• And 2 more services</li>
                  </ul>
                </div>

                <div className="lg:col-span-1 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Future-Ready Testing</h3>
                  <p className="text-gray-300 mb-4">Cutting-edge testing for emerging technologies.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• AI & ML Testing</li>
                    <li>• Blockchain Testing</li>
                    <li>• IoT Testing</li>
                    <li>• And 2 more services</li>
                  </ul>
                </div>

                <div className="lg:col-span-2 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-6 border border-orange-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4">Test Consultation Services</h3>
                  <p className="text-gray-300 mb-4">Strategic consulting and advisory services to optimize your testing approach and build centers of excellence.</p>
                  <ul className="text-sm text-gray-400 space-y-1 grid grid-cols-2 gap-x-4">
                    <li>• Test Center of Excellence (TCOE)</li>
                    <li>• QA Consulting</li>
                    <li>• Test Advisory Services</li>
                    <li>• Tool Feasibility Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How to Use the Mega Menu
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <div className="space-y-6 text-left">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 custom-bg-color rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Hover over "QA Offerings"</h3>
                      <p className="text-gray-300">Move your mouse over the "QA Offerings" menu item in the navigation bar to trigger the mega menu.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 custom-bg-color rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Browse Categories</h3>
                      <p className="text-gray-300">The mega menu displays all five service categories in an organized grid layout for easy browsing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 custom-bg-color rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Explore Submenus</h3>
                      <p className="text-gray-300">Click on services with arrows to expand their submenus and see specialized offerings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 custom-bg-color rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">4</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Take Action</h3>
                      <p className="text-gray-300">Use the call-to-action buttons at the bottom of the mega menu to get consultation or explore all services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MegaMenuDemo; 