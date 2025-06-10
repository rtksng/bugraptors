import React from 'react';

const NewsletterSectionCommon: React.FC = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0 items-center min-h-[400px]">
              {/* Left Content */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-yellow-50 to-green-50">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  Continuous Testing and DevOps
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  When the entire business world is leaning on the idea of digital transformation by working on software and applications...
                </p>
                <button className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300 group">
                  More Details
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Center - Book Image */}
              <div className="flex items-center justify-center p-8 bg-white relative">
                <div className="relative">
                  {/* Book Cover */}
                  <div className="w-48 h-64 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="p-6 h-full flex flex-col justify-between text-white">
                      <div>
                        <div className="text-yellow-400 text-xs font-bold mb-2 bg-yellow-400/20 px-2 py-1 rounded inline-block">
                          E-BOOK
                        </div>
                        <h3 className="text-lg font-bold mb-2 leading-tight">
                          CONTINUOUS TESTING AND DEVOPS
                        </h3>
                      </div>
                      <div>
                        <p className="text-xs text-blue-200 mb-4">
                          Understanding Continuous Testing, The Process, And The Benefits It Can Bring To The DevOps
                        </p>
                        <div className="text-xs text-blue-300">
                          www.bugraptors.com
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 -right-6 w-8 h-8 border-2 border-purple-300 rounded-full opacity-40"></div>
                </div>
              </div>

              {/* Right - Subscription Form */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Arrow pointing from center */}
                  <div className="absolute -left-8 top-8 hidden lg:block">
                    <svg className="w-16 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 64 32">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} strokeDasharray="5,5" d="M2 16h40m-10-10l10 10-10 10" />
                    </svg>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                    <span className="text-purple-600">Never miss an </span>
                    <span className="text-purple-800">update!</span>
                  </h2>
                  
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    
                    {/* reCAPTCHA placeholder */}
                    <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg bg-gray-50">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-sm text-gray-600">I'm not a robot</span>
                      <div className="ml-auto">
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center py-6 space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSectionCommon; 