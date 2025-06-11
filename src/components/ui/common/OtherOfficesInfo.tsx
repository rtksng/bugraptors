import React from 'react';

const OtherOfficesInfo: React.FC = () => {
  const offices = [
    {
      flag: '🇺🇸',
      title: 'Corporate Office - USA',
      address: '5858 Horton Street, Suite 101,',
      address2: 'Emeryville, CA 94608, United States',
      phone: '+1 (510) 371 - 9164',
      bgGradient: 'from-blue-900/20 to-red-900/20'
    },
    {
      flag: '🇮🇳',
      title: 'Test Labs - India',
      address: '2nd Floor, C-136, Industrial Area,',
      address2: 'Phase - 8, Mohali-160071, Punjab, India',
      phone: '+91 77173 - 00289',
      bgGradient: 'from-orange-900/20 to-green-900/20'
    },
    {
      flag: '🇮🇳',
      title: 'Corporate Office - India',
      address: '52, First Floor, Sec-71, Mohali, PB',
      address2: '160071 India',
      phone: null,
      bgGradient: 'from-orange-900/20 to-blue-900/20'
    },
    {
      flag: '🇬🇧',
      title: 'United Kingdom',
      address: '97 Hackney Rd London E2 8ET',
      address2: null,
      phone: null,
      bgGradient: 'from-blue-900/20 to-red-900/20'
    },
    {
      flag: '🇦🇺',
      title: 'Australia',
      address: 'Suite 4004, 11 Hassal St Parramatta NSW',
      address2: '2150',
      phone: null,
      bgGradient: 'from-blue-900/20 to-yellow-900/20'
    },
    {
      flag: '🇦🇪',
      title: 'UAE',
      address: 'Meydan Grandstand, 6th floor, Meydan',
      address2: 'Road, Nad Al Sheba, Dubai, U.A.E',
      phone: null,
      bgGradient: 'from-red-900/20 to-green-900/20'
    }
  ];

  return (
    <section className="py-20 relative bg-[#020317]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl "></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl  delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl  delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Global <span className="text-purple-400">Presence</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              BugRaptors is one of the best software testing companies headquartered in India and the US, which is committed to catering to the diverse QA needs of any business. We are one of the fastest-growing QA companies, striving to deliver technology-oriented QA services, worldwide. BugRaptors is a team of 200+ ISTQB-certified testers, along with <span className="text-purple-400 font-semibold">ISO 9001:2018</span> and <span className="text-purple-400 font-semibold">ISO 27001</span> certifications.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${office.bgGradient} backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105`}
              >
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Flag and Title */}
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{office.flag}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {office.title}
                  </h3>
                </div>

                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-gray-300 leading-relaxed">
                      <p>{office.address}</p>
                      {office.address2 && <p>{office.address2}</p>}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                {office.phone && (
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a 
                      href={`tel:${office.phone.replace(/\s|-/g, '')}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                    >
                      {office.phone}
                    </a>
                  </div>
                )}

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Certifications Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-6 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white font-medium">ISO 9001:2018 Certified</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-white font-medium">ISO 27001 Certified</span>
              </div>
              <div className="w-px h-6 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <span className="text-white font-medium">200+ ISTQB Certified Testers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherOfficesInfo; 