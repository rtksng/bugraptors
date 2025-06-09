import React from 'react';
import { 
  FaHospital, 
  FaShoppingCart, 
  FaUniversity, 
  FaBolt, 
  FaMobile, 
  FaVideo,
} from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';
import BankingFinance from "../../../assets/Banking&Finance.png"
import HealthCare from "../../../assets/HealthCare.png"
import RetailCommerce from "../../../assets/Retail&Commerce.png"
import EnergyUtilities from "../../../assets/Energy&Utilities.png"
import mediaentertainment from "../../../assets/Media&Entertainment.png"
const domains = [
  {
    name: 'Healthcare',
    description: 'Comprehensive testing for medical software and devices',
    icon: FaHospital,
    color: 'bg-purple-500',
    gradient: 'from-purple-500/20 to-purple-500/5',
    img:HealthCare,
  },
  {
    name: 'Retail & Commerce',
    description: 'End-to-end testing for seamless shopping experiences',
    icon: FaShoppingCart,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500/20 to-yellow-500/5',
    img:RetailCommerce,
  },
  {
    name: 'Banking & Finance',
    description: 'Secure and reliable financial software testing',
    icon: FaUniversity,
    color: 'bg-purple-500',
    gradient: 'from-purple-500/20 to-purple-500/5',
    img:BankingFinance,
  },
  {
    name: 'Energy & Utilities',
    description: 'Quality assurance for critical infrastructure systems',
    icon: FaBolt,
    color: 'bg-purple-500',
    gradient: 'from-purple-500/20 to-purple-500/5',
    img:EnergyUtilities,
  },
  {
    name: 'Telecommunication',
    description: 'Testing solutions for communication platforms',
    icon: FaMobile,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    name: 'Media & Entertainment',
    description: 'Quality testing for streaming and content platforms',
    icon: FaVideo,
    color: 'bg-purple-500',
    gradient: 'from-purple-500/20 to-purple-500/5',
    img:mediaentertainment,
  }
];

const DomainsWeServe: React.FC = () => {
  return (
    <section className="relative py-20   overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-900/5 to-transparent rounded-full"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
      

        <SectionTitle  tag='Industry Expertise' title={'Driving Quality Across Diverse Domains '} subtitle='  Delivering specialized testing solutions across diverse industries'/>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {domains.map((domain, index) => (
            <div
              key={domain.name}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient}`}></div>
              
              {/* Card Content */}
              <div className="relative h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0a102a]/80 to-[#151b3d]/80 backdrop-blur-sm">
                {/* Icon */}
                <img src={domain.img} alt="" className='mb-3 h-[187px] object-fill bg-[#7446d9] rounded-2xl' />
                
                {/* Text Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-200 transition-colors duration-300">
                    {domain.name}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {domain.description}
                  </p>
                </div>
              </div>

              {/* Subtle Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default DomainsWeServe; 