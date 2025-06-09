import React from 'react';

const EngagementModelHero: React.FC = () => {
  return (
    <section className="relative py-20 flex items-center justify-center overflow-hidden bg-[#020317]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Team collaboration background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(2, 3, 23, 0.7), rgba(2, 3, 23, 0.7)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23333" width="1200" height="800"/><g fill-opacity="0.1"><circle fill="%236366f1" cx="200" cy="200" r="100"/><circle fill="%238b5cf6" cx="400" cy="300" r="80"/><circle fill="%23a855f7" cx="600" cy="250" r="90"/><circle fill="%23c084fc" cx="800" cy="180" r="70"/><circle fill="%23e879f9" cx="1000" cy="280" r="85"/></g></svg>')`
          }}
        ></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020317] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              Engagement Models
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              Experience The Flexibility
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Of Engagement
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our business models have been devised considering 'flexibility of operation' in mind. 
            Feel free to choose any business model that best matches your project requirements.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Let's Build Great Technology Together!
                <svg
                  className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelHero; 