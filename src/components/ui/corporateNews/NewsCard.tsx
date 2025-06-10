import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

interface NewsCardProps {
  id: string;
  image: string;
  date: string;
  title: string;
  description?: string;
  category?: string;
  readMoreLink?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  date,
  title,
  description,
  category,
  readMoreLink = '#'
}) => {
  return (
    <div className="group relative p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/8 via-white/4 to-white/2 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/60 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500">
      {/* Gradient Background Orb */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500"></div>

      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-purple-600/80 backdrop-blur-sm text-white text-xs font-medium py-1.5 px-3 rounded-full border border-purple-400/30">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        {/* Date */}
        <div className="flex items-center text-gray-400 text-sm">
          <FaCalendarAlt className="w-4 h-4 mr-2 text-purple-400" />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        )}

        {/* Read More Link */}
        <a
          href={readMoreLink}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-200 group/link"
        >
          Read More
          <FaArrowRight className="w-3 h-3 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" />
        </a>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default NewsCard; 