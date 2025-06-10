import React from 'react';
import HeroQAoffering from '../../common/HeroQAoffering';
import QAWhiteBird from '../../common/QAWhiteBird';
import FaceBackGround from '../../common/FaceBackGround';
import QAFaq from '../../common/QAFaq';

const CrowdSourceTesting: React.FC = () => {
  // Crowd Source Testing Benefits
  const crowdTestingBenefits = [
    {
      id: 'global-coverage',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22C17.52 22 22 17.52 22 12S17.52 2 12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14S9.5 16 12 16S16 14 16 14" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="9" r="1" fill="currentColor"/>
          <circle cx="15" cy="9" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Global Device & Platform Coverage',
      description: 'Access thousands of real devices, browsers, and operating systems worldwide through our crowd testing network, ensuring comprehensive compatibility testing.'
    },
    {
      id: 'real-world-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="7" r="1" fill="currentColor"/>
          <circle cx="8" cy="12" r="1" fill="currentColor"/>
          <circle cx="16" cy="12" r="1" fill="currentColor"/>
          <circle cx="12" cy="17" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Real-World User Scenarios',
      description: 'Test with actual users in their natural environments, uncovering usability issues and edge cases that automated testing cannot detect.'
    },
    {
      id: 'cost-effective',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="9" r="1" fill="currentColor"/>
          <circle cx="15" cy="9" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Cost-Effective Scaling',
      description: 'Scale testing efforts rapidly without hiring full-time QA teams or investing in expensive device labs and infrastructure.'
    },
    {
      id: 'diverse-perspectives',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 21V19C17 17.9 16.1 17 15 17H9C7.9 17 7 17.9 7 19V21" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 21V19C22 18.35 21.64 17.78 21.12 17.44" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 3.13C16.76 3.61 17.24 4.38 17.24 5.24C17.24 6.09 16.76 6.87 16 7.35" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 21V19C2 18.35 2.36 17.78 2.88 17.44" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 3.13C7.24 3.61 6.76 4.38 6.76 5.24C6.76 6.09 7.24 6.87 8 7.35" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Diverse User Perspectives',
      description: 'Leverage a global community of testers with varied backgrounds, skills, and perspectives to identify issues across different user segments.'
    },
    {
      id: 'rapid-execution',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8L10 10L14 6" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="12" cy="4" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Rapid Test Execution',
      description: 'Execute testing campaigns in parallel across multiple testers and platforms, dramatically reducing time-to-market for your applications.'
    }
  ];

  // Crowd Testing Service Offerings
  const crowdTestingOfferings = [
    {
      id: 'functional-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 2V7H19M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="13" r="1" fill="currentColor"/>
          <circle cx="11" cy="17" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Functional Testing',
      description: 'Comprehensive functional testing across web, mobile, and desktop applications using real users on real devices to validate core functionality and user workflows.'
    },
    {
      id: 'usability-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12L11 14L15 10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Usability & UX Testing',
      description: 'Evaluate user experience, interface design, and application flow through real user interactions to identify usability bottlenecks and improvement opportunities.'
    },
    {
      id: 'compatibility-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="6" y="8" width="4" height="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="14" y="8" width="4" height="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="6" y="13" width="4" height="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="14" y="13" width="4" height="3" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="12" cy="10" r="1" fill="currentColor"/>
          <circle cx="12" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Cross-Platform Compatibility',
      description: 'Test application compatibility across diverse devices, operating systems, browsers, and screen resolutions using our global crowd network.'
    },
    {
      id: 'localization-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 12H6M18 12H22M6.93 6.93L9.17 9.17M14.83 14.83L17.07 17.07M6.93 17.07L9.17 14.83M14.83 9.17L17.07 6.93" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
          <circle cx="8" cy="12" r="1" fill="currentColor"/>
          <circle cx="16" cy="12" r="1" fill="currentColor"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Localization Testing',
      description: 'Validate translations, cultural adaptations, and local compliance with native speakers and local testers across different geographical regions.'
    },
    {
      id: 'exploratory-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="8" r="1" fill="currentColor"/>
          <circle cx="8" cy="11" r="1" fill="currentColor"/>
          <circle cx="14" cy="11" r="1" fill="currentColor"/>
          <circle cx="11" cy="14" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Exploratory Testing',
      description: 'Unstructured testing by experienced testers to discover unexpected behaviors, edge cases, and usability issues that scripted tests might miss.'
    },
    {
      id: 'security-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Security Testing',
      description: 'Crowdsourced security testing including penetration testing, vulnerability assessment, and security compliance verification by certified security experts.'
    }
  ];

  // Crowd Testing FAQ Data
  const crowdTestingFaqs = [
    {
      id: 'crowd-testing-concept',
      question: 'What is crowd source testing and how does it work?',
      answer: 'Crowd source testing leverages a global community of professional testers to test your applications on real devices in real-world conditions. Testers are selected based on specific criteria like device type, location, demographics, and expertise. They execute test cases or perform exploratory testing while providing detailed feedback, screenshots, and videos of any issues discovered.'
    },
    {
      id: 'quality-assurance',
      question: 'How do you ensure the quality of crowd testers?',
      answer: 'We maintain a rigorous tester qualification process including skill assessments, certification requirements, performance ratings, and ongoing quality monitoring. Testers are rated based on bug quality, report clarity, and testing accuracy. Only top-performing testers are invited to participate in premium testing projects, ensuring consistently high-quality results.'
    },
    {
      id: 'security-confidentiality',
      question: 'How do you handle security and confidentiality concerns?',
      answer: 'Security is paramount in our crowd testing platform. All testers sign comprehensive NDAs, we use secure testing environments, implement device management and remote access controls, maintain audit trails of all testing activities, and offer private crowd options with pre-screened, trusted testers for sensitive applications.'
    },
    {
      id: 'testing-coverage',
      question: 'What types of testing can be performed through crowd testing?',
      answer: 'Our crowd testing covers functional testing, usability testing, compatibility testing, localization testing, exploratory testing, performance testing, security testing, accessibility testing, and specialized domain testing. We can adapt to virtually any testing requirement using our diverse tester community.'
    },
    {
      id: 'cost-comparison',
      question: 'How does crowd testing compare to traditional testing in terms of cost?',
      answer: 'Crowd testing typically reduces testing costs by 40-70% compared to maintaining in-house device labs and QA teams. You only pay for actual testing performed, avoid infrastructure costs, eliminate recruitment and training expenses, and can scale testing efforts up or down based on project needs without long-term commitments.'
    },
    {
      id: 'timeline-delivery',
      question: 'How quickly can crowd testing be executed?',
      answer: 'Crowd testing campaigns can typically begin within 24-48 hours of project setup. Basic functional testing might complete in 2-5 days, while comprehensive multi-platform testing campaigns usually finish within 1-2 weeks. The parallel nature of crowd testing allows us to test across hundreds of device-OS combinations simultaneously, dramatically reducing overall testing time.'
    }
  ];

  const handleContactClick = () => {
    // Handle contact form or navigation
    console.log('Contact for Crowd Source Testing clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroQAoffering
        title="Crowd Source Testing"
        subtitle="Global Testing Network for Comprehensive Quality Assurance"
        description="Harness the power of a global crowd testing community to validate your applications across thousands of real devices, platforms, and user scenarios. Our crowd source testing delivers unparalleled coverage, faster execution, and cost-effective quality assurance that traditional testing methods cannot match. From functional validation to usability insights, we ensure your applications perform flawlessly for users worldwide."
        buttonText="Start Crowd Testing Today"
        onButtonClick={handleContactClick}
        backgroundVariant="green"
      />

      {/* Benefits Section */}
      <QAWhiteBird
        title="Why Choose Crowd Source Testing"
        description="In today's diverse digital landscape, testing on limited internal devices and environments isn't enough. Crowd source testing provides access to real users, real devices, and real-world conditions that expose issues traditional testing often misses. Leverage our global testing community to ensure your applications work perfectly for every user, everywhere."
        benefits={crowdTestingBenefits}
        backgroundColor="white"
        titleColor="green"
        iconColor="green"
        gridColumns={5}
        centerContent={false}
      />

      {/* Service Offerings Section */}
      <FaceBackGround
        title="Our Crowd Testing Services"
        subtitle="Comprehensive crowd testing solutions leveraging thousands of professional testers worldwide. From functional validation to specialized security testing, we provide the coverage and expertise your applications need."
        offerings={crowdTestingOfferings}
        backgroundColor="light-green"
        titleColor="dark"
        columns={3}
      />

      {/* Additional Benefits Section - Platform & Technology Focus */}
      <QAWhiteBird
        title="Advanced Crowd Testing Capabilities"
        description="Leverage cutting-edge crowd testing technologies and methodologies to ensure comprehensive quality assurance across all platforms and user scenarios."
        benefits={[
          {
            id: 'ai-tester-matching',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                <path d="M21 9V7L15 1L13 3L15.5 5.5L9.5 11.5L8 10L6 12L10 16L12 14L10.5 12.5L16.5 6.5L19 9H21Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'AI-Powered Tester Matching',
            description: 'Advanced algorithms match the best testers to your specific project requirements based on device ownership, expertise, location, and historical performance data.'
          },
          {
            id: 'real-time-reporting',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="8" cy="14" r="1" fill="currentColor"/>
                <circle cx="12" cy="14" r="1" fill="currentColor"/>
                <circle cx="16" cy="14" r="1" fill="currentColor"/>
                <circle cx="8" cy="18" r="1" fill="currentColor"/>
              </svg>
            ),
            title: 'Real-Time Testing Dashboard',
            description: 'Monitor testing progress in real-time with live dashboards showing tester activity, bug discoveries, coverage metrics, and completion status.'
          },
          {
            id: 'video-documentation',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 7L16 12L23 17V7Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="6" cy="10" r="1" fill="currentColor"/>
                <circle cx="10" cy="10" r="1" fill="currentColor"/>
                <circle cx="8" cy="14" r="1" fill="currentColor"/>
              </svg>
            ),
            title: 'Video Bug Documentation',
            description: 'Comprehensive bug reports with video recordings, step-by-step reproduction guides, device information, and environmental context for faster issue resolution.'
          },
          {
            id: 'analytics-insights',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3V18C3 19.1 3.9 20 5 20H20" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M18 9L14 13L10 9L6 13" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="9" r="1" fill="currentColor"/>
                <circle cx="14" cy="13" r="1" fill="currentColor"/>
                <circle cx="10" cy="9" r="1" fill="currentColor"/>
                <circle cx="6" cy="13" r="1" fill="currentColor"/>
              </svg>
            ),
            title: 'Testing Analytics & Insights',
            description: 'Detailed analytics on testing coverage, bug patterns, device performance, user behavior insights, and quality trends to inform development decisions.'
          }
        ]}
        backgroundColor="gray"
        titleColor="green"
        iconColor="blue"
        gridColumns={4}
        centerContent={true}
      />

      {/* FAQ Section */}
      <QAFaq
        title="Crowd Source Testing FAQs"
        subtitle="Common questions about our crowd testing platform and services."
        faqs={crowdTestingFaqs}
        backgroundColor="white"
        titleColor="green"
        defaultOpenItems={['crowd-testing-concept']}
        allowMultipleOpen={true}
      />
    </div>
  );
};

export default CrowdSourceTesting; 