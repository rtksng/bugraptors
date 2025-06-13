import React, { useState } from 'react';
import NewsGrid from './NewsGrid';
import CaseStudyGrid from './CaseStudyGrid';
import EBooksGrid from './EBooksGrid';

type TabType = 'news' | 'caseStudy' | 'eBooks';

interface NewsTabsProps {
  onTabChange?: (tab: TabType) => void;
}

const NewsTabs: React.FC<NewsTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<TabType>('news');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  const tabs = [
    { id: 'news' as TabType, label: 'News', count: 8 },
    { id: 'caseStudy' as TabType, label: 'Case Study', count: 5 },
    { id: 'eBooks' as TabType, label: 'E-Books', count: 3 }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'news':
        return <NewsGrid />;
      case 'caseStudy':
        return <CaseStudyGrid />;
      case 'eBooks':
        return <EBooksGrid />;
      default:
        return <NewsGrid />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16  overflow-hidden">
      {/* Background Elements - Following LandingPage pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className=""></div>
        <div className=""></div>

        {/* Subtle decorative elements */}
        {[...Array(4)].map((_, i) => (
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
        {/* Tab Navigation */}
        <div className="border-b border-purple-500/20 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm sm:text-base transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-purple-500/30'
                }`}
              >
                {tab.label}
                <span className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  activeTab === tab.id 
                    ? 'bg-purple-600/20 text-purple-300' 
                    : 'bg-gray-800/50 text-gray-500'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default NewsTabs; 