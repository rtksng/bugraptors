import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface CertificationBadge {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const PugmarksSlider: React.FC = () => {
  const certifications: CertificationBadge[] = [
    {
      id: 1,
      title: "We Deliver Quick",
      image: "/api/placeholder/150/150",
      alt: "We Deliver Quick Certification"
    },
    {
      id: 2,
      title: "ISO 27001",
      image: "/api/placeholder/150/150",
      alt: "ISO 27001 Certification"
    },
    {
      id: 3,
      title: "ISO 9001",
      image: "/api/placeholder/150/150",
      alt: "ISO 9001 Certification"
    },
    {
      id: 4,
      title: "Quality Assurance",
      image: "/api/placeholder/150/150",
      alt: "Quality Assurance Badge"
    },
    {
      id: 5,
      title: "Excellence Award",
      image: "/api/placeholder/150/150",
      alt: "Excellence Award"
    },
    {
      id: 6,
      title: "Security Certified",
      image: "/api/placeholder/150/150",
      alt: "Security Certification"
    },
    {
      id: 7,
      title: "Innovation Badge",
      image: "/api/placeholder/150/150",
      alt: "Innovation Badge"
    },
    {
      id: 8,
      title: "Customer Choice",
      image: "/api/placeholder/150/150",
      alt: "Customer Choice Award"
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-[#020317] text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pugmarks
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-purple-400 !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-purple-400 !opacity-100',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="pugmarks-swiper"
          >
            {certifications.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="group flex flex-col items-center p-6">
                  {/* Badge Container */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Badge Title */}
                  <h3 className="text-sm sm:text-base font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom styles for pagination */}
      <style jsx global>{`
        .pugmarks-swiper .swiper-pagination {
          position: relative;
          margin-top: 3rem;
        }
        .pugmarks-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 6px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .pugmarks-swiper .swiper-pagination-bullet-active {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default PugmarksSlider; 