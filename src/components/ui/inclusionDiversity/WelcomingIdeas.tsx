import React from 'react';

const WelcomingIdeas: React.FC = () => {
  const categories = [
    'No Gender Bias',
    'BIPOC',
    'Maternity & Paternity Programs',
    'Embracing Differently Abled'
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcoming Fresh Ideas
            </span>
            <br />
            <span className="text-white">& Perspective</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              We leverage career management practices that can aid flexibility in the organization when it comes to roles and responsibilities. 
              Above all, we try to inculcate the agenda of two-way communication at all levels for employees and management along with work-life balance programs.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Purple line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <h3 className="text-white font-semibold text-center text-lg leading-tight">
                  {category}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Plan Your Career With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomingIdeas; 