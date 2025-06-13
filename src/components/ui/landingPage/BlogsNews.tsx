import React, { useState } from 'react';
import {
  FaNewspaper,
  FaBlog,
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaBookmark,
  FaTags,
  FaChevronRight
} from 'react-icons/fa';
import CTAButton from '../common/CTAButton';
import SectionTitle from '../common/SectionTittle';
import Button from '../common/CTAButton';
import CtaActionButton from '../common/CtaActionButton';
const blogs = [

  {
    title: 'Machine Learning in Software Testing Revolution',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
    date: '04-Mar-2025',
    type: 'blog',
    readTime: '7 min read',
    category: 'Machine Learning'
  },
  {
    title: 'Security Testing in Modern Apps: New Approaches',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800',
    date: '03-Mar-2025',
    type: 'news',
    readTime: '5 min read',
    category: 'Security'
  },
  {
    title: 'Cloud Testing Strategies for Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: '03-Mar-2025',
    type: 'blog',
    readTime: '11 min read',
    category: 'Cloud Testing'
  },
  {
    title: 'Mobile App Testing Trends for 2025...',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800',
    date: '02-Mar-2025',
    type: 'news',
    readTime: '4 min read',
    category: 'Mobile Testing'
  },
  {
    title: 'AI-Powered Test Automation Tools...',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800',
    date: '02-Mar-2025',
    type: 'blog',
    readTime: '7 min read',
    category: 'Automation'
  },
  {
    title: 'Performance Testing in Microservices...',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    date: '01-Mar-2025',
    type: 'news',
    readTime: '5 min read',
    category: 'Performance Testing'
  },
  {
    title: 'DevOps and QA: Bridging the Gap...',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    date: '01-Mar-2025',
    type: 'blog',
    readTime: '8 min read',
    category: 'DevOps'
  }
];

const BlogsNews: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'news'>('blogs');

  const filteredItems = blogs.filter(item =>
    activeTab === 'blogs' ? item.type === 'blog' : item.type === 'news'
  );

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24    overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className=""></div>
        <div className=""></div>

        {/* Subtle particle elements */}
        {[...Array(5)].map((_, i) => (
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start  w-full  ">


          <div className='w-full'>



            <div className="flex justify-between w-full items-end">
              <SectionTitle
                title="Blogs & Latest News"
                align='left'
                tag='Latest Updates'
              />



            </div>
          </div>

          {/* View All Button */}

        </div>

        {/* Enhanced Tabs */}
        <div className="flex justify-between space-x-2 mb-12 mt-8">
          <div className='flex space-x-2'>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${activeTab === 'blogs'
                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-200'
                : 'text-gray-400 hover:text-purple-200 border border-purple-500/20 hover:border-purple-500/20'
                }`}
            >
              <FaBlog className="w-4 h-4 mr-2" />
              Blogs
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeTab === 'blogs' ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700/50 text-gray-400'
                }`}>
                {blogs.filter(item => item.type === 'blog').length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${activeTab === 'news'
                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-200'
                : 'text-gray-400 hover:text-purple-200 border border-transparent hover:border-purple-500/20'
                }`}
            >
              <FaNewspaper className="w-4 h-4 mr-2" />
              Latest News
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${activeTab === 'news' ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-700/50 text-gray-400'
                }`}>
                {blogs.filter(item => item.type === 'news').length}
              </span>
            </button>
          </div>

          <CtaActionButton
            text="View All Articles"
            variant="primary"
          />
        </div>

        {/* Enhanced Blog/News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.slice(0, 8).map((item, index) => (
            <article
              key={item.title}
              className="group relative bg-custom-transparent  rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-sm text-[#EDEADE]">

                    {item.category}
                  </span>
                </div>



                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B1120] to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-4">

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-light text-gray-400 ">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <FaCalendarAlt className="w-3 h-3 mr-1" />
                      <span>{item.date}</span>
                    </div>

                  </div>
                </div>
                <h3 className="text-lg leading-tight font-medium line-clamp-2 my-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 pb-1 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">{item.title}</h3>



                {/* Read More Button */}
                <button className="inline-flex items-center text-purple-400  hover:text-purple-300 transition-colors duration-300 group/btn cursor-pointer">
                  Read More

                </button>
              </div>

              {/* Subtle Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-gradient-to-br from-purple-500/0 via-purple-500/5 to-blue-500/0 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Enhanced Load More Section */}
        {/* <div className="text-center mt-12   flex items-center justify-center">
          <CTAButton onClick={() => console.log('Clicked!')} variant="primary">Load More Articles</CTAButton>
        </div> */}
      </div>

    </section>
  );
};

export default BlogsNews; 