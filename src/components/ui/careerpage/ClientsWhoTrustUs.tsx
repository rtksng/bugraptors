import React from 'react';

const ClientsWhoTrustUs: React.FC = () => {
  const clients = [
    { name: '2toLEAD', logo: '2toLEAD' },
    { name: 'allego', logo: 'allego' },
    { name: 'BEDROCK', logo: 'BEDROCK' },
    { name: 'cogniter', logo: 'cogniter' },
    { name: 'DormPress', logo: 'DormPress' },
    { name: 'geotime', logo: 'geotime' },
    { name: 'GSC', logo: 'GSC' },
    { name: 'KEY', logo: 'KEY' },
    { name: 'Lyric Delivery', logo: 'Lyric Delivery' },
    { name: 'MERHEIN', logo: 'MERHEIN' },
    { name: 'Omultiplica', logo: 'Omultiplica' },
    { name: 'Xperience', logo: 'Xperience' },
    { name: 'Shabaky Store', logo: 'شبكتي ستور' },
    { name: 'Simtutor', logo: 'Simtutor' },
    { name: 'Impact Machine', logo: 'Impact Machine' }
  ];

  return (
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/6 to-blue-500/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/6 to-purple-500/6 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Clients Who Trust Us
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-16">
                {/* Logo Placeholder */}
                <div className="text-center">
                  {client.logo === '2toLEAD' && (
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-red-400 transform rotate-45"></div>
                      <span className="text-white font-bold text-lg">2toLEAD</span>
                    </div>
                  )}
                  {client.logo === 'allego' && (
                    <div className="text-red-400 font-bold text-xl">allego<span className="text-red-500">□</span></div>
                  )}
                  {client.logo === 'BEDROCK' && (
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-yellow-400"></div>
                      <span className="text-white font-bold">BEDROCK</span>
                    </div>
                  )}
                  {client.logo === 'cogniter' && (
                    <div className="text-orange-400 font-bold text-lg">cogniter</div>
                  )}
                  {client.logo === 'DormPress' && (
                    <div className="text-blue-400 font-bold text-lg">dp DormPress</div>
                  )}
                  {client.logo === 'geotime' && (
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-blue-400 rounded-full border-2 border-blue-300"></div>
                      <span className="text-gray-300 font-medium">geotime</span>
                    </div>
                  )}
                  {client.logo === 'GSC' && (
                    <div className="text-white font-bold text-2xl border-2 border-white px-3 py-1 rounded">GSC</div>
                  )}
                  {client.logo === 'KEY' && (
                    <div className="flex items-center space-x-1">
                      <span className="text-white font-bold">KEY</span>
                      <div className="text-xs text-gray-400">RIDER</div>
                    </div>
                  )}
                  {client.logo === 'Lyric Delivery' && (
                    <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold text-sm">Lyric Delivery</div>
                  )}
                  {client.logo === 'MERHEIN' && (
                    <div className="text-gray-300 font-bold text-lg">MERHEIN</div>
                  )}
                  {client.logo === 'Omultiplica' && (
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>
                      <span className="text-gray-300">multiplica</span>
                    </div>
                  )}
                  {client.logo === 'Xperience' && (
                    <div className="text-red-400 font-bold italic text-lg">Xperience</div>
                  )}
                  {client.logo === 'شبكتي ستور' && (
                    <div className="text-blue-400 font-bold">شبكتي ستور</div>
                  )}
                  {client.logo === 'Simtutor' && (
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Simtutor</span>
                    </div>
                  )}
                  {client.logo === 'Impact Machine' && (
                    <div className="text-red-500 font-bold text-center">
                      <div className="text-xs">INTERNET ARCHIVES</div>
                      <div className="text-lg">impactMachine</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsWhoTrustUs; 