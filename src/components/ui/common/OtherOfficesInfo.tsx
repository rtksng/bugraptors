// components/SleekGlobalPresence.jsx
import React, { useState } from 'react';

// Define valid color types
type OfficeColor = 'purple' | 'blue' | 'green' | 'pink';

interface Office {
  id: string;
  flag: string;
  title: string;
  fullTitle: string;
  address: string;
  cityStateZip: string;
  phone: string;
  mapLink: string;
  description: string;
  color: OfficeColor;
  gradientColor: string;
}

const offices: Office[] = [
  {
    id: 'ny',
    flag: "🇺🇸",
    title: "New York",
    fullTitle: "New York Headquarters",
    address: "123 Innovation Drive, Suite 400",
    cityStateZip: "New York, NY 10001",
    phone: "+1 212 555 0100",
    mapLink: "https://maps.app.goo.gl/YourActualNewYorkMapLink", // Use actual map links
    description: "Our primary hub for North American operations, driving innovation in finance and technology, at the heart of the global economy.",
    color: "purple", // Used for subtle styling
    gradientColor: "rgba(168,85,247,0.15)", // Specific color for radial gradient
  },
  {
    id: 'ldn',
    flag: "🇬🇧",
    title: "London",
    fullTitle: "London EMEA Hub",
    address: "789 Tech Lane, Borough",
    cityStateZip: "London, SW1A 0AA",
    phone: "+44 20 7946 0123",
    mapLink: "https://maps.app.goo.gl/YourActualLondonMapLink",
    description: "Strategic center for Europe, Middle East, and Africa, fostering international partnerships and groundbreaking solutions.",
    color: "blue",
    gradientColor: "rgba(59,130,246,0.15)",
  },
  {
    id: 'beng',
    flag: "🇮🇳",
    title: "Bengaluru",
    fullTitle: "Bengaluru Innovation Campus",
    address: "456 Digital Avenue",
    cityStateZip: "Electronics City, Bengaluru, 560100",
    phone: "+91 80 2345 6789",
    mapLink: "https://maps.app.goo.gl/YourActualBengaluruMapLink",
    description: "A dynamic hub for engineering excellence and product development in the APAC region, driving future technologies.",
    color: "green",
    gradientColor: "rgba(34,197,94,0.15)",
  },
  {
    id: 'syd',
    flag: "🇦🇺",
    title: "Sydney",
    fullTitle: "Sydney Oceanic Center",
    address: "10 Innovation Hub",
    cityStateZip: "Pyrmont, NSW 2009",
    phone: "+61 2 9876 5432",
    mapLink: "https://maps.app.goo.gl/YourActualSydneyMapLink",
    description: "Our Australasian operations, focusing on emerging markets and digital transformation across the Pacific.",
    color: "pink",
    gradientColor: "rgba(236,72,153,0.15)",
  },
];

