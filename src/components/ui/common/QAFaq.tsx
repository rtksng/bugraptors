import React, { useState } from 'react';
import SectionTitle from './SectionTittle';

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
  // Let's use a very dark, uniform background for maximum contrast
  baseBgColor?: 'deep-void';
  // Accent for subtle lines and states
  accentShade?: 'light-silver';
  defaultOpenItems?: string[];
  allowMultipleOpen?: boolean;
}

const QAFaq: React.FC<QAFaqProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Explore common inquiries to quickly find the information you need.",
  faqs,
  className = '',
  baseBgColor = 'deep-void',
  accentShade = 'light-silver',
  defaultOpenItems = [],
  allowMultipleOpen = true
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpenItems));

  const baseBgClasses = {
    'deep-void': 'bg-gray-950', // The darkest possible gray, almost black
  };

  const accentClasses = {
    'light-silver': { // Fine-tuned grayscale accents
      mainText: 'text-white', // Pure white for headings and main text
      subText: 'text-gray-400', // Subtler gray for body text
      itemBg: 'bg-gray-900', // Darker gray for item background
      itemBorder: 'border-gray-800', // Subtle border
      itemHoverBg: 'hover:bg-gray-800', // Lighter hover background
      activeStateLine: 'bg-gray-600', // Clearer line for active state
      iconColor: 'text-gray-500', // Muted icon
      buttonBg: 'bg-gray-700', // Button background
      buttonHoverBg: 'hover:bg-gray-600', // Button hover
      focusRing: 'focus:ring-gray-500', // Focus ring
    }
  };

  const selectedAccent = accentClasses[accentShade];

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      if (newOpenItems.has(itemId)) {
        newOpenItems.delete(itemId);
      } else {
        if (!allowMultipleOpen) {
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }
      return newOpenItems;
    });
  };

  const isItemOpen = (itemId: string) => openItems.has(itemId);

  return (
    <section className={`py-16 px-4 ${baseBgClasses[baseBgColor]} ${className}`}>
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header Section */}
        <div className="text-center ">
          
          <SectionTitle
            title={title}
            align="center"
          />
        </div>

        {/* FAQ Items - "Crisp Edge" Style */}
        <div className="space-y-4"> {/* Tighter spacing for a more compact, modern feel */}
          {faqs.map((faq) => {
            const isOpen = isItemOpen(faq.id);

            return (
              <div
                key={faq.id}
                className={`
                  relative ${selectedAccent.itemBg} rounded-md border ${selectedAccent.itemBorder}
                  shadow-xl transition-all duration-300 ease-in-out
                  ${selectedAccent.itemHoverBg}
                `}
              >
                {/* Active State Indicator - Top line */}
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-md transition-all duration-300 ${isOpen ? selectedAccent.activeStateLine : 'bg-transparent'}`}></div>

                {/* Question Header */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between
                             ${selectedAccent.mainText} text-lg font-semibold
                             transition-colors duration-200
                             ${selectedAccent.focusRing} focus:ring-inset rounded-md`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-xl leading-tight font-medium text-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 pb-1 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                    {faq.question}
                  </span>

                  {/* Toggle Icon */}
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}>
                      <svg
                        className={`w-5 h-5 ${selectedAccent.iconColor}`}
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
                      ? 'max-h-screen opacity-100 pb-6 px-6' // Padding for content
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className={`${selectedAccent.subText} leading-relaxed text-base`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional CTA Section */}
        {/* <div className="text-center mt-24">
          <p className={`${selectedAccent.subText} text-lg mb-6`}>
            Still can't find what you need?
          </p>
          <button className={`inline-flex items-center px-8 py-3 ${selectedAccent.buttonBg} ${selectedAccent.mainText} font-semibold rounded-lg shadow-md
                             ${selectedAccent.buttonHoverBg} transition-colors duration-300 ${selectedAccent.focusRing} focus:ring-offset-2 focus:ring-offset-gray-900`}>
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default QAFaq;