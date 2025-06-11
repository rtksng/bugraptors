import React, { useState } from 'react';
import { 
  FaChevronDown, 
  FaSearch, 
  FaRobot,
  FaBuilding,
  FaUsers,
  FaCog
} from 'react-icons/fa';
import SectionTitle from '../common/SectionTittle';

const faqs = [
  {
    id: 'q1',
    category: 'AI Testing',
    icon: <FaRobot className="w-5 h-5" />,
    question: 'What specific metrics does BugRaptors utilize to evaluate the performance of AI inference engines?',
    answer: 'We utilize comprehensive metrics including latency, throughput, accuracy, and resource utilization to evaluate AI inference engines. Our evaluation process also considers model optimization, hardware compatibility, and scalability factors.'
  },
  {
    id: 'q2',
    category: 'Enterprise',
    icon: <FaBuilding className="w-5 h-5" />,
    question: 'What experience does BugRaptors have in testing enterprise-level applications?',
    answer: 'BugRaptors has extensive experience testing enterprise applications across various industries. We\'ve successfully handled complex testing projects for Fortune 500 companies, ensuring scalability, security, and performance optimization.'
  },
  {
    id: 'q3',
    category: 'TCOE',
    icon: <FaCog className="w-5 h-5" />,
    question: 'What is BugRaptors\' Test Center of Excellence (TCOE)?',
    answer: 'Our Test Center of Excellence (TCOE) is a centralized hub that drives testing best practices, innovation, and quality standards across all projects. It combines expert knowledge, cutting-edge tools, and proven methodologies.'
  },
  {
    id: 'q4',
    category: 'AI Tools',
    icon: <FaRobot className="w-5 h-5" />,
    question: 'What makes BugRaptors\' AI-powered testing toolkit, BugBot, stand out?',
    answer: 'BugBot stands out through its advanced AI capabilities, automated test generation, intelligent test maintenance, and predictive analytics. It significantly reduces testing time while improving coverage and accuracy.'
  },
  {
    id: 'q5',
    category: 'Services',
    icon: <FaUsers className="w-5 h-5" />,
    question: 'How does BugRaptors ensure quality in automated testing processes?',
    answer: 'We follow industry best practices, implement comprehensive test strategies, use advanced automation frameworks, and maintain continuous monitoring throughout the testing lifecycle to ensure the highest quality standards.'
  },
  {
    id: 'q6',
    category: 'Enterprise',
    icon: <FaBuilding className="w-5 h-5" />,
    question: 'What industries does BugRaptors specialize in for software testing?',
    answer: 'We specialize in healthcare, fintech, e-commerce, automotive, aerospace, telecommunications, and enterprise software across various industry verticals with deep domain expertise.'
  }
];

const FAQs: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-24  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/8 to-blue-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/8 to-purple-600/8 rounded-full blur-3xl"></div>
        
        {/* Subtle particles */}
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
        {/* Enhanced Header section */}

        <SectionTitle
          tag="FAQ Section"
          title="Frequently Asked Questions"
        />

        {/* Enhanced FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={faq.id}
             
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                className="w-full text-left focus:outline-none cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {/* Category Icon */}
                    
                    
                    <div className="flex-1">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-xs font-medium text-purple-200 mb-3">
                        {faq.category}
                      </div>
                      
                      {/* Question */}
                      <h3 className="text-lg text-gray-200 font-medium leading-relaxed pr-4 group-hover:text-purple-200 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0 ml-4 mt-2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 flex items-center justify-center transition-all duration-300 ${openQuestion === faq.id ? 'rotate-180 bg-purple-500/20' : ''}`}>
                      <FaChevronDown className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Answer */}
                {openQuestion === faq.id && (
                  <div className="mt-6 ">
                    <div className="p-4 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl border border-purple-500/10">
                      <p className="text-gray-300 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Border */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-6"></div>
              </button>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-300 mb-2">No FAQs found</h3>
            <p className="text-gray-400">Try searching with different keywords</p>
          </div>
        )}

       
      </div>
    </section>
  );
};

export default FAQs; 