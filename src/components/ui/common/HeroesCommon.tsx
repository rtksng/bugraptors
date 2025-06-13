import React from 'react';

interface HeroesCommonProps {
  title: React.ReactNode;           // Main headline, string or JSX
  subtitle: string;
  description: string;              // Description paragraph
  buttonText: string;               // CTA button text
  onButtonClick?: () => void;      // Optional button click handler
  icon?: React.ReactNode;           // Optional icon, default provided
  tag?: React.ReactNode;            // Optional tag near icon
  align?: 'center' | 'left';        // Text alignment, default to left
}

const defaultIcon = (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const HeroesCommon: React.FC<HeroesCommonProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
  icon = defaultIcon,
  tag,
  align = 'left',
}) => {
  const alignmentClasses = align === 'left' ? 'text-left' : 'text-center';

  return (
    <>
      {/* Custom CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
        `
      }} />

      <section className="relative  py-16 flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 ">
        {/* Background with VR/Tech Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-purple-900/40 to-transparent z-10"></div>

         
        </div>

        {/* Main Content */}
        <div className=  "container mx-auto ">
          <div className="flex items-center mb-8 justify-start">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
              {icon}
            </div>
            {tag && (
              <span className="text-white text-lg font-semibold tracking-wide">{tag}</span>
            )}
          </div>

          <h1 className="font-semibold text-white mb-3 leading-tight sm:text-4xl md:text-5xl ">
            {title}
          </h1>
          <h3 className="text-gray-200 mb-2 leading-relaxed max-w-4xl">
            {subtitle}
          </h3>

          <p className="text-gray-200 mb-12 leading-relaxed max-w-4xl">
            {description}
          </p>

          <div className="flex items-center justify-start space-x-6">
            <button
              onClick={onButtonClick}
              className="group relative px-8 py-4 custom-bg-color hover:from-blue-500 hover:to-blue-600 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg"
            >
              <span className="relative z-10 flex items-center">
                {buttonText}
                <svg
                  className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
            </button>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-500"></div>
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-twinkle delay-1000"></div>
          <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-twinkle delay-700"></div>
        </div>
      </section>
    </>
  );
};

export default HeroesCommon;
