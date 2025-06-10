import React from 'react';
import { FaAward } from 'react-icons/fa';

interface ParagraphSectionProps {
  title: string;
  paragraphs: string[];
  className?: string;
}

const ParagraphSection: React.FC<ParagraphSectionProps> = ({ title, paragraphs, className = "" }) => {
  return (
    <div className={`mb-16 sm:mb-20 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
          {title}
        </h3>
        <div className="space-y-6 text-gray-300">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

interface SectionTitleParaProps {
  tag?: string;
  title: string;
  subtitle?: string;
  paragraphSections?: Array<{
    title: string;
    paragraphs: string[];
    className?: string;
  }>;
}

const SectionTitlePara: React.FC<SectionTitleParaProps> = ({ 
  tag, 
  title, 
  subtitle, 
  paragraphSections 
}) => {
  // Default paragraph sections if none provided
  const defaultParagraphSections: Array<{
    title: string;
    paragraphs: string[];
    className?: string;
  }> = [
    {
      title: "Key Insights & Strategies",
      paragraphs: [
        "In today's rapidly evolving digital landscape, organizations must adapt their strategies to remain competitive and relevant. The integration of cutting-edge technologies with traditional business practices creates new opportunities for growth and innovation. Companies that successfully navigate this transformation often find themselves at the forefront of their industries.",
        "Strategic planning in the modern era requires a deep understanding of market dynamics, customer behavior, and technological trends. Organizations must be agile enough to pivot when necessary while maintaining a clear vision of their long-term objectives. This balance between flexibility and consistency is crucial for sustainable success.",
        "Leadership plays a pivotal role in driving organizational transformation. Effective leaders foster a culture of innovation, encourage collaboration, and empower their teams to think creatively. They understand that change is not just about adopting new technologies, but also about reshaping mindsets and behaviors throughout the organization.",
        "Customer-centricity has become more important than ever before. Organizations that prioritize understanding their customers' needs, preferences, and pain points are better positioned to deliver value and build lasting relationships. This approach requires continuous research, feedback collection, and iterative improvement of products and services.",
        "The future belongs to organizations that can seamlessly blend human creativity with technological capabilities. By leveraging data analytics, artificial intelligence, and automation while maintaining a human touch, companies can achieve unprecedented levels of efficiency and innovation. This synergy between human and machine intelligence is reshaping industries across the globe."
      ]
    },
    {
      title: "Comprehensive Framework & Implementation",
      paragraphs: [
        "The foundation of any successful digital transformation lies in establishing a comprehensive framework that addresses all aspects of organizational change. This framework should encompass technology infrastructure, human resources, processes, and cultural elements. Without a holistic approach, transformation efforts often fail to deliver the expected results.",
        "Technology adoption must be strategic and purposeful, rather than driven by trends or peer pressure. Organizations should carefully evaluate their specific needs, existing capabilities, and long-term goals before investing in new technologies. The key is to select solutions that align with business objectives and provide measurable value.",
        "Change management is a critical component that is often overlooked in transformation initiatives. Employees need proper training, support, and motivation to embrace new ways of working. Communication throughout the process is essential to address concerns, celebrate successes, and maintain momentum during challenging periods.",
        "Data-driven decision making has become a cornerstone of modern business strategy. Organizations must develop robust data collection, analysis, and visualization capabilities to extract meaningful insights from their operations. This requires investment in both technology and talent, as well as a cultural shift towards evidence-based decision making.",
        "Collaboration and partnership strategies are evolving in response to increased market complexity and rapid technological advancement. Organizations are recognizing the value of strategic alliances, joint ventures, and ecosystem partnerships to accelerate innovation and expand their capabilities beyond traditional boundaries.",
        "Sustainability and social responsibility are no longer optional considerations for businesses. Consumers, investors, and stakeholders increasingly expect organizations to demonstrate their commitment to environmental stewardship and social impact. This shift is driving innovation in products, services, and business models across industries.",
        "The importance of continuous learning and adaptation cannot be overstated in today's business environment. Organizations must foster a culture of curiosity, experimentation, and learning from both successes and failures. This mindset enables them to stay ahead of market changes and maintain their competitive advantage.",
        "Looking ahead, the most successful organizations will be those that can balance innovation with stability, growth with sustainability, and global reach with local relevance. They will need to remain agile and responsive while building strong foundations for long-term success. The journey of transformation is ongoing, requiring constant vigilance, adaptation, and commitment to excellence."
      ]
    }
  ];

  const sectionsToRender = paragraphSections || defaultParagraphSections;

  return (
    <section>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          {tag && (
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 backdrop-blur-sm mb-4 sm:mb-6">
              <FaAward className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-2 sm:mr-3" />
              <span className="text-xs sm:text-sm font-medium text-purple-200">{tag}</span>
            </div>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-radial-gradient font-medium mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto text-white">
            {title}
          </h2>

          {subtitle && (
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4 mb-8 sm:mb-12">
              {subtitle}
            </p>
          )}
        </div>

        {/* Render Paragraph Sections */}
        {sectionsToRender.map((section, index) => (
          <ParagraphSection
            key={index}
            title={section.title}
            paragraphs={section.paragraphs}
            className={section.className || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionTitlePara;
export { ParagraphSection };
