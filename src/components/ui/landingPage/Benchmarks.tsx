import React, { useState } from 'react';


import { 
  FaAward, 
  FaUsers, 
  FaCertificate, 
  FaCheckCircle
} from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';


const clients = [
  {
    name: 'Assurant',
    logo: '/src/assets/assurant.png',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Corel',
    logo: '/src/assets/corel.png',
    color: 'from-red-600 to-orange-600'
  },
  {
    name: 'Winzo',
    logo: '/src/assets/winzo.png',
    color: 'from-green-600 to-emerald-600'
  },
  {
    name: 'Subaru',
    logo: '/src/assets/swaraj.png',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Mitsubishi',
    logo: '/src/assets/mahindra.png',
    color: 'from-red-600 to-pink-600'
  }
];

const tabs = [
  {
    id: 'clients',
    label: 'Clients',
    icon: <FaUsers className="w-4 h-4" />,
    gradient: 'from-purple-600 to-blue-600'
  },
  {
    id: 'pugmarks',
    label: 'Pugmarks',
    icon: <FaAward className="w-4 h-4" />,
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'certifications',
    label: 'Certifications',
    icon: <FaCertificate className="w-4 h-4" />,
    gradient: 'from-cyan-600 to-teal-600'
  }
];

interface BenchmarksProps {}

const Benchmarks: React.FC<BenchmarksProps> = () => {
  const [activeTab, setActiveTab] = useState('clients');

  return (
    <section className="relative py-20 overflow-hidden benchmarks-radial-bg">

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 "></div>
       
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-900/5 to-transparent rounded-full"></div>
      </div>

     

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionTitle   title={'BenchmAarks '} />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full backdrop-blur-sm bg-white/5 p-2 border border-purple-500/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-white bg-gradient-to-r shadow-lg'
                    : 'text-gray-400 hover:text-gray-300'
                } ${activeTab === tab.id ? tab.gradient : ''}`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20 rounded-xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {/* Clients Tab */}
          {activeTab === 'clients' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {clients.map((client, index) => (
                <div 
                  key={client.name}
                  className="group relative bg-gradient-to-br from-[#0a102a]/60 to-[#151b3d]/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Logo Container */}
                  <div className="relative aspect-[3/2] flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-[60px] object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>

                  {/* Verification Badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaCheckCircle className="w-4 h-4 text-green-400" />
                  </div>

                  {/* Subtle Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${client.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                </div>
              ))}
            </div>
          )}

          {/* Pugmarks Tab */}
          {activeTab === 'pugmarks' && (
            <div className="text-center py-16">
              <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <FaAward className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Pugmarks Collection</h3>
                <p className="text-gray-400">Showcase of our achievements and recognitions coming soon</p>
              </div>
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="text-center py-16">
              <div className="inline-flex flex-col items-center p-8 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
                <FaCertificate className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Our Certifications</h3>
                <p className="text-gray-400">Professional certifications and industry standards coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Benchmarks; 