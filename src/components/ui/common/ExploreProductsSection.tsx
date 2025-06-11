import React from 'react';

interface Product {
  name: string;
  description: string;
  icon: React.ReactNode;
  hoverColor?: string;
  link?: string;
}

interface ExploreProductsSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  className?: string;
}

const ExploreProductsSection: React.FC<ExploreProductsSectionProps> = ({
  title,
  subtitle,
  products,
  className = ""
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96  animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-900/5 to-transparent rounded-full"></div>

        {/* Additional floating elements */}
        <div className="absolute top-40 right-[20%] w-2 h-2 bg-purple-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-32 left-[30%] w-3 h-3 bg-blue-400 rounded-full animate-float-delayed opacity-30"></div>
        <div className="absolute top-[60%] right-[40%] w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-40"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] animate-grid-flow">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              {subtitle}
            </p>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${products.length === 1 ? 'max-w-md mx-auto' : products.length === 2 ? 'md:grid-cols-2' : products.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 text-center hover:scale-[1.02] hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-xl"></div>

                {/* Icon Container */}
                <div className="relative w-16 h-16 custom-bg-color rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl"></div>
                  <div className="relative z-10">
                    {product.icon}
                  </div>
                  
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-xl border-2 border-purple-400/0 group-hover:border-purple-400/30 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-semibold text-white mb-4 transition-colors duration-300 ${
                    product.hoverColor 
                      ? `group-hover:${product.hoverColor}` 
                      : 'group-hover:text-purple-400'
                  }`}>
                    {product.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Bottom Glowing Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-300"></div>

                {/* Click overlay for future link functionality */}
                {product.link && (
                  <div className="absolute inset-0 cursor-pointer rounded-xl"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProductsSection; 