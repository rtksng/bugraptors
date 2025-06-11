import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceItem {
  name: string;
  path: string;
  hasSubmenu?: boolean;
  submenu?: { name: string; path: string; }[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuData: Record<string, ServiceItem[]> = {
    "Core QA Services": [
      { name: "Manual Testing Services", path: "/qa-offerings/core/manual-testing" },
      { name: "Compatibility Testing Services", path: "/qa-offerings/core/compatibility-testing" },
      { name: "Functional Testing Services", path: "/qa-offerings/core/functional-testing" },
      { name: "UAT Services", path: "/qa-offerings/core/uat-services" },
      { name: "Mobile App Testing Services", path: "/qa-offerings/core/mobile-app-testing" },
      { name: "Web Testing Services", path: "/qa-offerings/core/web-testing" },
      { name: "Regression Testing Services", path: "/qa-offerings/core/regression-testing" },
      { name: "Usability Testing Services", path: "/qa-offerings/core/usability-testing" },
      { name: "API Testing Services", path: "/qa-offerings/core/api-testing" }
    ],
    "Quality Engineering Services": [
      { 
        name: "Automation Testing Services", 
        path: "/qa-offerings/quality-engineering/automation-testing",
        hasSubmenu: true,
        submenu: [
          { name: "Test Automation Strategy", path: "/qa-offerings/quality-engineering/automation-testing/strategy" },
          { name: "Framework Development", path: "/qa-offerings/quality-engineering/automation-testing/framework" },
          { name: "CI/CD Integration", path: "/qa-offerings/quality-engineering/automation-testing/cicd" }
        ]
      },
      { name: "Mobile Test Automation Services", path: "/qa-offerings/quality-engineering/mobile-automation" },
      { name: "Web Test Automation Services", path: "/qa-offerings/quality-engineering/web-automation" },
      { name: "API Test Automation Services", path: "/qa-offerings/quality-engineering/api-automation" },
      { name: "Performance Testing Services", path: "/qa-offerings/quality-engineering/performance-testing" },
      { 
        name: "ERP Testing Services", 
        path: "/qa-offerings/quality-engineering/erp-testing",
        hasSubmenu: true,
        submenu: [
          { name: "SAP Testing", path: "/qa-offerings/quality-engineering/erp-testing/sap" },
          { name: "Oracle Testing", path: "/qa-offerings/quality-engineering/erp-testing/oracle" },
          { name: "Microsoft Dynamics", path: "/qa-offerings/quality-engineering/erp-testing/dynamics" }
        ]
      },
      { name: "CRM Testing Services", path: "/qa-offerings/quality-engineering/crm-testing" },
      { name: "SAP Testing Services", path: "/qa-offerings/quality-engineering/sap-testing" },
      { name: "Security Testing Services", path: "/qa-offerings/quality-engineering/security-testing" },
      { name: "Agile DevOps Testing Services", path: "/qa-offerings/quality-engineering/agile-devops" }
    ],
    "Bespoke Testing Services": [
      { name: "Crowd Source Testing Services", path: "/qa-offerings/bespoke/crowd-source" },
      { name: "Accessibility Testing Services", path: "/qa-offerings/bespoke/accessibility" },
      { name: "RPA Testing Services", path: "/qa-offerings/bespoke/rpa-testing" },
      { name: "Compliance with GDPR", path: "/qa-offerings/bespoke/gdpr-compliance" },
      { name: "Game testing services", path: "/qa-offerings/bespoke/game-testing" }
    ],
    "Future-Ready Testing Services": [
      { name: "AI & ML Testing Services", path: "/qa-offerings/future-ready/ai-ml-testing" },
      { name: "Blockchain Testing Services", path: "/qa-offerings/future-ready/blockchain-testing" },
      { name: "IoT Testing Services", path: "/qa-offerings/future-ready/iot-testing" },
      { name: "Big Data Testing Services", path: "/qa-offerings/future-ready/big-data-testing" },
      { name: "Cloud Testing Services", path: "/qa-offerings/future-ready/cloud-testing" }
    ],
    "Test Consultation Services": [
      { name: "TCOE - Test Center of Excellence", path: "/qa-offerings/consultation/tcoe" },
      { name: "QA Consulting", path: "/qa-offerings/consultation/qa-consulting" },
      { name: "Test Advisory Services", path: "/qa-offerings/consultation/test-advisory" },
      { name: "Tool Feasibility Services", path: "/qa-offerings/consultation/tool-feasibility" }
    ]
  };

  const handleSubmenuToggle = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  const handleNavigation = (path: string) => {
    // Navigate to the path
    window.location.href = path;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Mega Menu */}
      <div className="absolute top-full left-0 w-full bg-[#020317] border-t border-purple-500/20 shadow-2xl z-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {Object.entries(menuData).map(([category, services]) => (
              <div key={category} className="space-y-4">
                {/* Category Header */}
                <h3 className="text-lg font-semibold text-white border-b border-purple-500/30 pb-2">
                  {category}
                </h3>
                
                {/* Services List */}
                <ul className="space-y-2">
                  {services.map((service: ServiceItem, index: number) => (
                    <li key={index}>
                      {service.hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => handleSubmenuToggle(service.name)}
                            className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg px-3 py-2 transition-all duration-200 text-left"
                          >
                            <span className="text-sm">{service.name}</span>
                            <FaChevronRight 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeSubmenu === service.name ? 'rotate-90' : ''
                              }`}
                            />
                          </button>
                          
                          {/* Submenu */}
                          {activeSubmenu === service.name && service.submenu && (
                            <ul className="ml-4 mt-2 space-y-1 border-l border-purple-500/20 pl-3">
                              {service.submenu.map((subItem: { name: string; path: string; }, subIndex: number) => (
                                <li key={subIndex}>
                                  <button
                                    onClick={() => handleNavigation(subItem.path)}
                                    className="w-full text-left text-sm text-gray-400 hover:text-purple-300 hover:bg-purple-500/5 rounded px-2 py-1 transition-all duration-200"
                                  >
                                    {subItem.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNavigation(service.path)}
                          className="w-full text-left text-sm text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg px-3 py-2 transition-all duration-200"
                        >
                          {service.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Call to Action Section */}
          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-3">
                Ready to Transform Your Testing Strategy?
              </h4>
              <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
                Partner with our QA experts to build robust, scalable testing solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="px-6 py-3 custom-bg-color text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </button>
                <button
                  onClick={() => handleNavigation('/services')}
                  className="px-6 py-3 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Explore All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu; 