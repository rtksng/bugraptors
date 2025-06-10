import React from 'react';

interface HowItWorksItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HowItWorksSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  items: HowItWorksItem[];
  className?: string;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  title,
  subtitle,
  description,
  items,
  className = ""
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-purple-300/80 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/8 w-2 h-2 bg-blue-300/80 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {subtitle && (
              <p className="text-purple-300/80 text-lg mb-4 font-medium">
                {subtitle}
              </p>
            )}
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            
            {description && (
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Card Container */}
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 h-full relative overflow-hidden group-hover:transform group-hover:scale-105">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-purple-400/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-blue-400/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                        {item.icon}
                        
                        {/* Icon Glow Ring */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                      </div>
                      
                      {/* Floating Ring */}
                      <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Text Content */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border border-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-200"></div>
              </div>
            ))}
          </div>
          
          {/* Process Flow Indicators (if 5 or fewer items) */}
          {items.length <= 5 && (
            <div className="flex justify-center mt-16">
              <div className="flex items-center space-x-4">
                {items.map((_, index) => (
                  <React.Fragment key={index}>
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                    {index < items.length - 1 && (
                      <div className="w-8 h-px bg-gradient-to-r from-purple-500/50 to-blue-500/50"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 