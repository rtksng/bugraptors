import React from 'react';
import { 
  FaRocket, 
  FaCertificate, 
  FaCogs, 
  FaChartLine, 
  FaShieldAlt, 
  FaMobile, 
  FaEye,
  FaAward,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaStar
} from 'react-icons/fa';

const frameworks = [
  {
    name: 'RaptorVista',
    icon: <FaEye className="w-5 h-5" />,
    description: 'Analytics & Insights Platform',
    color: 'from-purple-500 to-blue-500'
  },
  {
    name: 'MoboRaptors',
    icon: <FaMobile className="w-5 h-5" />,
    description: 'Mobile Testing Suite',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'RaptorSecurity',
    icon: <FaShieldAlt className="w-5 h-5" />,
    description: 'Security Testing Framework',
    color: 'from-cyan-500 to-purple-500'
  },
  {
    name: 'RaptorInfinity',
    icon: <FaRocket className="w-5 h-5" />,
    description: 'Performance Testing Engine',
    color: 'from-purple-500 to-pink-500'
  }
];

const process = [
  { step: 'Project Assessment', icon: <FaChartLine className="w-4 h-4" /> },
  { step: 'Strategic Planning', icon: <FaCogs className="w-4 h-4" /> },
  { step: 'Flawless Execution', icon: <FaRocket className="w-4 h-4" /> },
  { step: 'Transparent Reporting', icon: <FaEye className="w-4 h-4" /> },
  { step: 'Continuous Improvement', icon: <FaArrowRight className="w-4 h-4" /> }
];

const achievements = [
  { label: '500+ Projects', icon: <FaRocket className="w-5 h-5" /> },
  { label: 'ISTQB Certified', icon: <FaCertificate className="w-5 h-5" /> },
  { label: '98% Success Rate', icon: <FaStar className="w-5 h-5" /> },
  { label: '24/7 Support', icon: <FaUsers className="w-5 h-5" /> }
];

const WhyChooseBugRaptors: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
        
        {/* Subtle decorative elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4 sm:mb-6">
            <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
            <span className="text-xs sm:text-sm font-medium text-purple-200">Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-200">Why Choose</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">BugRaptors</span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Your software's success starts with the right testing partner! Discover what makes us the preferred choice for quality assurance.
          </p>
        </div>

        {/* Main Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Column - Expertise Cards */}
          <div className="space-y-4 sm:space-y-6">
            {/* Advanced Tools Card */}
            <div className="bg-gradient-to-br from-[#0B1120]/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 p-2 sm:p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg sm:rounded-xl border border-purple-500/30">
                  <FaRocket className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Advanced Next-Gen Tools</h3>
                  <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    We specialize in cutting-edge tools like Selenium, WebDriverIO, Cypress, Playwright, and AI/ML libraries to deliver comprehensive testing solutions.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {['Selenium', 'Cypress', 'Playwright', 'AI/ML'].map((tool) => (
                      <span key={tool} className="px-2 sm:px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certified Expertise Card */}
            <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 p-2 sm:p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg sm:rounded-xl border border-yellow-500/30">
                  <FaCertificate className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Certified Expertise</h3>
                  <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    Our ISTQB-certified experts deliver scalable, reliable QA solutions for complex, mission-critical applications with proven methodologies.
                  </p>
                  <div className="flex items-center space-x-2">
                    <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">ISTQB Certified Professionals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Proprietary Frameworks */}
          <div className="bg-gradient-to-br from-[#0B1120]/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="flex-shrink-0 p-2 sm:p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg sm:rounded-xl border border-cyan-500/30">
                <FaCogs className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Our Proprietary Frameworks</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  Our AI-powered, internally developed frameworks significantly enhance testing efficiency and accuracy across all testing domains.
                </p>
              </div>
            </div>

            {/* Framework Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {frameworks.map((framework, index) => (
                <div
                  key={framework.name}
                  className="p-3 sm:p-4 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-lg sm:rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm sm:text-base mb-1">{framework.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{framework.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Process Section - Mobile Optimized */}
        <div className="bg-gradient-to-br from-[#0B1120]/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
          <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0 p-2 sm:p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg sm:rounded-xl border border-green-500/30">
              <FaChartLine className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Transparent, Results-Driven Process</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Our proven methodology ensures consistent quality delivery through structured phases and continuous improvement.
              </p>
            </div>
          </div>

          {/* Process Steps - Mobile Optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-lg sm:rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-400 flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">{item.step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBugRaptors; 