import React from 'react';

interface CommonCTABarProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
}

const CommonCTABar: React.FC<CommonCTABarProps> = ({
  title,
  buttonText,
  onButtonClick,
  className = ""
}) => {
  return (
    <section className={`py-12 md:py-16 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="custom-bg-color rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-2xl lg:rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full -translate-y-16 md:-translate-y-36 translate-x-16 md:translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-28 md:w-56 h-28 md:h-56 bg-white/5 rounded-full translate-y-14 md:translate-y-28 translate-x-14 md:translate-x-28"></div>

          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {title}
              </h2>
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={onButtonClick}
                className="px-6 md:px-10 py-3 md:py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-white/20 whitespace-nowrap"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonCTABar; 