import React from 'react';

interface CSRItem {
  title: string;
  description: string;
  icon: string;
}

const CSRLens: React.FC = () => {
  const csrItems: CSRItem[] = [
    {
      title: "Increase Affluence",
      description: "Our approach to CSR is all about adding value to the economy while creating financial stability in our organization. And we keep it in check by providing a secure and stable work environment for our employees, giving them the essential luxury of choice and activism.",
      icon: "📊"
    },
    {
      title: "Ecological Sustainability", 
      description: "Either software or hardware, we believe corporate organizations must aim at creating solutions that aid improving the ecological impression.",
      icon: "🌱"
    },
    {
      title: "Globalization",
      description: "From clients to employees, we believe diversity initiatives help to cut off any cultural differences and bring more rationalization to the business. Besides, the CSR lens helps to filter strategic decisions allowing optimal outcomes.",
      icon: "🌍"
    },
    {
      title: "People-First Policies",
      description: "We value the words, thoughts, and creativity in people, and we try to meet such goals by nurturing employee growth through our business practices and delivering excellence to our clients.",
      icon: "📋"
    },
    {
      title: "Flow of Information",
      description: "The growth of social media and access to the internet have completely transformed the way we all deal with information. And therefore, we aim at practicing transparency and optimized sharing.",
      icon: "🔄"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#020317] text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Seeing CSR (Corporate Social Responsibility)
            </span>
            <br />
            <span className="text-white">
              From The Lense Of Diversity and Inclusion
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            With our strong work ethics and effective work culture, we foster CSR initiatives that empower global business agenda.
          </p>
        </div>

        {/* CSR Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {csrItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRLens; 