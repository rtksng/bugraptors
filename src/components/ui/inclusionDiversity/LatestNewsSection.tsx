import React from 'react';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  image: string;
  category?: string;
}

const LatestNewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      date: "10-Feb-2025",
      title: "BugRaptors CEO Yashu Kapila Recognized for Innovation in QA Testing",
      image: "https://source.unsplash.com/300x200/?innovation,technology,leadership",
      category: "Recognition"
    },
    {
      id: 2,
      date: "26-Dec-2024",
      title: "BugRaptors Awarded as Top Global Company of Fall 2024 by Clutch",
      image: "https://source.unsplash.com/300x200/?award,trophy,business",
      category: "Award"
    },
    {
      id: 3,
      date: "18-Oct-2024",
      title: "BugRaptors CEO, Yashu Kapila Nominated for Women in Tech Global...",
      image: "https://source.unsplash.com/300x200/?women,technology,office",
      category: "Nomination"
    },
    {
      id: 4,
      date: "23-Oct-2024",
      title: "BugRaptors CEO Yashu Kapila Wins HerKising Award 2024",
      image: "https://source.unsplash.com/300x200/?success,celebration,corporate",
      category: "Award"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#020317] text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Latest News
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Explore our events, recognition and company achievements
            </p>
          </div>
          <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap">
            View All
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* News Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                {news.category && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                      {news.category}
                    </span>
                  </div>
                )}

                {/* Overlay content for special cards */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <p className="text-sm text-purple-400 mb-3 font-medium">
                  {news.date}
                </p>
                <h3 className="text-lg font-semibold mb-4 text-white line-clamp-3 leading-tight group-hover:text-purple-100 transition-colors duration-300">
                  {news.title}
                </h3>
                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300 inline-flex items-center gap-1">
                  Read More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Achievement Stats */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">50+ Awards</h4>
            <p className="text-gray-300 text-sm">Industry recognition and achievements</p>
          </div>

          {/* Innovation Focus */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Innovation Leader</h4>
            <p className="text-gray-300 text-sm">Pioneering QA testing solutions</p>
          </div>

          {/* Global Recognition */}
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Global Reach</h4>
            <p className="text-gray-300 text-sm">International recognition and presence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection; 