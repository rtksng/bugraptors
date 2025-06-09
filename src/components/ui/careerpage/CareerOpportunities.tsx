import React from 'react';

const CareerOpportunities: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            At BugRaptors, You Do More Than Just Testing
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Freshers */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-300 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4">
                <span className="text-sm font-medium text-purple-200">Curious Freshers!</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                Training To Make You A True Professional
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
                Whether you are a passionate graduate or a keen trainee, give a great head start to your career.
              </p>
            </div>

            <button className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Join Us Now</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-xl group-hover/btn:blur-2xl transition-all duration-300" />
            </button>

            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Right Column - Experienced */}
          <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-400/30 transition-all duration-300 text-center">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4">
                <span className="text-sm font-medium text-purple-200">Experienced Professionals!</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                Putting Forward Your Experience
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
                Team up with top professionals and thought leaders to advance your career journey.
              </p>
            </div>

            <button className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Explore Opportunities</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-xl group-hover/btn:blur-2xl transition-all duration-300" />
            </button>

            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities; 