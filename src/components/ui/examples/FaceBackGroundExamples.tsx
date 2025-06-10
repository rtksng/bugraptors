import React from 'react';
import FaceBackGround from '../common/FaceBackGround';

const FaceBackGroundExamples: React.FC = () => {
  // Functional Testing Data (matches the image)
  const functionalTestingOfferings = [
    {
      id: 'state-transition',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          <circle cx="7" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="17" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 17H15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'State Transition Diagram and Decision Table',
      description: 'We meticulously map out your software\'s behavior and responses, ensuring seamless transitions and predictable outcomes.'
    },
    {
      id: 'traceability-matrix',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 2V7H19" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 9H15M9 13H15M9 17H13" stroke="currentColor" strokeWidth="2"/>
          <circle cx="8" cy="9" r="0.5" fill="currentColor"/>
          <circle cx="8" cy="13" r="0.5" fill="currentColor"/>
          <circle cx="8" cy="17" r="0.5" fill="currentColor"/>
        </svg>
      ),
      title: 'Traceability Matrix and Business Flow Matrix',
      description: 'We maintain complete transparency, linking requirements to test cases and visualizing your application\'s business processes.'
    },
    {
      id: 'boundary-analysis',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L10 14L16 8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="6" cy="8" r="1" fill="currentColor"/>
          <circle cx="18" cy="8" r="1" fill="currentColor"/>
          <circle cx="6" cy="16" r="1" fill="currentColor"/>
          <circle cx="18" cy="16" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Boundary Value Analysis and Equivalence Partitioning',
      description: 'We systematically test the edges and representative values, optimizing test coverage and efficiency.'
    },
    {
      id: 'rhino-hunting',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.5 8.5L22 9L15.5 9.5L12 16L8.5 9.5L2 9L8.5 8.5L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 9V15M9 12H15" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Rhino Hunting',
      description: 'We proactively seek out critical defects and hidden risks, safeguarding your software\'s stability and performance.'
    },
    {
      id: 'risk-based-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Risk-Based Testing',
      description: 'We prioritize testing efforts based on potential impact and likelihood, ensuring critical areas receive maximum attention.'
    },
    {
      id: 'user-acceptance',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6L9 17L4 12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 12L10 14L16 8" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'User Acceptance Testing',
      description: 'We engage real users to validate your software\'s usability and functionality, ensuring it meets their expectations and needs.'
    }
  ];

  // Performance Testing Data Example
  const performanceTestingOfferings = [
    {
      id: 'load-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17V19H21V17H3ZM4 6V8H20V6H4ZM7 11V13H17V11H7Z" />
        </svg>
      ),
      title: 'Load Testing',
      description: 'Evaluate system performance under expected user loads to ensure optimal response times.'
    },
    {
      id: 'stress-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
        </svg>
      ),
      title: 'Stress Testing',
      description: 'Push your system beyond normal limits to identify breaking points and recovery capabilities.'
    },
    {
      id: 'volume-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 17H7V15H12V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" />
        </svg>
      ),
      title: 'Volume Testing',
      description: 'Test system behavior with large amounts of data to ensure scalability and stability.'
    },
    {
      id: 'endurance-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Endurance Testing',
      description: 'Verify system stability over extended periods to identify memory leaks and performance degradation.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Functional Testing Example - Matches the image */}
      <FaceBackGround
        title="What We Offer in Functional Testing"
        subtitle="No matter what stage of the development lifecycle your product is in, BugRaptors' functional testing expertise covers a broad range of methodologies and techniques. Using industry-leading techniques and staying ahead of market trends, we customize our approach to your unique company needs. Our functional testing services encompass:"
        offerings={functionalTestingOfferings}
        backgroundColor="cream"
        titleColor="purple"
        columns={3}
      />

      {/* Performance Testing Example */}
      <FaceBackGround
        title="Performance Testing Methodologies"
        subtitle="Comprehensive performance testing strategies to ensure your application delivers exceptional user experience under all conditions."
        offerings={performanceTestingOfferings}
        backgroundColor="light-purple"
        titleColor="blue"
        columns={2}
      />

      {/* Security Testing Example - 4 Column Layout */}
      <FaceBackGround
        title="Security Testing Approaches"
        offerings={[
          {
            id: 'penetration',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Penetration Testing',
            description: 'Simulate real-world attacks to identify vulnerabilities.'
          },
          {
            id: 'vulnerability',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V11" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Vulnerability Assessment',
            description: 'Comprehensive security gap analysis and recommendations.'
          },
          {
            id: 'authentication',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 11V7C15 5.89543 14.1046 5 13 5H7C5.89543 5 5 5.89543 5 7V11M5 11H19C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Authentication Testing',
            description: 'Verify secure login and access control mechanisms.'
          },
          {
            id: 'data-protection',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Data Protection',
            description: 'Ensure sensitive data encryption and privacy compliance.'
          }
        ]}
        backgroundColor="white"
        titleColor="dark"
        columns={4}
      />
    </div>
  );
};

export default FaceBackGroundExamples; 