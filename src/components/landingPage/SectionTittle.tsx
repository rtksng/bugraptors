import React from 'react';
import { FaAward } from 'react-icons/fa';

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ tag, title, subtitle }) => {
  return (
    <section >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          {tag && (
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4 sm:mb-6">
              <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-medium text-purple-200">{tag}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-radial-gradient font-medium mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
