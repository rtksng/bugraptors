import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const CreateDreamTeam: React.FC = () => {
  const [activeModel, setActiveModel] = useState('fixed-price');

  const engagementModels = [
    {
      id: 'fixed-price',
      title: 'Fixed Price',
      description: 'A perfect model created for those who need to drive their objectives while aligning with the scope of the project. From project analysis to planning, we help you with expert assistance on entire testing efforts. The fixed price model brings you fair and justified costs as we help you foster calculated accomplishments that are worked through milestone-wise invoice generation.',
      whenToChoose: [
        'When you need to work on pre-discussed & short-term projects.',
        'Suitable for Projects with clear specifications.',
        'Projects that do not have any scope for change in requirements.'
      ]
    },
    {
      id: 'time-material',
      title: 'Time & Material',
      description: 'This model is perfect for projects where requirements may evolve over time. You pay for the actual time and resources spent on your project, providing maximum flexibility and transparency in billing.',
      whenToChoose: [
        'When project scope is likely to change during development.',
        'For long-term projects with evolving requirements.',
        'When you need maximum flexibility in resource allocation.'
      ]
    },
    {
      id: 'managed-testing',
      title: 'Managed Testing',
      description: 'Complete end-to-end testing management where we take full responsibility for your QA processes. This model includes dedicated testing teams, tools, and infrastructure management.',
      whenToChoose: [
        'When you want to outsource entire testing operations.',
        'For companies looking to reduce internal QA overhead.',
        'When you need access to specialized testing expertise.'
      ]
    },
    {
      id: 'staff-augmentation',
      title: 'Staff Augmentation',
      description: 'Extend your existing team with our skilled QA professionals who work as an integral part of your organization. Perfect for scaling your testing capabilities quickly.',
      whenToChoose: [
        'When you need to scale your team quickly.',
        'For projects requiring specific skill sets.',
        'When you want to maintain direct control over resources.'
      ]
    }
  ];

  const activeModelData = engagementModels.find(model => model.id === activeModel);

  return (
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Create Your Dream Team
          </h2>
          <p className="text-xl text-gray-300">
            Find out which model best suits your needs and purpose
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Side - Engagement Models List */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {engagementModels.map((model) => (
                <div key={model.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setActiveModel(activeModel === model.id ? '' : model.id)}
                    className="w-full p-6 text-left hover:bg-white/10 transition-all duration-300 flex items-center justify-between"
                  >
                    <span className="text-lg font-semibold text-white">{model.title}</span>
                    {activeModel === model.id ? (
                      <FaChevronDown className="w-4 h-4 text-purple-400" />
                    ) : (
                      <FaChevronRight className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                  
                  {/* Expanded Content */}
                  {activeModel === model.id && (
                    <div className="px-6 pb-6 border-t border-white/10">
                      <div className="pt-6 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                          {model.description}
                        </p>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3">When to choose?</h4>
                          <ul className="space-y-2">
                            {model.whenToChoose.map((point, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-300 text-sm">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full flex items-center justify-center">
              {/* Growth Chart Image */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl"></div>
                
                {/* Chart Content */}
                <div className="relative p-8">
                  {/* Coins Stack */}
                  <div className="flex items-end justify-center space-x-2 mb-8">
                    {[1, 2, 3, 4].map((stack, index) => (
                      <div key={stack} className="flex flex-col items-center">
                        {[...Array(stack)].map((_, coinIndex) => (
                          <div
                            key={coinIndex}
                            className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-300 mb-1 shadow-lg"
                            style={{
                              animationDelay: `${(index * 4 + coinIndex) * 0.1}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="relative">
                    <svg
                      className="w-full h-16 text-red-500"
                      viewBox="0 0 400 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Arrow Path */}
                      <path
                        d="M10 50 Q100 40 200 30 Q300 20 380 10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="animate-pulse"
                      />
                      {/* Arrow Head */}
                      <path
                        d="M375 5 L385 10 L375 15 L380 10 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-white mb-2">Growth & Success</h3>
                    <p className="text-gray-300 text-sm">
                      Choose the right engagement model for maximum ROI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateDreamTeam; 