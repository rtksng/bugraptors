import React from 'react';

const NewSectionCommon: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#020317]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Latest News
              </h2>
              <p className="text-lg text-gray-300">
                Explore our events, recognition and company achievements
              </p>
            </div>
            <button className="custom-bg-color hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All
            </button>
          </div>

          {/* News Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* News Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden h-48">
                {/* Purple gradient background with CEO image */}
                <div className="h-full bg-gradient-to-br from-purple-600 to-purple-800 relative flex items-center justify-center">
                  <div className="absolute top-4 left-4">
                    <div className="text-white text-xs font-bold bg-black/20 px-2 py-1 rounded">
                      BUGRAPTORS
                    </div>
                  </div>
                  
                  {/* CEO Profile */}
                  <div className="flex flex-col items-center text-center text-white">
                    <div className="w-20 h-20 bg-white rounded-full mb-3 overflow-hidden border-4 border-white/20">
                      <div className="w-full h-full bg-gradient-to-br from-purple-300 to-purple-500 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-bold">CEO</div>
                    <div className="text-lg font-bold">YASHU KAPILA</div>
                    <div className="text-xs mt-1 opacity-90">Recognized for Innovation in QA Testing</div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">10-Feb-2025</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  BugRaptors CEO Yashu Kapila Recognized for Innovation in QA Testing
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden h-48">
                {/* Clutch Award Design */}
                <div className="h-full bg-gradient-to-br from-teal-600 to-blue-700 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="relative mb-4">
                      {/* Clutch Badge */}
                      <div className="w-24 h-32 bg-gradient-to-b from-teal-700 to-blue-800 rounded-lg mx-auto relative border-2 border-white/20">
                        <div className="absolute inset-2 bg-gradient-to-b from-teal-500 to-blue-600 rounded flex flex-col items-center justify-center">
                          <div className="text-xs font-bold mb-1">Clutch</div>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-1">
                            <div className="text-teal-600 font-bold text-xs">G</div>
                          </div>
                          <div className="text-xs">GLOBAL</div>
                          <div className="text-xs">FALL</div>
                          <div className="text-xs">2024</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold bg-teal-500 px-3 py-1 rounded-full">
                        Top Global Company
                      </div>
                    </div>
                    <div className="text-sm font-semibold">BugRaptors Wins</div>
                  </div>
                  
                  {/* Decorative stars */}
                  <div className="absolute top-4 left-4 text-yellow-300">★</div>
                  <div className="absolute top-6 right-6 text-yellow-300 text-sm">★</div>
                  <div className="absolute bottom-4 left-6 text-yellow-300 text-xs">★</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">26-Dec-2024</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  BugRaptors Awarded as Top Global Company of Fall 2024 by Clutch
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden h-48">
                {/* Women in Tech Award */}
                <div className="h-full bg-gradient-to-br from-purple-700 to-indigo-800 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-3">
                      <div className="text-xs font-bold text-purple-300 mb-2">YASHU KAPILA</div>
                      <div className="text-lg font-bold mb-1">NOMINATED FOR WOMEN IN</div>
                      <div className="text-lg font-bold mb-2">TECH GLOBAL AWARDS</div>
                      <div className="text-sm font-semibold bg-purple-600 px-3 py-1 rounded-full inline-block">
                        2024
                      </div>
                    </div>
                    
                    {/* Profile circle */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech pattern */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">18-Oct-2024</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  BugRaptors CEO, Yashu Kapila Nominated for Women in Tech Global...
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* News Card 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden h-48">
                {/* HerRising Award */}
                <div className="h-full bg-gradient-to-br from-pink-600 to-purple-700 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="mb-3">
                      <div className="text-xs font-bold text-pink-200 mb-2">BUGRAPTORS CEO</div>
                      <div className="text-xl font-bold mb-1">YASHU KAPILA</div>
                      <div className="text-sm font-semibold mb-2">WINS HERRISING AWARD 2024</div>
                      <div className="text-sm font-bold bg-pink-500 px-3 py-1 rounded-full inline-block">
                        herkey
                      </div>
                    </div>
                    
                    {/* Award badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-yellow-800 font-bold text-lg">
                      🏆
                    </div>
                    
                    {/* Profile circle */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Celebration confetti */}
                  <div className="absolute top-2 right-2 text-yellow-300">✨</div>
                  <div className="absolute top-8 left-8 text-yellow-200">⭐</div>
                  <div className="absolute bottom-2 left-2 text-pink-300">💫</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">09-Oct-2024</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  BugRaptors CEO Yashu Kapila Wins HerRising Award 2024
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSectionCommon; 