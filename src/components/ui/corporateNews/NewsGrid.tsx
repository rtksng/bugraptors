import React from 'react';
import NewsCard from './NewsCard';

const NewsGrid: React.FC = () => {
  const newsItems = [
    {
      id: '1',
      image: '/src/assets/img2.png', // Placeholder - you can update with actual images
      date: '10-Feb-2025',
      title: 'BugRaptors CEO Yashu Kapila Recognized for Innovation in QA Testing',
      description: 'Our CEO has been recognized for outstanding contributions to the quality assurance and testing industry.',
      category: 'Award',
      readMoreLink: '#'
    },
    {
      id: '2',
      image: '/src/assets/img2.png',
      date: '26-Dec-2024',
      title: 'BugRaptors Awarded as Top Global Company of Fall 2024 by Clutch',
      description: 'We are proud to announce our recognition as a top global company by Clutch for our exceptional services.',
      category: 'Recognition',
      readMoreLink: '#'
    },
    {
      id: '3',
      image: '/src/assets/img2.png',
      date: '18-Oct-2024',
      title: 'BugRaptors CEO, Yashu Kapila Nominated for Women in Tech Global Awards',
      description: 'Our CEO has been nominated for the prestigious Women in Tech Global Awards for her leadership in technology.',
      category: 'Nomination',
      readMoreLink: '#'
    },
    {
      id: '4',
      image: '/src/assets/img2.png',
      date: '09-Oct-2024',
      title: 'BugRaptors CEO Yashu Kapila Wins HerRising Award 2024',
      description: 'Celebrating our CEO\'s achievement in winning the HerRising Award 2024 for exceptional leadership.',
      category: 'Award',
      readMoreLink: '#'
    },
    {
      id: '5',
      image: '/src/assets/img2.png',
      date: '15-Sep-2024',
      title: 'Yashu Kapila at Women Tech Global Conference 2024',
      description: 'Our CEO participated as a keynote speaker at the Women Tech Global Conference 2024.',
      category: 'Event',
      readMoreLink: '#'
    },
    {
      id: '6',
      image: '/src/assets/img2.png',
      date: '28-Aug-2024',
      title: 'Named BugRaptors as a Top Mobile Testing Company 2024',
      description: 'BugRaptors has been recognized as one of the top mobile testing companies for 2024.',
      category: 'Recognition',
      readMoreLink: '#'
    },
    {
      id: '7',
      image: '/src/assets/img2.png',
      date: '12-Jul-2024',
      title: 'BugRaptors Expands Global Testing Services',
      description: 'We are excited to announce the expansion of our testing services to new global markets.',
      category: 'Expansion',
      readMoreLink: '#'
    },
    {
      id: '8',
      image: '/src/assets/img2.png',
      date: '05-Jun-2024',
      title: 'Celebrating Excellence in Software Testing',
      description: 'A look back at our achievements and milestones in delivering exceptional software testing services.',
      category: 'Milestone',
      readMoreLink: '#'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {newsItems.map((item, index) => (
        <div
          key={item.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <NewsCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default NewsGrid; 