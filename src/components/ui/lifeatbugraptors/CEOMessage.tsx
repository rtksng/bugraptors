import React from 'react';

const CEOMessage: React.FC = () => {
  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
              Message by CEO
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                When we need to do the best work in our live, it can never be done alone. 
                It is always a calculated and coordinated effort that comes from diversity 
                that empowers any business. This is why BugRaptors has always been a 
                brand recognized for offering best workplace to the people since our 
                ethics made us stick to the commitment of inclusive hiring and equality 
                amongst all.
              </p>
            </div>

            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Let's Connect to Discuss Further</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-xl group-hover:blur-2xl transition-all duration-300" />
            </button>
          </div>

          {/* Right Content - CEO Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="CEO"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };

export default CEOMessage; 