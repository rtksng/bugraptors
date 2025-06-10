import React from 'react';
import SectionTitle from './SectionTittle';

const BlogSectionCommon: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#020317]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex justify-between items-center mb-12">
            <SectionTitle title="Blogs" align='left' />
            <button className="custom-bg-color hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All
            </button>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-900 via-slate-800 to-black relative">
                  {/* Code overlay effect */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20"></div>
                    <div className="absolute top-4 left-4 text-xs text-cyan-300 font-mono">
                      <div>{'// Testing Strategies'}</div>
                      <div className="mt-1">{'function buildResilience() {'}</div>
                      <div className="mt-1 ml-4">{'return growth;'}</div>
                      <div className="mt-1">{'}'}</div>
                    </div>
                  </div>
                  {/* Animated lines */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">02-Jun-2025</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  Enterprise Testing Strategies: Building Resilient Growth Beyond the Buzzwords
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 relative flex items-center justify-center">
                  {/* AI Circuit Design */}
                  <div className="absolute inset-0">
                    <div className="w-24 h-24 mx-auto mt-12 relative">
                      <div className="absolute inset-0 rounded-full border-2 border-cyan-300 animate-pulse"></div>
                      <div className="absolute inset-2 rounded-full border border-blue-300 animate-ping"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">AI</span>
                      </div>
                    </div>
                    {/* Connecting lines */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-8 left-12 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-8 right-12 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">23-May-2025</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  Is Your AI Ready for 2025? AI Automation Testing Strategies and Trends
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-900 to-indigo-800 relative flex items-center justify-center">
                  {/* SLM Design */}
                  <div className="text-center text-white">
                    <div className="text-xs font-semibold mb-2 bg-blue-700 px-3 py-1 rounded-full inline-block">
                      Small Language Model for AI
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-blue-600/50 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-blue-400 rounded mx-auto mb-2 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div className="text-xs">Multi-App</div>
                      </div>
                      <div className="bg-blue-600/50 p-3 rounded-lg">
                        <div className="w-8 h-8 bg-cyan-400 rounded mx-auto mb-2 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                          </svg>
                        </div>
                        <div className="text-xs">On-Device Analysis</div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center space-x-2">
                      <div className="text-xs bg-indigo-600 px-2 py-1 rounded">Dynamic Scaling</div>
                      <div className="text-xs bg-purple-600 px-2 py-1 rounded">Code Generation</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">16-May-2025</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  Test Smarter, Not Larger: How SLMs Are Outperforming Massive AI Models in QA...
                </h3>
                <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300 text-sm">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Card 4 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-white/10">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-600 relative flex items-center justify-center">
                  {/* Mobile Device with AI */}
                  <div className="relative">
                    <div className="w-20 h-32 bg-gray-800 rounded-lg border-2 border-gray-600 relative">
                      <div className="w-16 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded m-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        <div className="absolute top-2 left-2 right-2">
                          <div className="h-1 bg-white/30 rounded mb-1"></div>
                          <div className="h-1 bg-white/20 rounded mb-1 w-3/4"></div>
                          <div className="h-1 bg-white/20 rounded w-1/2"></div>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="text-xs text-white font-semibold">AI Testing</div>
                        </div>
                      </div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-700 rounded-full"></div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    {/* AI Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-lg"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-3 font-medium">12-May-2025</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  AI Mobile App Testing: Building Superior Mobile Experiences Through Intelligent...
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

export default BlogSectionCommon; 