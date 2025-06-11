import React, { useState } from 'react';
import SectionTitle from '../common/SectionTittle';

interface ProjectCard {
  id: number;
  title: string;
  caseDetails: string;
  category: string;
  backgroundImage: string;
}

const MoboraptorsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(1);

  const projects: ProjectCard[] = [
    {
      id: 1,
      title: "Reassuring the Quality and Security of Web-Mobile based POS System",
      caseDetails: "Reduced security vulnerabilities by 95% and improved transaction processing speed by 40%",
      category: "POS Security Testing",
      backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "E-commerce Platform Performance Optimization",
      caseDetails: "Achieved 99.9% uptime and 60% faster page load times during peak shopping seasons",
      category: "E-commerce Testing",
      backgroundImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Healthcare Data Management System Validation",
      caseDetails: "100% compliance achievement with zero data breach incidents post-deployment",
      category: "Healthcare Testing",
      backgroundImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Financial Services Mobile App Security",
      caseDetails: "Enhanced security protocols preventing 99.8% of potential fraud attempts",
      category: "FinTech Security",
      backgroundImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-[#020317]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl "></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl  delay-1000"></div>
      </div>

      <div className="container mx-auto  relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div className="lg:max-w-2xl">
              <SectionTitle
                title="Making a Difference with Every Project"
                para1="Here is the glimpse of what we have done for our customers and how it has transformed their business."
                align='left'
              />
            </div>

            {/* View All Button */}
            <div className="mt-4 lg:mt-0">
              <button
                className="group relative px-6 py-3 size-[64px] custom-bg-color text-white   shadow-lg transform hover:scale-105 transition-all duration-300"
                aria-label="View all projects"
              >
                <span className="relative z-10 flex items-center">
                  View All
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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

          {/* Horizontal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative cursor-pointer transition-all duration-500 ${activeCard === project.id
                    ? 'transform scale-105'
                    : 'hover:transform hover:scale-102'
                  }`}
                onMouseEnter={() => setActiveCard(project.id)}
                onClick={() => setActiveCard(project.id)}
                role="button"
                tabIndex={0}
                aria-label={`Select project: ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveCard(project.id);
                  }
                }}
              >
                {/* Card Background */}
                <div className={`
                  relative rounded-2xl border transition-all duration-500 h-80 flex flex-col overflow-hidden
                  ${activeCard === project.id
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                    : 'border-purple-500/20 hover:border-purple-500/40'
                  }
                `}>
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url(${project.backgroundImage})` }}
                  >
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Card Number */}
                  <div className={`
                    absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 z-10
                    ${activeCard === project.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-110'
                      : 'bg-black/50 backdrop-blur-sm text-white group-hover:bg-purple-500/80'
                    }
                  `}>
                    {project.id.toString().padStart(2, '0')}
                  </div>

                  {/* Card Content - Bottom */}
                  <div className="relative z-10 mt-auto p-6">
                    <h3 className="text-lg font-semibold mb-4 text-white leading-tight">
                      {project.title}
                    </h3>

                    {/* Case Details CTA */}
                    <button className="group/link flex items-center text-sm font-medium text-purple-300 hover:text-white transition-all duration-300">
                      Case details
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoboraptorsSection; 