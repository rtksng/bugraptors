import React from 'react';
import SectionTitle from './SectionTittle';

interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  additionalDescription?: string;
}

interface WhyChooseSectionProps {
  title: string;
  description: string;
  items: WhyChooseItem[];
  className?: string;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  title,
  description,
  items,
  className = ""
}) => {
  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}

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

            <SectionTitle
              title={title}
              para1={description}
            />
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div
                key={item.number}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-xl"></div>

                <div className="relative flex items-start mb-4">
                  {/* Number Badge */}
                  <div className="relative w-12 h-12 custom-bg-color rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg"></div>
                    <span className="text-white font-bold text-lg relative z-10">{item.number}</span>

                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 rounded-lg border-2 border-purple-400/0 group-hover:border-purple-400/30 transition-all duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                    {item.additionalDescription && (
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-2 leading-relaxed">
                        {item.additionalDescription}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bottom Glowing Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100  transition-opacity duration-300"></div>
                <div className="absolute bottom-8 left-4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100  delay-300 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 