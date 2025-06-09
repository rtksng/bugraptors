import React from 'react';

const EventsSection: React.FC = () => {
  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 leading-tight">
              Don't Miss Our Events
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
              Wanna meet us at conferences, events, and more?
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              {/* Decorative gradient line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We'll be waiting for you. From Women's Day, Independence Day celebrations, Christmas, 
                Success Parties, Symposiums, Panel Discussions, Important Client Visits, Workshops, 
                Networking to Conferencing, BugRaptors organizes several events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                {/* Icon or decorative element */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                
                <p className="text-gray-300 leading-relaxed">
                  Explore our Recent Events & Success Stories from anywhere in the world.
                </p>
              </div>

              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                {/* Icon or decorative element */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                
                <p className="text-gray-300 leading-relaxed">
                  Get a sneak-peek into how employees feel about BugRaptors, why they're working with us. 
                  Know why they call us the world's best software testing organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection; 