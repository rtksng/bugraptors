import React from 'react';

const CSRTestimonial: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#020317] text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Profile Image and Name */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl">
                <img
                  src="/api/placeholder/160/160"
                  alt="Yashu Kapila"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-80"></div>
            </div>
            <h3 className="text-2xl font-bold mt-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Yashu Kapila
            </h3>
          </div>

          {/* Quote */}
          <div className="flex-1">
            <div className="relative">
              {/* Quote mark */}
              <div className="absolute -top-4 -left-4 text-6xl text-purple-400/30 font-serif">
                "
              </div>
              
              <blockquote className="text-lg sm:text-xl leading-relaxed text-gray-200 pl-8">
                CSR for us is more of a moral responsibility that we are obliged to follow. Being a part of a civilized and ethical society demands us all to behave or operate in a manner that takes us closer to sustainability and healthier living. After all, we all are humans first, and being corporate citizens comes as a privilege that allows us to create better earth for everyone.
              </blockquote>

              {/* Closing quote mark */}
              <div className="text-right mt-4">
                <span className="text-6xl text-purple-400/30 font-serif">"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRTestimonial; 