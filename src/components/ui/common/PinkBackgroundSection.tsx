import React from 'react';
import SectionTitle from './SectionTittle';

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
    <section className={`py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#020317] ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl "></div>
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl  delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16">


            <SectionTitle
              title={title}
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 custom-bg-color rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300">
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
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 custom-bg-color text-white text-base sm:text-lg  rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25"
              >
                {buttonText}
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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