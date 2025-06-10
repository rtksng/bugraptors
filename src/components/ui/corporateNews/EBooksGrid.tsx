import React from 'react';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const EBooksGrid: React.FC = () => {
  const ebookItems = [
    {
      id: 'eb1',
      title: 'Manual Testing vs Automation Testing',
      description: 'Exploring The Details & Significance Of Manual Vs. Automated Test Techniques',
      bookCover: '/src/assets/img2.png',
      accentColor: 'gray',
      downloadLink: '#'
    },
    {
      id: 'eb2',
      title: 'Software Testing Future Roadmap',
      description: 'Highlighting The Predictable Transformation & Trends In The Software Testing Industry',
      bookCover: '/src/assets/img2.png',
      accentColor: 'yellow',
      downloadLink: '#'
    },
    {
      id: 'eb3',
      title: 'Intensifying A Successful LMS Launch',
      description: 'Tips, Tricks, & Everything You Need To Ensure An Effective LMS Implementation',
      bookCover: '/src/assets/img2.png',
      accentColor: 'blue',
      downloadLink: '#'
    },
    {
      id: 'eb4',
      title: 'Continuous Testing and DevOps',
      description: 'Understanding Continuous Testing, The Process, And The Benefits It Can Bring To The DevOps',
      bookCover: '/src/assets/img2.png',
      accentColor: 'gray',
      downloadLink: '#'
    },
    {
      id: 'eb5',
      title: 'Digital Assurance & Role of QA for Digital Transformation',
      description: 'Exploring the changing dynamics of digital industry within the QA landscape',
      bookCover: '/src/assets/img2.png',
      accentColor: 'green',
      downloadLink: '#'
    },
    {
      id: 'eb6',
      title: 'Performance Testing: An Equally Important Practice As Performance Engineering',
      description: 'Understanding The Importance Of Performance Monitoring',
      bookCover: '/src/assets/img2.png',
      accentColor: 'blue',
      downloadLink: '#'
    }
  ];

  const getAccentStyles = (color: string) => {
    // Minimal styling with subtle accents
    return {
      background: 'bg-white/5 backdrop-blur-sm',
      border: 'border-white/10',
      text: 'text-purple-400',
      button: 'hover:bg-white/10'
    };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ebookItems.map((item, index) => {
        const styles = getAccentStyles(item.accentColor);
        
        return (
          <div
            key={item.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`group relative h-64 sm:h-72 rounded-xl ${styles.background} ${styles.border} border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/20`}>
              {/* Content Section */}
              <div className="relative h-full flex">
                {/* Left Content */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-white leading-tight mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between mt-6">
                    <a
                      href={item.downloadLink}
                      className={`inline-flex items-center ${styles.text} hover:text-white text-sm transition-colors duration-200 group/link`}
                    >
                      More Details
                      <FaArrowRight className="w-3 h-3 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                    </a>
                    
                    {/* Download Icon */}
                    <div className={`w-8 h-8 ${styles.button} rounded-md flex items-center justify-center transition-all duration-200`}>
                      <FaDownload className={`w-3 h-3 ${styles.text} hover:text-white transition-colors duration-200`} />
                    </div>
                  </div>
                </div>

                {/* Right Book Cover */}
                <div className="w-28 sm:w-32 relative flex items-center justify-center p-4">
                  <img
                    src={item.bookCover}
                    alt={item.title}
                    className="w-20 sm:w-24 h-auto object-cover rounded-md shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EBooksGrid; 