import React from 'react';
import {
  FaBrain,
  FaRobot,
  FaEye,
  FaSearch,
  FaBug,
  FaDatabase,
  FaTools,
  FaCog
} from 'react-icons/fa';
import mobraptors from "../../../assets/circuitimagesvg.svg"
const tools = [
  {
    name: 'RaptorGen',
    description: 'Generate diverse and realistic test data with the power of AI.',
    icon: FaBrain,
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    name: 'RaptorAssist',
    description: 'Leveraging AI to rapidly generate tailored test cases & documentation.',
    icon: FaRobot,
    gradient: 'from-cyan-600 to-purple-600'
  },
  {
    name: 'RaptorVision',
    description: 'Detect visual bugs instantly with AI-powered visual testing.',
    icon: FaEye,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'RaptorScan',
    description: 'Uncover broken links with automated scans.',
    icon: FaSearch,
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    name: 'RaptorDebug',
    description: 'Advanced debugging and issue detection with intelligent analysis.',
    icon: FaBug,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    name: 'RaptorData',
    description: 'Comprehensive test data management and validation tools.',
    icon: FaDatabase,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'RaptorPipe',
    description: 'Streamlined testing pipelines for continuous integration.',
    icon: FaTools,
    gradient: 'from-purple-600 to-indigo-600'
  }
];

const ProprietaryTools: React.FC = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 "></div>
       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-900/5 to-transparent rounded-full"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Header Content */}


          <div className="text-left mb-12 sm:mb-16 ">
            <div className="inline-flex items-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4 sm:mb-6">
              <FaCog className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-medium text-purple-200">Proprietary Tools</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium mb-4 sm:mb-6 leading-tight w-[694px] mx-auto  text-radial-gradient">
              Delivering Excellence Through
              AI-Enhanced
              Proprietary Tools
            </h2>


            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              Elevate your QA strategy with BugRaptors' AI-powered proprietary tools—seamlessly complementing our expert QA services to accelerate testing, enhance DevOps workflows, and ensure exceptional software quality across every stage of development.

            </p>

            <img src={mobraptors} className="pt-12" alt="Circuit Image" />
            <div>

    </div>
            </div>

          {/* Right Column - Tools List */}
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group relative bg-custom-transparent rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  {/* Icon Container */}
                  <div className={`relative flex-shrink-0 w-12 h-12 custom-bg-color rounded-lg flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg"></div>
                    <tool.icon className="w-6 h-6 text-white relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Background Gradient */}
                <div className={`bg-custom-transparent group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProprietaryTools; 