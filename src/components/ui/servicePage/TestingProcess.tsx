import React from 'react';
import { FaClipboardList, FaCogs, FaCheckCircle, FaRocket } from 'react-icons/fa';

const TestingProcess: React.FC = () => {
  const processSteps = [
    {
      icon: <FaClipboardList className="text-4xl text-blue-400" />,
      title: "Requirements Analysis",
      description: "We thoroughly analyze your project requirements, understand your business goals, and create a comprehensive testing strategy.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaCogs className="text-4xl text-purple-400" />,
      title: "Test Planning & Design",
      description: "Our experts design detailed test cases, set up testing environments, and create automation frameworks tailored to your needs.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaCheckCircle className="text-4xl text-green-400" />,
      title: "Test Execution",
      description: "Execute comprehensive testing including functional, performance, security, and usability tests using both manual and automated approaches.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaRocket className="text-4xl text-orange-400" />,
      title: "Reporting & Delivery",
      description: "Provide detailed reports with actionable insights, bug tracking, and continuous monitoring to ensure quality throughout the lifecycle.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-[120px] "></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-[120px]  delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our</span>
            <span className="custom-text-gradient"> Testing Process</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            A systematic approach to ensure comprehensive testing coverage and deliver exceptional quality results for your software applications.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="group relative text-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step Number */}
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400/60 transition-all duration-300">
                  <span className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                )}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingProcess; 