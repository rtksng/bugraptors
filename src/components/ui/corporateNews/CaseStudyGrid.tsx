import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CaseStudyGrid: React.FC = () => {
  const caseStudyItems = [
    {
      id: 'cs1',
      type: 'featured',
      title: 'Reassuring the Quality and Security of Web-Mobile based POS System',
      image: '/src/assets/img2.png',
      description: 'Comprehensive testing strategy ensuring robust security and performance for point-of-sale systems.',
      category: 'Security Testing',
      readMoreLink: '#'
    },
    {
      id: 'cs2',
      type: 'image',
      image: '/src/assets/img2.png',
      title: 'Healthcare App Security Testing Success Story',
      description: 'Ensuring HIPAA compliance and security for a healthcare application serving 100,000+ patients.',
      category: 'Healthcare',
      readMoreLink: '#'
    },
    {
      id: 'cs3',
      type: 'image',
      image: '/src/assets/img2.png',
      title: 'Financial Services: Performance Testing at Scale',
      description: 'How we optimized performance for a banking application handling millions of transactions daily.',
      category: 'FinTech',
      readMoreLink: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {caseStudyItems.map((item, index) => (
        <div
          key={item.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
        
            // Dark Theme Cards
            <div className="group relative h-80 sm:h-96 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer">
              {/* Gradient Background Orb */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Background Image with Dark Overlay */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/60 to-gray-700/40"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-purple-400/30">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 group-hover:text-gray-200">
                    {item.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={item.readMoreLink}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                  >
                    Read Case Study
                    <FaArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        
        </div>
      ))}
    </div>
  );
};

export default CaseStudyGrid; 