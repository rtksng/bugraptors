import React from 'react';
import {
  FaArrowRight,
} from 'react-icons/fa';
import StarDotsBlink from '../common/StarDotsBlink';

const Hero: React.FC = () => {
  return (
    // <section className="relative min-h-screen flex items-center py-16 sm:py-20 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
    <section className=" min-h-screen h-[calc(100vh-200px)]  flex items-center ">
      {/* Simplified Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-600/15 to-blue-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-gradient-to-r from-cyan-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-radial from-indigo-900/8 to-transparent rounded-full"></div>
      </div>




      <div className=" -top-[200px] shadow-[0px_40px_60px_0px_rgba(8,11,58,_0.5)] flex items-center justify-end mx-auto lg:size-[1200px] rounded-full relative z-10 overflow-hidden bg-[#010212]">

        {/* Image-Pannel */}
        <div className="absolute left-[-80px] -bottom-10  w-[724px] h-[920px] overflow-hidden">
          <img
            src="src/assets/HeroImage.png"
            alt="HeroImage"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text-Pannel */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-2 max-w-3xl mr-16  max-w-[500px] mt-24">
          {/* Enhanced Badge - Mobile Optimized */}
          <div className="inline-flex items-center py-2  sm:py-2  md:py-2 ">
            <img
              src="src\assets\sparksvg.svg"
              alt="Spark icon"
              className="size-5 sm:size-6 md:size-7 lg:size-8 mr-2 sm:mr-3"

            />
            <span className="text-sm lg:text-2xl text-[#E0E0E0]">Reinvented</span>
          </div>

          <div className="space-y-4 sm:space-y-4">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
              <span className="block text-[#e0e0e0] animate-fade-in-up-1">
                QA Engineering
              </span>
              <span className="block custom-text-gradient mt-1 sm:mt-2 animate-fade-in-up-2">
                Services
              </span>
            </h1>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-300 leading-relaxed flex flex-wrap justify-center sm:justify-start max-w-[500px] mx-auto break-words text-center sm:text-left">
                <span className="flex items-center whitespace-nowrap">
                  <span>Enhanced by&nbsp;</span>
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 animate-pulse-light">AI</span>
                </span>

                <span className="text-gray-500 text-sm sm:text-xl md:text-2xl lg:text-2xl mx-2 sm:mx-3 md:mx-4 font-light inline-block">·</span>

                <span className="flex items-center whitespace-nowrap">
                  <span>Driven by&nbsp;</span>
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 animate-pulse-light animation-delay-200">Automation</span>
                </span>

                {/* This span now explicitly forces the last phrase to a new line on all screen sizes */}
                <span className="block w-full h-0 sm:h-auto my-2 sm:my-0"></span>

                <span className="flex items-center whitespace-nowrap">
                  <span>Delivered by&nbsp;</span>
                  <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 animate-pulse-light animation-delay-400">Experts!</span>
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">


            <button className="group px-6 py-3 sm:px-8 sm:py-4 border-1 rounded-lg   text-purple-300 hover:text-white    hover:bg-purple-600/10 transition-all duration-300 w-full sm:w-auto cursor-pointer">
              <span className="flex items-center justify-center text-base sm:text-lg">
                Accelerate Innovation with Smarter Testing
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translatea-x-1 transition-transform duration-300" />

              </span>
            </button>
          </div>
        </div>


      </div>
      <StarDotsBlink />
      {/* <div
        className="absolute inset-0 pointer-events-none opacity-15 z-0"
        style={{
          backgroundImage: `
        radial-gradient(2px 2px at 10px 10px, white, transparent),
        radial-gradient(2px 2px at 50px 40px, white, transparent),
        radial-gradient(2px 2px at 80px 70px, white, transparent),
        radial-gradient(2px 2px at 120px 100px, white, transparent),
        radial-gradient(2px 2px at 160px 140px, white, transparent)
      `,
          backgroundSize: '200px 200px',
        }}
      /> */}

    </section>

  );
};

export default Hero; 