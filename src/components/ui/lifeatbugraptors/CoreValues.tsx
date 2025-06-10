import React from 'react';

const CoreValues: React.FC = () => {
  const values = [
    {
      number: "01",
      title: "Health, Wellness, & Equality",
      description: "Employee health, equality, women empowerment such as maternity support or flexibility for working mothers, we ensure to keep up highest work standards at all times.",
      isPrimary: true
    },
    {
      number: "02",
      title: "Accountability",
      description: "Either our clients, community, or employees, we anticipate on the needs of all to be proactive with our response. We aim precision with highest responsiveness.",
      isPrimary: false
    },
    {
      number: "03",
      title: "Team Players",
      description: "We at BugRaptors give highest priority to mutual respect, trust, collaboration, and everything that is required to make great teams. We have excelled this aspect over the years.",
      isPrimary: false
    },
    {
      number: "04",
      title: "You",
      description: "We are professionals and building such big brand needs excellence when it comes to YOU. Either employees or clients, we have highest benchmarks of integrity in service for all.",
      isPrimary: false
    }
  ];

  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                value.isPrimary
                  ? 'bg-gradient-to-br from-purple-600 to-purple-800 text-white hover:shadow-2xl hover:shadow-purple-500/30 hover:from-purple-700 hover:to-purple-900'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20'
              }`}
            >
              {/* Background gradient on hover for all cards */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                value.isPrimary 
                  ? 'bg-gradient-to-br from-purple-700 to-purple-900' 
                  : 'bg-gradient-to-br from-purple-600 to-purple-800'
              }`} />
              
              <div className="relative z-10">
                {/* Number */}
                <div className={`text-6xl font-bold mb-4 ${
                  value.isPrimary 
                    ? 'text-white/80' 
                    : 'text-purple-400 group-hover:text-purple-300'
                } transition-colors duration-300`}>
                  {value.number}
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-4 leading-tight ${
                  value.isPrimary 
                    ? 'text-white' 
                    : 'text-white group-hover:text-purple-400'
                } transition-colors duration-300`}>
                  {value.title}
                </h3>

                {/* Description */}
                <p className={`leading-relaxed ${
                  value.isPrimary 
                    ? 'text-white/90' 
                    : 'text-gray-300 group-hover:text-gray-200'
                } transition-colors duration-300`}>
                  {value.description}
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                value.isPrimary ? 'bg-white/50' : 'bg-purple-400'
              }`} />
              <div className={`absolute bottom-4 left-4 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                value.isPrimary ? 'bg-white/30' : 'bg-blue-400'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues; 