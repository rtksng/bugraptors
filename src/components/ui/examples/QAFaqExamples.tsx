import React from 'react';
import QAFaq from '../common/QAFaq';

const QAFaqExamples: React.FC = () => {
  // Functional Testing FAQ Data (matches the image)
  const functionalTestingFaqs = [
    {
      id: 'functional-vs-other',
      question: 'What distinguishes functional testing from other testing types?',
      answer: 'Functional testing service validates that your program meets its requirements, guaranteeing user satisfaction. It is distinct from non-functional testing (which focuses on performance, security, etc.) and unit testing (which focuses on individual code components).'
    },
    {
      id: 'test-coverage',
      question: 'How do you ensure test coverage in functional testing?',
      answer: 'We ensure comprehensive test coverage through systematic test case design using techniques like equivalence partitioning, boundary value analysis, and decision table testing. Our team creates detailed test matrices that map requirements to test cases, ensuring every functional requirement is thoroughly validated across different scenarios and user workflows.'
    },
    {
      id: 'getting-started',
      question: 'How do I get started with your functional testing services?',
      answer: 'Getting started is simple! First, we conduct a free consultation to understand your application and testing needs. Then, our experts analyze your requirements and create a customized testing strategy. We provide detailed project timelines, resource allocation, and transparent pricing. You can begin with a pilot project or comprehensive testing engagement based on your preferences.'
    },
    {
      id: 'industry-specific',
      question: 'Can you help with functional testing for my specific industry or domain?',
      answer: 'Absolutely! Our team has extensive experience across various industries including healthcare, finance, e-commerce, education, and manufacturing. We understand industry-specific compliance requirements, regulatory standards, and domain-specific functionality. Our experts tailor testing approaches to meet your industry\'s unique challenges and requirements.'
    },
    {
      id: 'automation-capabilities',
      question: 'Can functional testing be automated?',
      answer: 'Yes, many aspects of functional testing can be automated to improve efficiency and accuracy. We use industry-leading tools like Selenium, Cypress, and Playwright for web applications, and specialized frameworks for mobile and desktop applications. However, we maintain a balanced approach, combining automated testing for repetitive scenarios with manual testing for complex user experiences and exploratory testing.'
    }
  ];

  // Performance Testing FAQ Data
  const performanceTestingFaqs = [
    {
      id: 'load-vs-stress',
      question: 'What is the difference between load testing and stress testing?',
      answer: 'Load testing evaluates system performance under expected normal conditions, while stress testing pushes the system beyond its limits to identify breaking points. Load testing ensures your application can handle typical user loads, whereas stress testing reveals how the system behaves under extreme conditions and how it recovers from failures.'
    },
    {
      id: 'performance-metrics',
      question: 'What performance metrics do you measure during testing?',
      answer: 'We measure comprehensive performance metrics including response time, throughput, concurrent users, CPU and memory utilization, database performance, network latency, error rates, and system stability. Our detailed reports provide actionable insights with recommendations for optimization.'
    },
    {
      id: 'testing-frequency',
      question: 'How often should performance testing be conducted?',
      answer: 'Performance testing should be integrated into your development lifecycle. We recommend baseline testing for new applications, regression testing after major updates, and periodic testing before peak business periods. Continuous performance monitoring ensures optimal user experience across different load conditions.'
    },
    {
      id: 'testing-environments',
      question: 'Do you provide testing environments for performance testing?',
      answer: 'Yes, we can set up dedicated testing environments that mirror your production setup. We also offer cloud-based testing solutions for scalability and cost-effectiveness. Our team ensures testing environments accurately represent real-world conditions for reliable performance insights.'
    }
  ];

  // Security Testing FAQ Data
  const securityTestingFaqs = [
    {
      id: 'security-scope',
      question: 'What types of security vulnerabilities do you test for?',
      answer: 'Our comprehensive security testing covers OWASP Top 10 vulnerabilities, including SQL injection, cross-site scripting (XSS), authentication bypass, data exposure, and more. We also test for business logic flaws, API security, mobile app security, and compliance with security standards like PCI DSS, HIPAA, and GDPR.'
    },
    {
      id: 'penetration-vs-vulnerability',
      question: 'What\'s the difference between penetration testing and vulnerability assessment?',
      answer: 'Vulnerability assessment identifies and catalogues potential security weaknesses in your system, while penetration testing actively exploits these vulnerabilities to demonstrate real-world attack scenarios. Vulnerability assessment is broader and systematic, while penetration testing is deeper and more targeted, simulating actual attacker behavior.'
    },
    {
      id: 'security-compliance',
      question: 'Can you help with security compliance requirements?',
      answer: 'Absolutely! We assist with various compliance frameworks including PCI DSS for payment processing, HIPAA for healthcare, SOX for financial reporting, and GDPR for data protection. Our security experts ensure your applications meet industry-specific regulatory requirements and provide detailed compliance reports.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Functional Testing FAQ - Matches the image */}
      <QAFaq
        title="Frequently Asked Questions (FAQs)"
        faqs={functionalTestingFaqs}
        backgroundColor="white"
        titleColor="purple"
        defaultOpenItems={['functional-vs-other']} // First item open by default
        allowMultipleOpen={true}
      />

      {/* Performance Testing FAQ */}
      <QAFaq
        title="Performance Testing FAQs"
        subtitle="Common questions about our performance testing services and methodologies."
        faqs={performanceTestingFaqs}
        backgroundColor="gray"
        titleColor="blue"
        allowMultipleOpen={false} // Only one item open at a time
      />

      {/* Security Testing FAQ */}
      <QAFaq
        title="Security Testing Questions"
        subtitle="Everything you need to know about our comprehensive security testing approach."
        faqs={securityTestingFaqs}
        backgroundColor="light-purple"
        titleColor="dark"
        defaultOpenItems={['security-scope', 'penetration-vs-vulnerability']} // Multiple items open
        allowMultipleOpen={true}
      />

      {/* Compact FAQ Example */}
      <QAFaq
        title="Quick QA Facts"
        faqs={[
          {
            id: 'qa-benefits',
            question: 'Why is QA testing important for my business?',
            answer: 'QA testing ensures software quality, reduces post-release defects, improves user satisfaction, and protects your brand reputation while saving costs in the long run.'
          },
          {
            id: 'testing-timeline',
            question: 'How long does the testing process typically take?',
            answer: 'Testing timelines vary based on project complexity, scope, and requirements. Simple applications may take 2-4 weeks, while complex enterprise systems can require 8-12 weeks or more.'
          },
          {
            id: 'testing-cost',
            question: 'How do you determine testing costs?',
            answer: 'Testing costs depend on project scope, complexity, testing types required, timeline, and resource allocation. We provide transparent, detailed quotes after analyzing your specific requirements.'
          }
        ]}
        backgroundColor="cream"
        titleColor="purple"
        className="max-w-3xl mx-auto"
      />
    </div>
  );
};

export default QAFaqExamples; 