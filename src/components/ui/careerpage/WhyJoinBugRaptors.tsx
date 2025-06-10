import React from 'react';

const WhyJoinBugRaptors: React.FC = () => {
  const reasons = [
    {
      number: "01",
      title: "World Class Training Programs",
      description: "Explore the best of manual and automated testing internship programs."
    },
    {
      number: "02", 
      title: "Innovative Work Environment",
      description: "We encourage employees to embrace unorthodox thinking to make tomorrow tech-leaders."
    },
    {
      number: "03",
      title: "Work With New Technologies", 
      description: "Explore all ways of testing with latest tech stack to deepen your QA skills and be a Raptors Geek."
    },
    {
      number: "04",
      title: "Work Life Balance",
      description: "We allow employees to maintain their home life while focusing on the career at the same time."
    }
  ];

  return (
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Why Join BugRaptors
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center border-4 border-[#020317]">
                <span className="text-white font-bold text-lg">{reason.number}</span>
              </div>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>

              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinBugRaptors; 