import React from 'react';

const GrowingSection: React.FC = () => {
  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 leading-tight">
              We Are Growing<br />Each Day
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe in passion, consistency, and knowing how to cope up with new challenges without making mistakes. 
              Coming together at the workplace makes you feel lucky, but growing and working together is not an accident. 
              Our collaborative effort is the reason for success.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              We believe that employees are the biggest strength of our organization. They help us make way to the 
              success and therefore it is our responsibility to stick to our commitments of leading them towards a 
              happy, healthy, and fulfilling lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingSection; 