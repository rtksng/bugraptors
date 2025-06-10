import React from 'react';

interface PinkBackgroundSectionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PinkBackgroundSectionProps {
  title: string;
  items: PinkBackgroundSectionItem[];
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const PinkBackgroundSection: React.FC<PinkBackgroundSectionProps> = ({
  title,
  items,
  buttonText = "Book Your Free Demo",
  onButtonClick,
  className = ""
}) => {
  return (
    <section className={`py-20 relative overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 hover:border-purple-200/80 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-100/50"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          {buttonText && (
            <div className="text-center">
              <button
                onClick={onButtonClick}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {buttonText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PinkBackgroundSection; 