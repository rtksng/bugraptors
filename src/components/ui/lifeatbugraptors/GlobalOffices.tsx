import React from 'react';

const GlobalOffices: React.FC = () => {
  const offices = [
    {
      country: "Corporate Office - USA",
      flag: "🇺🇸",
      address: "5858 Horton Street, Suite 390, Emeryville, CA 94608, United States",
      phone: "+1 (510) 371 - 8104",
      hasPhone: true
    },
    {
      country: "Test Labs - India",
      flag: "🇮🇳",
      address: "2nd Floor, C - 134, Industrial Area, Phase - 8, Mohali - 160071, Punjab, India",
      phone: "+91 7773 - 00289",
      hasPhone: true
    },
    {
      country: "Corporate Office - India",
      flag: "🇮🇳",
      address: "52, First Floor, Sec-71, Mohali, PB 160071 India",
      phone: "",
      hasPhone: false
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      address: "97 Hackney Rd London E2 8ET",
      phone: "",
      hasPhone: false
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      address: "Suite 4004, 11 Hassall St Parramatta NSW 2150",
      phone: "",
      hasPhone: false
    },
    {
      country: "UAE",
      flag: "🇦🇪",
      address: "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E",
      phone: "",
      hasPhone: false
    }
  ];

  return (
    <div className="relative py-20 bg-[#020317]">
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-x-48 translate-y-48" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 leading-tight">
            Our Global Presence
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            BugRaptors has offices worldwide to serve our clients better with local expertise and global standards.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Flag and Country */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{office.flag}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {office.country}
                  </h3>
                </div>

                {/* Address */}
                <div className="mb-4">
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {office.address}
                  </p>
                </div>

                {/* Phone (if available) */}
                {office.hasPhone && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href={`tel:${office.phone.replace(/\s+/g, '')}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>
                )}
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="text-center mt-16">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Connect?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you're looking for quality assurance services or want to join our global team, 
              we're here to help you succeed.
            </p>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-xl group-hover:blur-2xl transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalOffices; 