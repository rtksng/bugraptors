import React from 'react';

const LifeHero: React.FC = () => {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      />
      
      {/* Geometric overlay patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/20 rotate-45" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rotate-12" />
        <div className="absolute top-40 left-1/3 w-16 h-16 bg-white/10 rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-white/90 text-lg mb-4 font-light">
            Go Behind the Scenes to Know How's
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            #LifeatBugRaptors
          </h1>
        </div>
      </div>

      {/* Gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#020317] to-transparent" />
    </div>
  );
};

export default LifeHero; 