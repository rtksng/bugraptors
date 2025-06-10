import React from 'react';

const UnderstandQA: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute left-8 bottom-8 opacity-20">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-white/30 rounded-sm transform rotate-45"
                style={{
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Floating Lines */}
        <div className="absolute right-16 top-16 opacity-30">
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-0.5 bg-white/40 rounded-full"
                style={{
                  width: `${80 - i * 10}px`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="text-white mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Understand QA More Closely!
            </h2>
            <p className="text-lg lg:text-xl text-white/90 font-medium">
              Get Started With A Quick And Hassle-Free Consultation
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-white text-purple-700 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg">
              Reach Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandQA; 