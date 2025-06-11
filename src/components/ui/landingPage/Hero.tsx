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
        <div className="space-y-3 sm:space-y-4 lg:space-y-2 max-w-3xl pr-5">
          {/* Enhanced Badge - Mobile Optimized */}
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2 ">
            <img
              src="src\assets\sparksvg.svg"
              alt="Spark icon"
              className="size-5 sm:size-6 md:size-7 lg:size-8 mr-2 sm:mr-3"

            />
            <span className="text-sm sm:text-3xl text-white">Reinvented</span>
          </div>

          <div className="space-y-4 sm:space-y-6 ">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold ">
              <span className="block text-white ">
                QA Engineering
              </span>
              <span className="block custom-text-gradient mt-1 sm:mt-2">
                Services
              </span>

            </h1>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300  leading-relaxed">
                <span >Enhanced by <span className="font-bold">AI</span></span>
                <span className=" mx-2 sm:mx-4">|</span>
                <span >Driven by <span className="font-bold">Automation</span></span>
                <span className=" mx-2 sm:mx-4">|</span> <br></br>
                <span>Delivered by <span className="font-bold">Experts!</span></span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">


            <button className="group px-6 py-3 sm:px-8 sm:py-4 border-2 rounded-full  custom-border-gradient text-purple-300 hover:text-white font-semibold   hover:bg-purple-600/10 transition-all duration-300 w-full sm:w-auto cursor-pointer">
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