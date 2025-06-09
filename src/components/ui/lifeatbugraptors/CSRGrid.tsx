import React from 'react';

const CSRGrid: React.FC = () => {
  const initiatives = [
    {
      title: "Volunteering In The Community",
      description: "Free medicine or free food, we never hesitate to volunteer when it comes to lending a helping hand to the community."
    },
    {
      title: "Corporate Policies To Reduce Carbon Footprints",
      description: "We encourage anything that prevents adding to the existing carbon footprints. We practice no use of paper policy, everything that could follow 3Rs (Reduce, Reuse, & Recycle)."
    },
    {
      title: "Women Empowerment At Its Best",
      description: "Maternity Leaves, flexibility, health benefits, and perfect work-life balance, we promote women leaders of tomorrow in every way possible."
    },
    {
      title: "Taking Care Of The Environment",
      description: "Planting trees or celebrating world environment day by nurturing eco-friendly practices, we encourage our employees, clients, and everybody out there to save the environment."
    },
    {
      title: "Friendly Labor Policies",
      description: "With health insurance for our employees and their families to easy leave policies, we keep on amending our labor policies to offer best of work life to our employees."
    }
  ];

  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors duration-300">
                  {initiative.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {initiative.description}
                </p>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSRGrid; 