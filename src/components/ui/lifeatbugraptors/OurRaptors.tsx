import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const OurRaptors: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Amit Pal Singh",
      position: "Consultant - Quality Assurance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "From the moment I joined BugRaptors, I knew I had made the right decision. Being a consultant in Quality Assurance is always challenging, but working with some of the best minds in the industry makes it that much easier and gives me the perfect platform to perform to the best of my abilities. I look forward to contributing to and growing with this incredible team for many more years."
    },
    {
      name: "Sarah Johnson",
      position: "Senior Test Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "BugRaptors has been an incredible journey of growth and learning. The collaborative environment and cutting-edge testing methodologies have helped me evolve professionally. The team's commitment to excellence and innovation makes every project exciting and rewarding."
    },
    {
      name: "Michael Chen",
      position: "Automation Test Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Working at BugRaptors has transformed my understanding of quality assurance. The emphasis on continuous learning and the opportunity to work with advanced automation frameworks has been phenomenal. I'm proud to be part of a team that truly values innovation and quality."
    },
    {
      name: "Emily Rodriguez",
      position: "Performance Testing Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "BugRaptors provides an environment where creativity meets technical excellence. The supportive leadership and diverse project portfolio have allowed me to explore various aspects of performance testing. It's truly a place where professional dreams come to life."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
            Our Raptors
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonial Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Profile Section */}
                    <div className="lg:col-span-4">
                      <div className="relative">
                        {/* Profile Image */}
                        <div className="relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                          <div className="relative">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-32 h-32 object-cover rounded-2xl mx-auto"
                            />
                          </div>

                          {/* Profile Info */}
                          <div className="text-center mt-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {testimonial.name}
                            </h3>
                            <p className="text-purple-400 font-medium">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="lg:col-span-8">
                      <div className="relative">
                        {/* Quote mark */}
                        <div className="absolute -top-4 -left-4 text-6xl text-purple-400/30 font-serif">
                          "
                        </div>
                        
                        {/* Quote background */}
                        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                          {/* Vertical accent line */}
                          <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full" />
                          
                          <div className="pl-6">
                            <p className="text-gray-300 text-lg leading-relaxed italic">
                              {testimonial.quote}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRaptors; 