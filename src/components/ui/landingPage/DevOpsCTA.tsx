import React from 'react';
import {
  FaRocket,
  FaCogs,
  FaInfinity,
  FaShieldAlt,
  FaChartLine,

  FaCheckCircle,
  FaUsers,
  FaClock
} from 'react-icons/fa';
import CTAButton from '../common/Button';

const DevOpsCTA: React.FC = () => {
  const features = [
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: "Accelerated Delivery",
      description: "Faster time-to-market with automated pipelines"
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: "Quality Assurance",
      description: "Built-in testing at every stage of development"
    },
    {
      icon: <FaInfinity className="w-5 h-5" />,
      title: "Continuous Integration",
      description: "Seamless CI/CD workflows and automation"
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      title: "Performance Monitoring",
      description: "Real-time insights and performance analytics"
    }
  ];

  const benefits = [
    "Reduce deployment time by up to 90%",
    "Increase release frequency by 200x",
    "Minimize rollback incidents by 50%",
    "Improve team collaboration efficiency"
  ];

  return (
    <section className="relative py-20 md:py-24  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 "></div>

        {/* Subtle decorative elements */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Header Badge */}


            <div className="text-left mb-12 sm:mb-16 ">
              <div className="inline-flex items-left px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4 sm:mb-6">
                <FaCogs className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-medium text-purple-200">DevOps Excellence</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium mb-4 sm:mb-6 leading-tight w-[694px] mx-auto  text-radial-gradient">
                Continuous Testing & DevOps Integration
              </h2>


              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                Integrate quality at every stage of your software delivery pipeline. Our DevOps and continuous testing solutions ensure rapid feedback, faster releases, and robust, reliable software.

              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center space-x-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <FaCheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <CTAButton onClick={() => console.log('Clicked!')} variant="primary">Get Started Now</CTAButton>
              <CTAButton onClick={() => console.log('Clicked!')} variant="secondary">Watch Demo</CTAButton>


             
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

              <div className="relative bg-gradient-to-br from-[#1a1f4b]/40 to-[#0d1333]/40 backdrop-blur-xl rounded-2xl border border-blue-500/20 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                  alt="DevOps and Continuous Testing Workflow"
                  className="w-full h-80 object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1333]/80 via-transparent to-transparent"></div>

                {/* Stats Cards */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="flex items-center space-x-2">
                        <FaClock className="w-4 h-4 text-blue-400" />
                        <div>
                          <div className="text-white font-semibold text-sm">90%</div>
                          <div className="text-gray-300 text-xs">Faster Deployments</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                      <div className="flex items-center space-x-2">
                        <FaUsers className="w-4 h-4 text-cyan-400" />
                        <div>
                          <div className="text-white font-semibold text-sm">200+</div>
                          <div className="text-gray-300 text-xs">Teams Optimized</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-4 bg-custom-transparent rounded-xl border  hover:border-blue-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 custom-bg-color rounded-lg ">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsCTA; 