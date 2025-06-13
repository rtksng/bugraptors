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
  align?: 'center' | 'left';
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
  align = 'center',
}) => {
  const paragraphs = [para1, para2, para3, para4, para5].filter(Boolean);
  const alignmentClasses = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  const contentAlignment = align === 'left' ? 'ml-0' : 'mx-auto';

  return (
    <div >
      <div className="relative container mx-auto">
        <div className={`flex flex-col ${alignmentClasses}`}>
          {tag && (
            <div
              className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg  backdrop-blur-sm bg-white/5 p-2 mb-3  ${contentAlignment}`}
            >
              <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-medium text-purple-200">{tag}</span>
            </div>
          )}

          <h2
            className={`sm:text-2xl md:text-3xl lg:text-[40px]  text-radial-gradient font-bold my-2 max-w-7xl ${contentAlignment}`}
          >
            {title}
          </h2>

          {subtitle && (
            <h4 className={`text-[#B0B0B0] text-lg tracking-tight mb-2 max-w-7xl ${contentAlignment}`}>
              {subtitle}
            </h4>
          )}

          {paragraphs.map((para, index) => (
            <p
              key={index}
              className={`text-[#B0B0B0] text-lg tracking-tight mb-2 max-w-7xl ${contentAlignment}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
