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
    answer: 'Our Test Center of Excellence (TCOE) is a centralized hub that drives testing best practices, innovation, and quality standards across all projects. It combines expert knowledge, cutting-cutting tools, and proven methodologies.'
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
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 border-1 border-gradient-effect overflow-hidden bg-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <div className=""></div>
        <div className=""></div>
        
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-fade-in-out"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">

        <div className='mb-4 md:mb-6 lg:mb-8'>
        <SectionTitle
          tag="FAQ Section"
          title="Frequently Asked Questions"
        />
        </div>

        <div className=" max-w-4xl mx-auto space-y-8">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={faq.id}
              className="group rounded-xl px-4 shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                className="w-full text-left focus:outline-none cursor-pointer overflow-hidden transition-all duration-400 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-1">
                      <h3 className="text-xl leading-tight font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 pb-1 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300 ease-in-out">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 ">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-r from-purple-500/15 to-blue-500/15 border border-purple-500/25 flex items-center justify-center transition-all duration-300 ease-in-out ${openQuestion === faq.id ? 'rotate-180 bg-purple-500/25' : ''}`}>
                      <FaChevronDown className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${openQuestion === faq.id ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`} 
                >
                  <div className="p-4 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl border border-purple-500/10">
                    <p className="text-[#EDEADE] font-light leading-[24px]">
                      {faq.answer}
                    </p>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-6"></div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-">
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