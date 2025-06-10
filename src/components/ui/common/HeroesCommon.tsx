import React from 'react';

const HeroesCommon: React.FC = () => {
  const raptorVistaIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );

  return (
    <>
      {/* Custom CSS for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
        `
      }} />

      {/* RaptorVista Framework Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        {/* Background with VR/Tech Elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-purple-900/40 to-transparent z-10"></div>
          
          {/* VR Headset and Tech Elements */}
          <div className="absolute right-0 top-0 w-full h-full">
            {/* VR Headset Illustration */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-96 h-96 opacity-30">
              <div className="relative w-full h-full">
                {/* Main VR Headset Body */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-12 shadow-2xl"></div>
                
                {/* VR Lenses */}
                <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full shadow-lg transform rotate-12"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full shadow-lg transform rotate-12"></div>
                
                {/* Strap */}
                <div className="absolute top-1/2 -left-8 w-32 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full transform rotate-12"></div>
                
                {/* Tech Details */}
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute top-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-40 animate-float"></div>
            <div className="absolute bottom-32 right-20 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-50 animate-float delay-500"></div>
            <div className="absolute top-1/3 right-64 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-60 animate-float delay-1000"></div>
            
            {/* Circuit Lines */}
            <div className="absolute top-40 right-40 w-32 h-1 bg-gradient-to-r from-cyan-400 to-transparent opacity-60"></div>
            <div className="absolute bottom-40 right-48 w-24 h-1 bg-gradient-to-l from-purple-400 to-transparent opacity-60"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute top-16 right-16 w-6 h-6 bg-cyan-400 rounded-full blur-sm opacity-70 animate-pulse"></div>
            <div className="absolute bottom-16 right-56 w-4 h-4 bg-purple-400 rounded-full blur-sm opacity-80 animate-pulse delay-700"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl">
            {/* RaptorVista Logo/Brand */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                {raptorVistaIcon}
              </div>
              <span className="text-white text-2xl font-bold tracking-wide">RaptorVista</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              A Web Automation Framework{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Made For The Future
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl">
              RaptorVista is a leading web test automation framework technology made to overcome the hassle of test automation for all kinds of web solutions. Made after thorough research on the existing test automation frameworks in the market and potential challenges faced by testers, we created a technology that is one of its kind.
            </p>

            {/* CTA Button */}
            <div className="flex items-center space-x-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
                <span className="relative z-10 flex items-center">
                  Consult our Web Automation Experts
                  <svg
                    className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </button>
              
              {/* Secondary Info */}
              <div className="text-gray-300">
                <div className="text-sm">📞 Free Consultation</div>
                <div className="text-xs opacity-80">Get expert advice today</div>
              </div>
            </div>

            {/* Stats or Features */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Test Accuracy</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-500"></div>
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle delay-700"></div>
        </div>
      </section>
    </>
  );
};

export default HeroesCommon; 