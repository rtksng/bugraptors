import React from 'react';

const HiringProcess: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Hiring Process
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Cheers To New Beginnings */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">
              Cheers To New Beginnings
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Since you have landed here on the hiring process, we would like to start it by 
                wishing you all the luck. As the process to hire new candidates is a 
                professional practice, the initial stage of hiring begins with our managers 
                and recruiters taking a tour of all the CVs to filter suitable profiles.
              </p>
              
              <p>
                We only choose candidates who are most suitable to our defined criteria 
                before proceeding to our second round of selection i.e., interviewing 
                candidates. However, the time of submitting your application and interview 
                may vary depending on the applications submitted.
              </p>
            </div>
          </div>

          {/* Right Column - Words By HR */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">
              Words By HR
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Being a human resource expert needs you to connect with different people. 
                After all, fostering new connections allows you to accommodate more 
                ideas, each one different from the other and these ideas for any 
                organizations are the ladder to progress and success.
              </p>
              
              <p>
                At BugRaptors, we consider it to be our responsibility to create an 
                environment that is based on equality and diversity as it helps us to 
                celebrate unified achievements and sustain better even when the backdrop 
                is having rapid variations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringProcess; 