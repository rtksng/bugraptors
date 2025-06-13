import React from 'react';
import { FaArrowRight, FaEnvelope, FaPhone } from 'react-icons/fa';
import CTAButton from '../common/CTAButton';

const CompanyCTA: React.FC = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email Us",
      description: "Get in touch with our team",
      action: "hello@bugraptors.com"
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Call Us",
      description: "Speak with our experts",
      action: "+1 (555) 123-4567"
    }
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-6">
                <FaArrowRight className="w-4 h-4 text-yellow-400 mr-3" />
                <span className="text-sm font-medium text-purple-200">Ready to Get Started?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium mb-6 leading-tight text-radial-gradient">
                Let's Build Something Amazing Together
              </h2>

              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl">
                Partner with BugRaptors to ensure your software meets the highest standards. 
                Our expert team is ready to help you deliver exceptional quality products to your users.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="p-4 bg-custom-transparent rounded-xl border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 custom-bg-color rounded-lg">
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm mb-1">{method.title}</h4>
                      <p className="text-gray-400 text-xs mb-2">{method.description}</p>
                      <p className="text-purple-400 text-xs font-medium">{method.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton onClick={() => console.log('Contact clicked!')} variant="primary">
                Start Your Project
              </CTAButton>
              <CTAButton onClick={() => console.log('Demo clicked!')} variant="secondary">
                Schedule a Demo
              </CTAButton>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a1f4b]/40 to-[#0d1333]/40 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration and software testing"
                className="w-full h-80 object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1333]/80 via-transparent to-transparent"></div>
              
              {/* Stats Cards */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">99.9%</div>
                    <div className="text-gray-300 text-xs">Client Satisfaction</div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">24/7</div>
                    <div className="text-gray-300 text-xs">Support Available</div>
                  </div>

                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Global</div>
                    <div className="text-gray-300 text-xs">Reach & Impact</div>
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

export default CompanyCTA; 