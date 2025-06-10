import React from 'react';

const CSRInitiatives: React.FC = () => {
  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office team meeting"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 leading-tight">
                Our CSR Initiatives
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                When you need to drive digital transformation as an organization, it is 
                always necessary to reflect upon your morale and identify your social 
                responsibility. At BugRaptors, we are a team of responsible citizens who 
                need to ensure sustainable innovation but without taking our focus away 
                from social development needs.
              </p>
            </div>

            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Know More</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/50 to-blue-800/50 blur-xl group-hover:blur-2xl transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRInitiatives; 