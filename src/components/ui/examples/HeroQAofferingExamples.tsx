import React from 'react';
import HeroQAoffering from '../common/HeroQAoffering';

const HeroQAofferingExamples: React.FC = () => {
  const handleContactClick = () => {
    // Handle contact form or navigation
    console.log('Contact button clicked');
  };

  return (
    <div className="space-y-8">
      {/* Functional Testing Example */}
      <HeroQAoffering
        title="Functional Testing Services"
        subtitle="Deliver Flawless & Best-in-class User Experience"
        description="BugRaptors' expertise in functional testing guarantees your software application performs seamlessly according to its design specifications. We meticulously examine text input, core functionality, setup, menu functions, and more through module, integration, and system testing."
        buttonText="Hire Functional Testers Now"
        buttonLink="/contact"
        backgroundVariant="purple"
      />

      {/* Performance Testing Example */}
      <HeroQAoffering
        title="Performance Testing Services"
        subtitle="Ensure Optimal Speed & Scalability"
        description="Our comprehensive performance testing services help you identify bottlenecks, optimize system performance, and ensure your application can handle peak loads efficiently. We conduct load, stress, volume, and endurance testing to guarantee superior user experience."
        buttonText="Get Performance Testing Quote"
        onButtonClick={handleContactClick}
        backgroundVariant="blue"
      />

      {/* Security Testing Example */}
      <HeroQAoffering
        title="Security Testing Services"
        subtitle="Protect Your Applications from Cyber Threats"
        description="Safeguard your digital assets with our advanced security testing methodologies. We identify vulnerabilities, assess security protocols, and ensure your applications meet industry security standards through penetration testing, vulnerability assessments, and security audits."
        buttonText="Secure Your Application Now"
        buttonLink="/qa-offerings/quality-engineering/security-testing"
        backgroundVariant="green"
      />

      {/* Automation Testing Example */}
      <HeroQAoffering
        title="Test Automation Services"
        subtitle="Accelerate Your Testing with Smart Automation"
        description="Transform your testing process with our cutting-edge automation solutions. We design robust test automation frameworks, implement CI/CD integration, and reduce testing time by up to 70% while improving accuracy and coverage across all platforms."
        buttonText="Start Automation Journey"
        onButtonClick={handleContactClick}
        backgroundVariant="orange"
      />
    </div>
  );
};

export default HeroQAofferingExamples; 