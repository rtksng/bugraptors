import React from 'react';

const CareerServicesCTA: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-purple-700/95 to-purple-900/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-pink-400/20 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-md"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-left text-white max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Need Any Information On Career Or Services?
            </h2>
            <p className="text-lg sm:text-xl text-purple-100 font-medium">
              We Are Always Responsive To Any Queries That Could Add Value To Life
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="group bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              <span className="flex items-center gap-2">
                Explore More On Life At BugRaptors
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerServicesCTA; 