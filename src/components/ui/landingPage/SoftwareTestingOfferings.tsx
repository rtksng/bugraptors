import React from 'react';
import {
  FaVial,
  FaDesktop,
  FaMousePointer,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaCog,

} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../common/SectionTittle';

const offerings = [
  {
    name: 'Test Case Creation',
    description: 'Comprehensive test case development using AI-powered platforms to identify defects and ensure complete functionality coverage',
    icon: <FaVial className="w-7 h-7" />,
    gradient: 'from-purple-600 to-blue-600',
    category: 'Planning'
  },
  {
    name: 'Compatibility Testing',
    description: 'Cross-platform verification ensuring seamless operation across browsers, devices, and operating systems',
    icon: <FaDesktop className="w-7 h-7" />,
    gradient: 'from-blue-600 to-cyan-600',
    category: 'Cross-Platform'
  },
  {
    name: 'Functional Testing',
    description: 'Thorough validation that your application performs exactly as intended according to business requirements',
    icon: <FaMousePointer className="w-7 h-7" />,
    gradient: 'from-cyan-600 to-purple-600',
    category: 'Functionality'
  },
  {
    name: 'User Testing',
    description: 'End-user validation ensuring the software meets actual user needs and business objectives through UAT',
    icon: <FaCheckCircle className="w-7 h-7" />,
    gradient: 'from-purple-600 to-blue-600',
    category: 'Validation'
  },

];



const SoftwareTestingOfferings: React.FC = () => {
  return (
    <section className="relative py-20  overflow-hidden radial-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 "></div>
       

        {/* Subtle decorative elements */}
        {[...Array(5)].map((_, i) => (
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}


        <SectionTitle tag="Our Services" title=" Comprehensive Software Testing Solutions" subtitle=" From initial planning to final deployment, we provide end-to-end testing services that transform your software from bugged to bug-free." />

        {/* Offerings Carousel */}
        <div className="relative px-12">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="!overflow-visible"
          >
            {offerings.map((offering, index) => (
              <SwiperSlide key={offering.name}>
                <div
                  className="group relative bg-custom-transparent rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 h-full"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-200">
                      {offering.category}
                    </span>
                  </div>


                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {offering.name}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4 h-[110px] text-wrap">
                      {offering.description}
                    </p>

                    <div className="mt-2">
                      <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium cursor-pointer">
                        Learn More
                        <FaArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Subtle Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Navigation Buttons */}
          <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white hover:border-purple-500/50 transition-all duration-300 z-10 after:hidden cursor-pointer">
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm flex items-center justify-center text-white hover:border-purple-500/50 transition-all duration-300 z-10 after:hidden cursor-pointer">
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>


      </div>
    </section>
  );
};

export default SoftwareTestingOfferings; 