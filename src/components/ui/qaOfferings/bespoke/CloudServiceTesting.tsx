import React from 'react';
import HeroQAoffering from '../../common/HeroQAoffering';
import QAWhiteBird from '../../common/QAWhiteBird';
import FaceBackGround from '../../common/FaceBackGround';
import QAFaq from '../../common/QAFaq';

const CloudServiceTesting: React.FC = () => {
  // Cloud Service Testing Benefits
  const cloudTestingBenefits = [
    {
      id: 'scalability-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="7" r="1" fill="currentColor"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
          <circle cx="12" cy="17" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Scalability & Elasticity',
      description: 'Validate your cloud infrastructure can automatically scale resources up or down based on demand, ensuring optimal performance during peak loads.'
    },
    {
      id: 'reliability-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 12L11 14L15 10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'High Availability & Reliability',
      description: 'Ensure your cloud services maintain consistent uptime and recover gracefully from failures with comprehensive disaster recovery testing.'
    },
    {
      id: 'security-compliance',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="10" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="16" r="1" fill="currentColor"/>
          <path d="M7 11V7A5 5 0 0 1 17 7V11" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 16H15" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Security & Compliance',
      description: 'Comprehensive security testing to ensure data protection, encryption standards, and compliance with regulations like GDPR, HIPAA, and SOC 2.'
    },
    {
      id: 'performance-optimization',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8L10 10L14 6" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Load testing and performance monitoring to optimize cloud resource utilization, reduce latency, and minimize operational costs.'
    },
    {
      id: 'multi-cloud-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 10H20A2 2 0 0 1 22 12A2 2 0 0 1 20 14H18V10Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 14A2 2 0 0 1 4 12A2 2 0 0 1 6 14" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 10A4 4 0 0 1 14 10A4 4 0 0 1 18 14H6A4 4 0 0 1 6 10Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="9" cy="12" r="1" fill="currentColor"/>
          <circle cx="12" cy="12" r="1" fill="currentColor"/>
          <circle cx="15" cy="12" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Multi-Cloud Integration',
      description: 'Test seamless integration across multiple cloud providers (AWS, Azure, GCP) ensuring vendor-agnostic functionality and data portability.'
    }
  ];

  // Cloud Testing Service Offerings
  const cloudTestingOfferings = [
    {
      id: 'cloud-migration',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 10L12 15L17 10" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Cloud Migration Testing',
      description: 'Comprehensive testing during cloud migration to ensure data integrity, application functionality, and seamless transition from on-premise to cloud environments.'
    },
    {
      id: 'microservices-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="3" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="15" y="3" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="15" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="15" y="15" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 6H15M9 18H15M6 9V15M18 9V15" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Microservices Architecture Testing',
      description: 'Validate microservices communication, API contracts, service discovery, and fault tolerance in cloud-native distributed architectures.'
    },
    {
      id: 'container-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="6" y="10" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="14" y="10" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M10 12H14" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Container & Kubernetes Testing',
      description: 'Test containerized applications, orchestration, scaling, and deployment strategies using Docker, Kubernetes, and other container technologies.'
    },
    {
      id: 'serverless-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.77L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Serverless Function Testing',
      description: 'Comprehensive testing of serverless functions, event-driven architectures, and FaaS implementations across AWS Lambda, Azure Functions, and Google Cloud Functions.'
    },
    {
      id: 'iac-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M14 2V7H19M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="13" r="1" fill="currentColor"/>
        </svg>
      ),
      title: 'Infrastructure as Code (IaC) Testing',
      description: 'Validate infrastructure provisioning, configuration management, and deployment automation using Terraform, CloudFormation, and Ansible.'
    },
    {
      id: 'api-gateway-testing',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="7" r="1" fill="currentColor"/>
          <path d="M7 9L12 12L17 9M7 15L12 18L17 15" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'API Gateway & Service Mesh Testing',
      description: 'Test API gateways, service mesh configurations, traffic routing, load balancing, and inter-service communication security.'
    }
  ];

  // Cloud Testing FAQ Data
  const cloudTestingFaqs = [
    {
      id: 'cloud-testing-difference',
      question: 'What makes cloud testing different from traditional testing?',
      answer: 'Cloud testing involves unique challenges like multi-tenancy, elasticity, distributed architectures, and shared responsibility models. It requires testing for scalability, vendor lock-in concerns, network latency, data privacy across regions, and integration with cloud-native services that don\'t exist in traditional environments.'
    },
    {
      id: 'cloud-security-testing',
      question: 'How do you ensure security in cloud testing environments?',
      answer: 'We implement comprehensive security testing including data encryption in transit and at rest, identity and access management (IAM) validation, network security testing, compliance verification (GDPR, HIPAA, SOC 2), vulnerability assessments, and penetration testing specific to cloud infrastructure and services.'
    },
    {
      id: 'multi-cloud-strategy',
      question: 'Can you test multi-cloud and hybrid cloud environments?',
      answer: 'Yes, we specialize in testing complex multi-cloud architectures across AWS, Azure, Google Cloud, and hybrid environments. Our approach includes testing data synchronization, failover mechanisms, vendor-agnostic functionality, cross-cloud communication, and ensuring consistent performance across different cloud providers.'
    },
    {
      id: 'cloud-cost-optimization',
      question: 'How does cloud testing help with cost optimization?',
      answer: 'Our cloud testing identifies resource inefficiencies, validates auto-scaling configurations, tests serverless optimizations, monitors resource utilization patterns, and ensures you\'re not over-provisioning resources. We help optimize cloud costs by testing performance under various load conditions to right-size your infrastructure.'
    },
    {
      id: 'cloud-testing-tools',
      question: 'What tools and technologies do you use for cloud testing?',
      answer: 'We use a comprehensive toolkit including cloud-native testing tools (AWS Device Farm, Azure DevTest Labs), performance testing tools (JMeter, LoadRunner), infrastructure testing (Terraform, Ansible), container testing (Docker, Kubernetes), monitoring tools (CloudWatch, Application Insights), and security testing tools (OWASP ZAP, Burp Suite).'
    },
    {
      id: 'cloud-testing-timeline',
      question: 'How long does a comprehensive cloud testing engagement take?',
      answer: 'Cloud testing timelines vary based on complexity and scope. A basic cloud application assessment might take 2-4 weeks, while comprehensive multi-cloud architecture testing can take 8-16 weeks. Migration testing typically runs parallel to the migration process over 3-6 months, depending on the scale and complexity of your infrastructure.'
    }
  ];

  const handleContactClick = () => {
    // Handle contact form or navigation
    console.log('Contact for Cloud Service Testing clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroQAoffering
        title="Cloud Service Testing"
        subtitle="Comprehensive Cloud Testing Solutions for Modern Infrastructure"
        description="Ensure your cloud applications and infrastructure perform flawlessly with our comprehensive cloud testing services. We validate scalability, security, performance, and reliability across AWS, Azure, Google Cloud, and hybrid environments. From cloud migration testing to serverless function validation, we guarantee your cloud services meet the highest standards of quality and compliance."
        buttonText="Get Cloud Testing Quote"
        onButtonClick={handleContactClick}
        backgroundVariant="blue"
      />

      {/* Benefits Section */}
      <QAWhiteBird
        title="Why Cloud Service Testing is Critical"
        description="In today's cloud-first world, traditional testing approaches fall short. Cloud environments introduce unique challenges including distributed architectures, auto-scaling, multi-tenancy, and shared responsibility models. Our specialized cloud testing ensures your applications leverage cloud benefits while maintaining security, performance, and reliability standards that users expect."
        benefits={cloudTestingBenefits}
        backgroundColor="white"
        titleColor="blue"
        iconColor="blue"
        gridColumns={5}
        centerContent={false}
      />

      {/* Service Offerings Section */}
      <FaceBackGround
        title="Our Cloud Testing Service Offerings"
        subtitle="Comprehensive cloud testing solutions covering every aspect of your cloud infrastructure and applications. From migration validation to ongoing performance optimization, we ensure your cloud services deliver exceptional results."
        offerings={cloudTestingOfferings}
        backgroundColor="cream"
        titleColor="dark" 
        columns={3}
      />

      {/* Additional Benefits Section - Technical Focus */}
      <QAWhiteBird
        title="Advanced Cloud Testing Capabilities"
        description="Leverage our expertise in cutting-edge cloud technologies and testing methodologies to ensure your cloud infrastructure is robust, secure, and optimized for performance."
        benefits={[
          {
            id: 'devops-integration',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'DevOps & CI/CD Integration',
            description: 'Seamless integration with your DevOps pipelines, automated testing in CI/CD workflows, and continuous quality assurance throughout the development lifecycle.'
          },
          {
            id: 'monitoring-observability',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Monitoring & Observability',
            description: 'Comprehensive monitoring setup, distributed tracing, log analysis, and observability testing to ensure full visibility into your cloud applications.'
          },
          {
            id: 'disaster-recovery',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5L12 1Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7V13L16 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            ),
            title: 'Disaster Recovery Testing',
            description: 'Validate backup strategies, test recovery procedures, ensure RTO/RPO compliance, and verify business continuity plans across multiple cloud regions.'
          },
          {
            id: 'compliance-governance',
            icon: (
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V7L14 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2V7H19M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2"/>
                <circle cx="11" cy="13" r="1" fill="currentColor"/>
              </svg>
            ),
            title: 'Compliance & Governance',
            description: 'Ensure adherence to industry regulations, validate governance policies, test compliance controls, and maintain audit trails for regulatory requirements.'
          }
        ]}
        backgroundColor="gray"
        titleColor="blue"
        iconColor="green"
        gridColumns={4}
        centerContent={true}
      />

      {/* FAQ Section */}
      <QAFaq
        title="Cloud Service Testing FAQs"
        subtitle="Common questions about our cloud testing services and methodologies."
        faqs={cloudTestingFaqs}
        backgroundColor="white"
        titleColor="blue"
        defaultOpenItems={['cloud-testing-difference']}
        allowMultipleOpen={true}
      />
    </div>
  );
};

export default CloudServiceTesting; 