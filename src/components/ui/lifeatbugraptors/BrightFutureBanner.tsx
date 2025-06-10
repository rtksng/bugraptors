import React from 'react';

const BrightFutureBanner: React.FC = () => {
  return (
    <div className="relative py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
      {/* Background pattern/texture */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-24 h-24 border border-white/20 rotate-45" />
        <div className="absolute bottom-10 left-20 w-16 h-16 border border-white/20 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rotate-45" />
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-white/10 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content Section */}
          <div className="lg:col-span-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Build A Bright Future With Us
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
              We Are Technically-Minded Professionals And Love To Play With Technologies. 
              Yet, We Are Not Controlled By It. For Current Openings And Opportunities, 
              Contact Us Here.
            </p>
          </div>

          {/* CTA Button Section */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">View Available Opportunities</span>
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#020317] to-transparent" />
    </div>
  );
};

export default BrightFutureBanner; 