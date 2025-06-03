import React from 'react';
import { 
  FaRocket, 
  FaPlay, 
  FaArrowRight,
  FaCheckCircle,
  FaStar
} from 'react-icons/fa';
import heroVideo from '../../assets/herovideo.mp4';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-16 sm:py-20 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      {/* Simplified Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-600/15 to-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-radial from-indigo-900/8 to-transparent rounded-full"></div>
      </div>

      {/* Subtle Grid Pattern - Mobile Optimized */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 xl:gap-24 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 max-w-3xl order-2 lg:order-1">
            {/* Enhanced Badge - Mobile Optimized */}
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm">
              <FaRocket className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base font-medium text-purple-200">AI-Powered Testing Solutions</span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 leading-tight">
                  QA Engineering
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-purple-200 to-white mt-1 sm:mt-2">
                  Services
                </span>
              </h1>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">Enhanced by AI</span>
                  <span className="text-purple-300 mx-2 sm:mx-4">•</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">Driven by Automation</span>
                  <span className="text-purple-300 mx-2 sm:mx-4">•</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">Delivered by Experts</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
              <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl w-full sm:w-auto cursor-pointer">
                <span className="relative z-10 flex items-center justify-center text-base sm:text-lg">
                  Get Started
                  <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-300 w-full sm:w-auto cursor-pointer">
                <span className="flex items-center justify-center text-base sm:text-lg">
                  Watch Demo
                  <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Video Container - Mobile Optimized */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 w-full max-w-lg lg:max-w-none">
              <div className="relative">
                <div className="relative z-10 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <video
                    className="w-full h-auto object-cover filter brightness-110 contrast-110"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ transform: 'scaleX(-1)' }}
                  >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 