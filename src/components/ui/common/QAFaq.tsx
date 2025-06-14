import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface QAFaqProps {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  className?: string;
  backgroundColor?: 'white' | 'gray' | 'cream' | 'light-purple';
  titleColor?: 'purple' | 'blue' | 'dark' | 'primary';
  defaultOpenItems?: string[]; // Array of FAQ IDs that should be open by default
  allowMultipleOpen?: boolean; // Whether multiple items can be open at once
}

const QAFaq: React.FC<QAFaqProps> = ({
  title = "Frequently Asked Questions (FAQs)",
  subtitle,
  faqs,
  className = '',
  backgroundColor = 'white',
  titleColor = 'purple',
  defaultOpenItems = [],
  allowMultipleOpen = true
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpenItems));

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    cream: 'bg-orange-50/30',
    'light-purple': 'bg-purple-50/40'
  };

  const titleClasses = {
    purple: 'text-purple-700',
    blue: 'text-blue-700',
    dark: 'text-gray-800',
    primary: 'text-gray-900'
  };

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      
      if (newOpenItems.has(itemId)) {
        // Close the item
        newOpenItems.delete(itemId);
      } else {
        // Open the item
        if (!allowMultipleOpen) {
          // If only one item can be open at a time, close all others
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }
      
      return newOpenItems;
    });
  };

  const isItemOpen = (itemId: string) => openItems.has(itemId);

  return (
    <section className={`py-16 px-4 ${backgroundClasses[backgroundColor]} ${className}`}>
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClasses[titleColor]}`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = isItemOpen(faq.id);
            const isFirstItem = index === 0;
            
            return (
              <div
                key={faq.id}
                className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${
                  isFirstItem && isOpen ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg font-medium text-gray-800 pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  
                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}>
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 pb-4 pt-0">
                    <div className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300">
            Contact Our Team
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QAFaq; 