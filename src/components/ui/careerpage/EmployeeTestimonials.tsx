import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EmployeeTestimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Amrit Pal Singh",
      position: "Consultant - Quality Assurance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "From the moment I joined BugRaptors, I knew I had made the right decision. Being a consultant in Quality Assurance is always challenging, but working with some of the best minds in the industry makes it that much easier and gives me the perfect platform to perform to the best of my abilities. I look forward to contributing to and growing with this incredible team for many more years."
    },
    {
      name: "Sarah Johnson",
      position: "Senior Test Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "BugRaptors has provided me with incredible growth opportunities. The supportive team environment and cutting-edge projects have allowed me to expand my skills in automation testing. The company truly values work-life balance and professional development."
    },
    {
      name: "Michael Chen",
      position: "Automation Test Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "Working at BugRaptors has been transformative for my career. The company's commitment to innovation and quality aligns perfectly with my professional goals. I've had the opportunity to lead challenging projects and mentor junior team members."
    },
    {
      name: "Emily Rodriguez",
      position: "Performance Testing Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "The learning culture at BugRaptors is exceptional. I've been able to specialize in performance testing while collaborating with diverse teams on complex projects. The company invests in employee growth through training and certifications."
    },
    {
      name: "David Kumar",
      position: "Security Testing Expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      quote: "BugRaptors offers a unique blend of technical excellence and collaborative culture. Working on security testing projects has enhanced my expertise significantly. The management is supportive and always encourages innovative solutions."
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
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-purple-200">Employee Testimonials</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Explore Stories Of Our Professionals
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
                  <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                      {/* Profile Section */}
                      <div className="lg:col-span-4">
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
                          <div className="relative w-32 h-32 mx-auto mb-6">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover rounded-full border-4 border-purple-400/30"
                            />
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-2">
                            {testimonial.name}
                          </h3>
                          <p className="text-purple-400 font-medium">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      {/* Quote Section */}
                      <div className="lg:col-span-8">
                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                          {/* Quote mark */}
                          <div className="absolute -top-4 -left-4 text-6xl text-purple-400/30 font-serif">
                            "
                          </div>
                          
                          {/* Vertical accent line */}
                          <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full" />
                          
                          <div className="pl-8">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 z-10"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 z-10"
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
    </section>
  );
};

export default EmployeeTestimonials; 