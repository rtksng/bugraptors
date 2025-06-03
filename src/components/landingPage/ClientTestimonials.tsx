import React from 'react';
import { 
  FaQuoteRight, 
  FaStar, 
  FaUsers, 
  FaBuilding,
  FaChevronRight,
  FaHeart,
  FaShieldAlt
} from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechCorp Solutions',
    role: 'CTO',
    rating: 5,
    content: 'We have been associated with BugRaptors for quite a long time, and it has always been a productive relationship. From enabling us to create a secure digital platform to meeting the performance benchmarks and attaining compliance goals, they know every detail of our industry.',
    logo: 'TC'
  },
  {
    name: 'Michael Chen',
    company: 'InnovateX Labs',
    role: 'Head of Quality',
    rating: 5,
    content: 'BugRaptors transformed our testing approach with their AI-powered solutions. The automation they implemented reduced our testing cycles by 70% while improving coverage significantly. Outstanding expertise and support.',
    logo: 'IX'
  },
  {
    name: 'Emily Rodriguez',
    company: 'CloudVision Inc',
    role: 'Product Manager',
    rating: 5,
    content: 'The team at BugRaptors delivered exceptional results for our enterprise applications. Their deep understanding of complex systems and proactive approach to quality assurance exceeded our expectations.',
    logo: 'CV'
  },
  {
    name: 'David Kumar',
    company: 'FinSecure Bank',
    role: 'VP Technology',
    rating: 5,
    content: 'Security testing and compliance are critical in our industry. BugRaptors provided comprehensive testing solutions that ensured our applications met all regulatory requirements while maintaining optimal performance.',
    logo: 'FS'
  },
  {
    name: 'Lisa Thompson',
    company: 'HealthTech Pro',
    role: 'Engineering Director',
    rating: 5,
    content: 'Working with BugRaptors on our healthcare applications was seamless. Their expertise in domain-specific testing and attention to detail ensured our solutions met the highest quality standards.',
    logo: 'HT'
  },
  {
    name: 'Robert Lee',
    company: 'AutoDrive Systems',
    role: 'Quality Lead',
    rating: 5,
    content: 'The automotive industry demands rigorous testing standards. BugRaptors delivered comprehensive testing solutions that helped us accelerate our product launches while ensuring safety and reliability.',
    logo: 'AD'
  }
];

const ClientTestimonials: React.FC = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
        
        {/* Subtle decorative elements */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <FaHeart className="w-4 h-4 text-pink-400 mr-3" />
            <span className="text-sm font-medium text-purple-200">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-200">What Our</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Clients Say</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            We're proud of the partnerships we've built! Don't simply believe what we say; read what our clients have to say about working with us.
          </p>

          {/* Stats Section */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <FaUsers className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">1000+</span>
              <span className="text-gray-400">Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-gray-400">Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="w-5 h-5 text-green-400" />
              <span className="text-white font-semibold">99%</span>
              <span className="text-gray-400">Success Rate</span>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#0B1120]/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                {/* Company Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30 flex items-center justify-center">
                    <span className="text-purple-300 font-bold text-sm">{testimonial.logo}</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                      <span className="text-gray-400 text-xs">Clutch</span>
                    </div>
                  </div>
                </div>

                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30 flex items-center justify-center">
                    <FaQuoteRight className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 text-sm">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-purple-500/10 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs flex items-center mt-1">
                      <FaBuilding className="w-3 h-3 mr-1" />
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm">
                    <span className="mr-1">View Case</span>
                    <FaChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Subtle background gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/2 to-blue-500/2 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2">Ready to join our success stories?</h3>
            <p className="text-gray-400 mb-4">Let's discuss how we can help transform your testing processes</p>
            <button className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <FaUsers className="w-4 h-4 mr-2" />
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials; 