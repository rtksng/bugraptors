import React from 'react';

interface OfferingItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FaceBackGroundProps {
  title: string;
  subtitle?: string;
  offerings: OfferingItem[];
  className?: string;
  backgroundColor?: 'cream' | 'white' | 'gray' | 'light-purple';
  titleColor?: 'purple' | 'blue' | 'dark' | 'primary';
  columns?: 2 | 3 | 4;
}

const FaceBackGround: React.FC<FaceBackGroundProps> = ({
  title,
  subtitle,
  offerings,
  className = '',
  backgroundColor = 'cream',
  titleColor = 'purple',
  columns = 3
}) => {
  const backgroundClasses = {
    cream: 'bg-orange-50/30',
    white: 'bg-white',
    gray: 'bg-gray-50',
    'light-purple': 'bg-purple-50/40'
  };

  const titleClasses = {
    purple: 'text-purple-700',
    blue: 'text-blue-700',
    dark: 'text-gray-800',
    primary: 'text-gray-900'
  };

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`py-16 px-4 ${backgroundClasses[backgroundColor]} ${className}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${titleClasses[titleColor]}`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Offerings Grid */}
        <div className={`grid ${gridClasses[columns]} gap-8 lg:gap-12`}>
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className="group text-center space-y-4 p-6 rounded-xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-purple-600 group-hover:text-purple-700 transition-colors duration-300 transform group-hover:scale-110">
                  {offering.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight group-hover:text-purple-700 transition-colors duration-300">
                {offering.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaceBackGround; 