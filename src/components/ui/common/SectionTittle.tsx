import React from 'react';
import { FaAward } from 'react-icons/fa';

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  para1?: string;
  para2?: string;
  para3?: string;
  para4?: string;
  para5?: string;
  align?: 'center' | 'left'; // New prop
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  tag,
  title,
  subtitle,
  para1,
  para2,
  para3,
  para4,
  para5,
  align = 'center', // Default is center
}) => {
  const paragraphs = [para1, para2, para3, para4, para5].filter(Boolean);

  const alignmentClasses = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const contentAlignment = align === 'left' ? 'ml-0' : 'mx-auto';

  return (
    <section>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${alignmentClasses} mb-12 sm:mb-16`}>
          {tag && (
            <div className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4 sm:mb-6 ${contentAlignment}`}>
              <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-medium text-purple-200">{tag}</span>
            </div>
          )}

          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-radial-gradient font-medium mb-4 sm:mb-6 leading-tight max-w-3xl ${contentAlignment} text-white`}>
            {title}
          </h2>

          {subtitle && (
            <p className={`text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl px-4 ${contentAlignment}`}>
              {subtitle}
            </p>
          )}

          {paragraphs.map((para, index) => (
            <p
              key={index}
              className={`text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl px-4 ${contentAlignment}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
