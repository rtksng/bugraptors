import React, { useState } from 'react';
import NavigationBar from '../components/ui/common/NavigationBar';
import Footer from '../components/ui/common/Footer';
import ContactUs from '../components/ui/common/ContactUs';
import DynamicNewsHero from '../components/ui/corporateNews/DynamicNewsHero';
import NewsTabs from '../components/ui/corporateNews/NewsTabs';

type TabType = 'news' | 'caseStudy' | 'eBooks';

const CorporateNewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('news');

  return (
    <div className="dark bg-[#020317] min-h-screen overflow-x-hidden">
      <NavigationBar />
      <main className="pt-16 sm:pt-20">
        <DynamicNewsHero activeTab={activeTab} />
        <NewsTabs onTabChange={setActiveTab} />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default CorporateNewsPage; 