const SleekGlobalPresence = () => {
  const [activeOfficeId, setActiveOfficeId] = useState(offices[0].id);
  const activeOffice = offices.find(office => office.id === activeOfficeId) || offices[0];

  // Define color classes for dynamic styling
  const colorClasses: Record<OfficeColor, {
    text: string;
    border: string;
    shadow: string;
    hoverText: string;
    accentBg: string;
  }> = {
    purple: {
      text: 'text-purple-400',
      border: 'border-purple-600/50',
      shadow: 'shadow-purple-500/20',
      hoverText: 'hover:text-purple-300',
      accentBg: 'bg-purple-600',
    },
    blue: {
      text: 'text-blue-400',
      border: 'border-blue-600/50',
      shadow: 'shadow-blue-500/20',
      hoverText: 'hover:text-blue-300',
      accentBg: 'bg-blue-600',
    },
    green: {
      text: 'text-green-400',
      border: 'border-green-600/50',
      shadow: 'shadow-green-500/20',
      hoverText: 'hover:text-green-300',
      accentBg: 'bg-green-600',
    },
    pink: {
      text: 'text-pink-400',
      border: 'border-pink-600/50',
      shadow: 'shadow-pink-500/20',
      hoverText: 'hover:text-pink-300',
      accentBg: 'bg-pink-600',
    },
  };

  const currentColors = colorClasses[activeOffice.color];

  // return (
  //   <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-950 to-black text-white relative overflow-hidden">
  //     {/* Background radial gradient spotlight */}
  //     {/* Changed to inline style for dynamic radial gradient as Tailwind JIT struggles with fully dynamic class names here */}
  //     <div
  //       className="absolute inset-0 z-0 transition-opacity duration-1000"
  //       style={{
  //         background: `radial-gradient(circle at center, ${activeOffice.gradientColor} 0%, transparent 70%)`,
  //       }}
  //     ></div>
      
  //     <div className="relative z-10 max-w-7xl mx-auto px-8 w-full"> {/* Increased max-w and horizontal padding */}
  //       <div className="text-center mb-20"> {/* Increased bottom margin */}
  //         <h2 className="text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-6 drop-shadow-xl leading-tight"> {/* Larger, tighter tracking, brighter gradient, heavier shadow, tighter leading */}
  //           Our Global Nexus
  //         </h2>
  //         <p className="mt-4 text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
  //           Connecting **expertise**, **innovation**, and **partnership** across the globe to redefine boundaries.
  //         </p>
  //       </div>

  //       <div className="flex flex-col lg:flex-row justify-center items-center gap-12"> {/* Increased gap */}
  //         {/* Office Selectors (Flags) */}
  //         <div className="flex lg:flex-col gap-6 p-6 lg:p-0 rounded-full lg:rounded-none bg-gray-800/30 backdrop-blur-md border border-white/5 shadow-inner"> {/* Larger padding, more blur */}
  //           {offices.map((office) => (
  //             <button
  //               key={office.id}
  //               onClick={() => setActiveOfficeId(office.id)}
  //               className={`relative w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-full
  //                           border-2 transition-all duration-300 ease-out group
  //                           ${activeOfficeId === office.id ? `${colorClasses[office.color].border} ${colorClasses[office.color].accentBg} scale-110 shadow-lg` : 'border-transparent hover:border-white/10'} 
  //                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 ${colorClasses[office.color].text}`} 
  //               title={office.fullTitle}
  //             >
  //               <span className="text-4xl lg:text-5xl transition-transform duration-300 group-hover:scale-110"> 
  //                 {office.flag}
  //               </span>
  //               {activeOfficeId === office.id && (
  //                 <div className={`absolute -bottom-3 lg:-right-3 lg:top-1/2 lg:-translate-y-1/2
  //                                 w-4 h-4 lg:w-5 lg:h-5 rounded-full ${colorClasses[office.color].accentBg} shadow-md
  //                                 animate-pulse-slow`}></div> 
  //               )}
  //             </button>
  //           ))}
  //         </div>

  //         {/* Main Display Card */}
  //         <div
  //           className={`relative w-full max-w-3xl bg-gray-800/50 backdrop-blur-3xl p-12 rounded-4xl
  //                      border ${currentColors.border} shadow-3xl ${currentColors.shadow}
  //                      transition-all duration-700 ease-in-out transform hover:scale-[1.005]`} 
  //           style={{ minHeight: '480px' }} 
  //         >
  //           {/* Animated Glow on Card Border */}
  //           <div className={`absolute inset-0 rounded-4xl pointer-events-none
  //                          border-2 ${currentColors.border} opacity-50 blur-xl
  //                          animate-card-glow`}></div> 

  //           <div className="relative z-10 flex flex-col justify-between h-full">
  //             <div>
  //               <div className="flex items-center mb-8"> 
  //                 <span className="text-7xl mr-8">{activeOffice.flag}</span> 
  //                 <h3 className="text-5xl font-bold text-white leading-tight"> 
  //                   {activeOffice.fullTitle}
  //                 </h3>
  //               </div>

  //               <p className="text-gray-300 text-xl mb-10 leading-relaxed opacity-90"> 
  //                 {activeOffice.description}
  //               </p>

  //               <div className="space-y-6"> 
  //                 {/* Address */}
  //                 <div className="flex items-start">
  //                   <svg className={`w-8 h-8 ${currentColors.text} mr-6 mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  //                   </svg>
  //                   <div className="text-gray-400 text-xl"> 
  //                     <p className="font-semibold">{activeOffice.address}</p>
  //                     <p>{activeOffice.cityStateZip}</p>
  //                   </div>
  //                 </div>

  //                 {/* Phone */}
  //                 {activeOffice.phone && (
  //                   <div className="flex items-center">
  //                     <svg className={`w-8 h-8 ${currentColors.text} mr-6 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
  //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  //                     </svg>
  //                     <a
  //                       href={`tel:${activeOffice.phone.replace(/\s|-/g, '')}`}
  //                       className={`${currentColors.text} ${currentColors.hoverText} transition-colors duration-300 font-semibold text-xl`} 
  //                     >
  //                       {activeOffice.phone}
  //                     </a>
  //                   </div>
  //                 )}
  //               </div>
  //             </div>

  //             {/* Action Button */}
  //             {activeOffice.mapLink && (
  //               <div className="mt-12"> 
  //                 <a
  //                   href={activeOffice.mapLink}
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                   className={`inline-flex items-center px-10 py-4 rounded-full text-xl font-medium
  //                              bg-gray-700/50 border border-white/20 backdrop-blur-md
  //                              hover:bg-gray-600/70 ${currentColors.text} hover:text-white
  //                              transition-all duration-300 ease-in-out group`} 
  //                 >
  //                   View on Map
  //                   <svg className="w-6 h-6 ml-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  //                   </svg>
  //                 </a>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default SleekGlobalPresence;