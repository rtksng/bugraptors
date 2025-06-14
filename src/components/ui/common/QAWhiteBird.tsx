import React from 'react';

interface BenefitItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface QAWhiteBirdProps {
  title: string;
  description: string;
  benefits: BenefitItem[];
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'cream' | 'light-purple' | 'light-blue';
  titleColor?: 'purple' | 'blue' | 'dark' | 'primary' | 'green';
  iconColor?: 'purple' | 'blue' | 'green' | 'orange' | 'red';
  gridColumns?: 2 | 3 | 4 | 5;
  centerContent?: boolean;
}

const QAWhiteBird: React.FC<QAWhiteBirdProps> = ({
  title,
  description,
  benefits,
  className = '',
  backgroundColor = 'white',
  titleColor = 'purple',
  iconColor = 'purple',
  gridColumns = 3,
  centerContent = false
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    cream: 'bg-orange-50/30',
    'light-purple': 'bg-purple-50/40',
    'light-blue': 'bg-blue-50/30'
  };

  const titleClasses = {
    purple: 'text-purple-700',
    blue: 'text-blue-700',
    dark: 'text-gray-800',
    primary: 'text-gray-900',
    green: 'text-green-700'
  };

  const iconClasses = {
    purple: 'text-purple-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600'
  };

  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
  };

  // For 5 items, create a custom layout: 2 on top, 3 on bottom
  const shouldUseCustomLayout = benefits.length === 5 && gridColumns === 5;

  return (
    <section className={`py-16 px-4 ${backgroundClasses[backgroundColor]} ${className}`}>
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className={`mb-16 ${centerContent ? 'text-center' : ''}`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${titleClasses[titleColor]} leading-tight`}>
            {title}
          </h2>
          <p className={`text-lg text-gray-600 leading-relaxed ${
            centerContent ? 'max-w-4xl mx-auto' : 'max-w-5xl'
          }`}>
            {description}
          </p>
        </div>

        {/* Benefits Grid */}
        {shouldUseCustomLayout ? (
          <div className="space-y-8">
            {/* First row - 2 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center max-w-4xl mx-auto">
              {benefits.slice(0, 2).map((benefit) => (
                <BenefitCard 
                  key={benefit.id} 
                  benefit={benefit} 
                  iconColor={iconColor}
                />
              ))}
            </div>
            
            {/* Second row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {benefits.slice(2, 5).map((benefit) => (
                <BenefitCard 
                  key={benefit.id} 
                  benefit={benefit} 
                  iconColor={iconColor}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={`grid ${gridClasses[gridColumns]} gap-8 lg:gap-12`}>
            {benefits.map((benefit) => (
              <BenefitCard 
                key={benefit.id} 
                benefit={benefit} 
                iconColor={iconColor}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Separate component for benefit cards to keep the main component clean
interface BenefitCardProps {
  benefit: BenefitItem;
  iconColor: 'purple' | 'blue' | 'green' | 'orange' | 'red';
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, iconColor }) => {
  const iconClasses = {
    purple: 'text-purple-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600'
  };

  return (
    <div className="group text-center space-y-4 p-6 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300">
      {/* Icon Container */}
      <div className="flex justify-center mb-6">
        <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center ${iconClasses[iconColor]} group-hover:scale-110 transition-transform duration-300`}>
          {benefit.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight group-hover:text-purple-700 transition-colors duration-300 mb-4">
        {benefit.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
        {benefit.description}
      </p>
    </div>
  );
};

export default QAWhiteBird; 