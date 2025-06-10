import React from 'react';
import { FaUsers, FaHeart, FaBaby, FaRocket } from 'react-icons/fa';

const WomenAtBugRaptors: React.FC = () => {
  const highlights = [
    {
      icon: <FaUsers className="text-3xl text-purple-400" />,
      stat: "70%",
      description: "Employment opportunities reserved for women"
    },
    {
      icon: <FaHeart className="text-3xl text-pink-400" />,
      stat: "100%",
      description: "Support during important life moments"
    },
    {
      icon: <FaBaby className="text-3xl text-blue-400" />,
      stat: "Full",
      description: "Maternity support and policies"
    },
    {
      icon: <FaRocket className="text-3xl text-green-400" />,
      stat: "Future",
      description: "Leaders of tomorrow being created"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Women At BugRaptors
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                BugRaptors take hold of every possible opportunity to bring women in IT sector forward. The process follows recognizing the leadership in women and foster women corporates who can create leaders of the tomorrow.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                We have reserved around 70 percent of employment opportunities for women. Either it is freedom of expression or bringing the outperforming women forward, we never miss the chance. The same reflects in our organizational structure and departmental hierarchy that are successfully being led by positive and inspiring women.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To ensure better retention and support, we have crafted our policies to aid women with the basic and necessary support, especially during their most important and beautiful times like maternity.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                All in all, our approach with women empowerment is meant to reflect a global message of transformation in corporate mentality that can help bring the most innovative yet vulnerable instinct of women out to drive business value.
              </p>
            </div>
          </div>

          {/* Right Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group text-center"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {highlight.stat}
                </div>
                <p className="text-gray-300 text-sm leading-tight group-hover:text-white transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Achievement Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Empowering Women in Technology
            </h3>
            <p className="text-gray-300 mb-6 text-lg max-w-3xl mx-auto">
              Our commitment to gender equality goes beyond numbers. We create an environment where women can thrive, 
              lead, and shape the future of technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">Leadership</div>
                <div className="text-gray-300 text-sm">Women in key positions</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-pink-400 mb-1">Growth</div>
                <div className="text-gray-300 text-sm">Career advancement programs</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">Support</div>
                <div className="text-gray-300 text-sm">Comprehensive wellness programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenAtBugRaptors; 