import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  readTime?: string;
}

const BlogsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: "02-Jun-2025",
      title: "Enterprise Testing Strategies: Building Resilient Growth Beyond the Buzzwords",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      date: "23-May-2025", 
      title: "Is Your AI Ready for 2025? AI Automation Testing Strategies and Trends",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      date: "16-May-2025",
      title: "Small Language Model for AI: How SLMs Are Outperforming Massive AI Models in QA...",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      date: "12-May-2025",
      title: "AI Mobile App Testing: Building Superior Mobile Experiences Through Intelligent...",
      image: "/api/placeholder/300/200"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', { name, email });
  };

  return (
    <section className="relative py-16 sm:py-20 bg-[#020317] text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Blogs
          </h2>
          <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            View All
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <p className="text-sm text-purple-400 mb-3 font-medium">
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold mb-4 text-white line-clamp-3 leading-tight">
                  {post.title}
                </h3>
                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testing With Selenium & Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testing With Selenium */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Testing With Selenium
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  From being the pioneer of test automation solutions to becoming the most widely adopted test tools of the community.
                </p>
                <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">
                  More Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Book/Guide Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs text-center px-2">
                      Testing with Selenium
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Never miss an update!
              </h3>
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">✉️</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              />
              
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              />

              {/* reCAPTCHA placeholder */}
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                <div className="w-6 h-6 border-2 border-white/30 rounded"></div>
                <span className="text-sm text-gray-300">I'm not a robot</span>
                <div className="ml-auto">
                  <div className="text-xs text-gray-400">reCAPTCHA</div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            {[0, 1, 2, 3, 4].map((dot, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === 0 ? 'bg-purple-400' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection; 