import React from 'react';

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  className = ""
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-2/3 right-1/6 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-300/80 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-300/80 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="group relative">
            {/* Main CTA Container */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30 text-center relative overflow-hidden transition-all duration-500 hover:from-purple-600/25 hover:to-blue-600/25 hover:border-purple-400/50">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-purple-400/60 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-blue-400/60 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-purple-400/60 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-blue-400/60 rounded-br-2xl"></div>
              
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {subtitle && (
                  <p className="text-purple-300/80 text-lg mb-4 animate-fadeInUp">
                    {subtitle}
                  </p>
                )}
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                    {title}
                  </span>
                </h2>
                
                {/* CTA Button */}
                <div className="relative inline-block">
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <button 
                    onClick={onButtonClick}
                    className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border border-purple-500/50 hover:border-purple-400/70"
                  >
                    <span className="relative z-10">{buttonText}</span>
                    
                    {/* Button Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-purple-400/30 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-blue-400/30 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default CtaSection; 