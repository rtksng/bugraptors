import React from 'react';
import {
  FaRocket,
  FaCogs,
  FaChartLine,
  FaEye,
  FaAward,
  FaArrowRight,
} from 'react-icons/fa';
import raptorinfinity from "../../../assets/RaptorInfinity.svg"
import raptorvista from "../../../assets/RaptorVista.svg"
import raptorsecurity from "../../../assets/RaptorSecurity.svg"
import mobraptors from "../../../assets/MoboRaptors.svg"
import CardTitle from '../common/CardTitle';
import SectionTitle from '../common/SectionTittle';


const frameworks = [
  {
    name: 'RaptorVista',
    img: raptorvista,
    description: 'Analytics & Insights Platform',
    color: 'from-purple-500 to-blue-500',
    alt: 'alst'
  },
  {
    name: 'MoboRaptors',
    img: mobraptors,
    description: 'Mobile Testing Suite',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'RaptorSecurity',
    img: raptorsecurity,
    description: 'Security Testing Framework',
    color: 'from-cyan-500 to-purple-500'
  },
  {
    name: 'RaptorInfinity',
    img: raptorinfinity,
    description: 'Performance Testing Engine',
    color: 'from-purple-500 to-pink-500'
  }
];

const process = [
  { step: 'Project Assessment', icon: <FaChartLine className="w-4 h-4" /> },
  { step: 'Strategic Planning', icon: <FaCogs className="w-4 h-4" /> },
  { step: 'Flawless Execution', icon: <FaRocket className="w-4 h-4" /> },
  { step: 'Transparent Reporting', icon: <FaEye className="w-4 h-4" /> },
  { step: 'Continuous Improvement', icon: <FaArrowRight className="w-4 h-4" /> }
];



const WhyChooseBugRaptors: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24   overflow-hidden">
      {/* Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className=""></div>
        <div className=""></div>

        {/* Subtle decorative elements */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Enhanced Header - Mobile Optimized */}
        <div className="text-center mb-12 sm:mb-16 ">
         
         
          <SectionTitle
            title="Why Choose BugRaptors as Your Software Testing Partner?"
            subtitle="Your software's success starts with the right testing partner! Discover what makes us the preferred choice for quality assurance."
            tag="Why Choose Us"
          />
        </div>



        {/* Main Content Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8 ">
          {/* Left Column - Expertise Cards */}
          <div className="space-y-4 sm:space-y-6 flex flex-col ">


            <div className="flex items-center grow p-6 space-x-3 sm:space-x-4 bg-[#371C85]/8 rounded-lg sm:rounded-xl lg:rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <img
                src="src/assets/ExpertiseIconSvg.svg"
                alt="Spark icon"
                className="size-12 mr-2 sm:mr-3 "
              />

              <div>
                {/* <h3 className="sm:text-xl lg:text-[28px] font-medium text-white mb-2 sm:mb-3">
                  Expertise in Advanced Next-Gen Tools
                </h3>
                <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg ">
                  We specialize in tools like Selenium, WebDriverIO, Cypress, Playwright, and AI/ML libraries to deliver comprehensive, next-gen testing solutions.
                </p> */}

                <CardTitle
                  title="Expertise in Advanced Next-Gen Tools"
                  description="We specialize in tools like Selenium, WebDriverIO, Cypress, Playwright, and AI/ML libraries to deliver comprehensive, next-gen testing solutions."
                  align="left"
                />
              </div>
            </div>

            {/* Certified Expertise */}
            <div className="flex items-center grow p-6 space-x-3 sm:space-x-4 bg-[#371C85]/8 rounded-lg sm:rounded-xl lg:rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <img
                src="src/assets/CertifiedExpertiseSvg.svg"
                alt="Spark icon"
                className="size-12 mr-2 sm:mr-3 "
              />

              <div>
                
                <CardTitle
                  title="Certified Expertise"
                  description="Our ISTQB-certified experts deliver scalable, reliable QA solutions for complex, mission-critical applications."
                  align="left"
                />
              </div>
            </div>



          </div>

          {/* Right Column - Proprietary Frameworks */}
          <div className="relative bg-[#371C85]/8  rounded-xl sm:rounded-2xl p-4 sm:p-6  border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-start z-50">
              <img
                src="src/assets/OurPropertyFrameworkSvg.svg"
                alt="Spark icon"
                className="size-12 mr-2 sm:mr-3 self-start  "
              />

              <div className="flex-1 ">
               

                <CardTitle
                  title="Our Proprietary Frameworks"
                  description="Our AI-powered, internally developed frameworks significantly enhance testing efficiency and accuracy:"
                  align="left"
                />
              </div>
            </div>


            {/* Framework Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 gap-4 max-w-[278px] z-50 mt-4">
              {frameworks.map((framework, index) => (
                <div
                  key={framework.name}
                  className="py-2.5 px-5 glassmorph-bg  border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={framework.img}
                      alt={framework.alt}
                      className="size-8 object-contain"
                    />
                    <h4 className="text-lg leading-tight font-medium text-nowrap text-[#c0c0c0] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white to-purple-200 pb-1 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                      {framework.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>


            <img
              src="src/assets/circleimgae.png"
              alt="circleimage"
              className="absolute bottom-0 right-0  w-[378px] h-[299px] z-10"
            />
          </div>
        </div>

        {/* Bottom Process Section - Mobile Optimized */}
        <div className=" bg-[#371C85]/8 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">


          <div className="flex items-start z-50">
            <img
              src="src\assets\processicon.svg"
              alt="Spark icon"
              className="size-12 mr-2 sm:mr-3 self-start  "
            />

            <div className='flex-1'>
              <div className="flex-1 ">
               
                <CardTitle
                  title="Transparent, Results-Driven Process"
                  description="Our proven methodology ensures consistent quality delivery through structured phases and continuous improvement."
                  align="left"
                />
              </div>
              {/* Process Steps - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1 sm:gap-5 mt-4">
                {process.map((item, index) => (
                  <div
                    key={item.step}
                    className="flex items-center justify-center space-x-2 sm:space-x-3 sm:px-3 sm:py-2 px-5 py-3 glassmorph-bg rounded-full border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* <div className="text-purple-400 flex-shrink-0">
                      {item.icon}
                    </div> */}
                    <span className="text-gray-300 text-base text-center whitespace-nowrap ">{item.step}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default WhyChooseBugRaptors; 