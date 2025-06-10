import React from 'react';
import QAWhiteBird from '../common/QAWhiteBird';

const QAWhiteBirdExamples: React.FC = () => {
  // Mobile App Testing Benefits Data (matches the image)
  const mobileAppTestingBenefits = [
    {
      id: 'enhanced-ux',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H13V9H19V21Z" />
          <circle cx="9" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M7 15L9 13L11 15" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Enhanced User Experience',
      description: 'A thoroughly tested app delivers a smooth, intuitive experience, leading to increased user satisfaction and retention.'
    },
    {
      id: 'improved-performance',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="8" r="1" fill="currentColor"/>
          <circle cx="16" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Improved App Performance',
      description: 'Testing identifies and rectifies performance bottlenecks, ensuring your app runs optimally even under heavy loads.'
    },
    {
      id: 'device-compatibility',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="2" width="18" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="9" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="2"/>
          <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2"/>
          <line x1="9" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="18" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Device Compatibility',
      description: 'With a wide range of devices and OS versions in the market, testing ensures your app works seamlessly across all platforms.'
    },
    {
      id: 'bug-prevention',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Bug Prevention',
      description: 'Early detection and resolution of bugs saves time, money, and prevents negative user reviews.'
    },
    {
      id: 'market-success',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17V19H21V17H3Z" />
          <path d="M4 10V12H20V10H4Z" />
          <path d="M7 3V5H17V3H7Z" />
          <circle cx="12" cy="14" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14L10 16L14 12" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Market Success',
      description: 'A well-tested app is more likely to achieve high ratings, positive reviews, and increased downloads, leading to greater market success.'
    }
  ];

  // Web Application Testing Benefits
  const webAppTestingBenefits = [
    {
      id: 'cross-browser',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H22M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Cross-Browser Compatibility',
      description: 'Ensure your web application works flawlessly across all major browsers and versions.'
    },
    {
      id: 'responsive-design',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Responsive Design Testing',
      description: 'Verify optimal display and functionality across different screen sizes and devices.'
    },
    {
      id: 'security-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V11" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Security Validation',
      description: 'Comprehensive security testing to protect against vulnerabilities and data breaches.'
    },
    {
      id: 'performance-optimization',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Load testing and optimization to ensure fast response times and smooth user experience.'
    }
  ];

  // API Testing Benefits
  const apiTestingBenefits = [
    {
      id: 'data-integrity',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6L9 17L4 12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Data Integrity',
      description: 'Ensure accurate data transmission and validation across all API endpoints.'
    },
    {
      id: 'integration-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Seamless Integration',
      description: 'Verify smooth integration between different services and third-party systems.'
    },
    {
      id: 'error-handling',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Error Handling',
      description: 'Comprehensive testing of error scenarios and exception handling mechanisms.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Mobile App Testing Benefits - Matches the image */}
      <QAWhiteBird
        title="Mobile App Testing and Its Importance"
        description="In today's mobile-first world, where apps serve as digital gateways to businesses and services, the importance of rigorous mobile app testing services cannot be overstated. Mobile app testing is a comprehensive process that ensures your application functions flawlessly across various devices, operating systems, and network conditions. It involves both functional and non-functional testing to verify everything from basic features to performance under stress."
        benefits={mobileAppTestingBenefits}
        backgroundColor="white"
        titleColor="purple"
        iconColor="purple"
        gridColumns={5} // Special 2-3 layout for 5 items
        centerContent={false}
      />

      {/* Web Application Testing Benefits */}
      <QAWhiteBird
        title="Web Application Testing Excellence"
        description="Comprehensive web application testing ensures your digital platform delivers exceptional user experiences across all browsers, devices, and network conditions. Our systematic approach validates functionality, performance, security, and usability to guarantee your web application meets the highest quality standards."
        benefits={webAppTestingBenefits}
        backgroundColor="light-purple"
        titleColor="blue"
        iconColor="blue"
        gridColumns={4}
        centerContent={true}
      />

      {/* API Testing Benefits */}
      <QAWhiteBird
        title="API Testing & Integration Validation"
        description="Robust API testing ensures reliable data exchange, seamless integrations, and optimal system performance. Our comprehensive testing approach validates all endpoints, error scenarios, and integration points to guarantee your APIs function flawlessly."
        benefits={apiTestingBenefits}
        backgroundColor="light-blue"
        titleColor="green"
        iconColor="green"
        gridColumns={3}
        centerContent={true}
      />

      {/* Automation Testing Benefits - 2 Column */}
      <QAWhiteBird
        title="Test Automation Advantages"
        description="Accelerate your testing process with intelligent automation solutions that improve accuracy, reduce manual effort, and provide faster feedback cycles."
        benefits={[
          {
            id: 'faster-execution',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Faster Test Execution',
            description: 'Automated tests run significantly faster than manual testing, enabling rapid feedback and quicker release cycles.'
          },
          {
            id: 'improved-accuracy',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6L9 17L4 12" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Enhanced Accuracy',
            description: 'Eliminate human error and ensure consistent test execution with precise, repeatable automated test scenarios.'
          }
        ]}
        backgroundColor="cream"
        titleColor="dark"
        iconColor="orange"
        gridColumns={2}
        centerContent={true}
      />
    </div>
  );
};

export default QAWhiteBirdExamples; 