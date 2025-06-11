import React from 'react';

interface HeroQAofferingProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  backgroundVariant?: 'purple' | 'blue' | 'green' | 'orange';
}

const HeroQAoffering: React.FC<HeroQAofferingProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
  backgroundVariant = 'purple'
}) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  const backgroundClasses = {
    purple: 'bg-gradient-to-r from-purple-600 to-purple-800',
    blue: 'bg-gradient-to-r from-blue-600 to-blue-800',
    green: 'bg-gradient-to-r from-green-600 to-green-800',
    orange: 'bg-gradient-to-r from-orange-600 to-orange-800'
  };

  return (
    <section className={`relative py-16 px-4 overflow-hidden ${backgroundClasses[backgroundVariant]}`}>
      {/* Background Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 right-32 w-24 h-24 border border-white/15 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 border border-white/10 rounded-lg transform rotate-45"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32"></div>
        
        {/* Hexagonal Pattern */}
        <div className="absolute bottom-20 right-40 opacity-20">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5L85 25V75L50 95L15 75V25L50 5Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M50 15L75 30V70L50 85L25 70V30L50 15Z" stroke="currentColor" strokeWidth="1" fill="none"/>
            <path d="M50 25L65 35V65L50 75L35 65V35L50 25Z" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-32 right-64 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-16 w-3 h-3 bg-white/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-56 w-2 h-2 bg-white/35 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-white/90">
                {subtitle}
              </h2>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {description}
            </p>
            
            <div className="pt-4">
              <button
                onClick={handleButtonClick}
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {buttonText}
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="hidden md:block relative">
            <div className="relative">
              {/* Main visual container */}
              <div className="w-full h-64 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg">Quality Assured</h3>
                  <p className="text-white/70 text-sm">Professional Testing Services</p>
                </div>
              </div>
              
              {/* Floating elements with Tailwind animations */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/15 rounded-lg backdrop-blur-sm animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroQAoffering; 