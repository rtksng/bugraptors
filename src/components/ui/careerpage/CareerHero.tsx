import React from 'react';

const CareerHero: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Create a bigger impact accomplishing your goals
          </h1>
          <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-8 text-gray-200 leading-relaxed">
            If you are looking for a prosperous and fulfilling career, BugRaptors is the place to be. From acknowledging the efforts of our teams to deeply engraved ethics, we help you experience a dream career in the QA industry.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerHero; 