import React from 'react';

interface HeroSectionProps {
  logoIcon?: React.ReactNode;
  logoText: string;
  mainHeading: string;
  highlightText: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
  showMobileIllustration?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  logoIcon,
  logoText,
  mainHeading,
  highlightText,
  description,
  ctaText,
  onCtaClick,
  showMobileIllustration = true
}) => {
  const defaultLogoIcon = (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Mobile Device Illustration */}
        {showMobileIllustration && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20">
            <div className="w-64 h-96 border-2 border-purple-500/30 rounded-3xl bg-gradient-to-b from-purple-500/5 to-blue-500/5">
              <div className="w-full h-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-t-3xl"></div>
              <div className="p-4 space-y-4">
                <div className="h-4 bg-purple-500/30 rounded"></div>
                <div className="h-4 bg-blue-500/30 rounded w-3/4"></div>
                <div className="h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-purple-500/20 rounded"></div>
                  <div className="h-3 bg-purple-500/20 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Logo Icon */}
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              {logoIcon || defaultLogoIcon}
            </div>
            <h1 className="text-2xl font-bold text-white ml-4">{logoText}</h1>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {mainHeading}
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {highlightText}
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
            {description}
          </p>

          <button 
            onClick={onCtaClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              {ctaText}
              <svg
                className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
};

export default HeroSection; 