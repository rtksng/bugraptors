import React, { useState } from 'react';

const TestBot: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <span className="text-xl font-semibold">Voice of Kaur</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blogs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Thriving with<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Meaning, Method, and Mindfulness
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Voice of Kaur shares frameworks, lessons, and insights from the frontlines of entrepreneurship and leadership.
              </p>

              {/* Search Bar */}
              <div className="flex max-w-md mx-auto lg:mx-0">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search the blog"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg transition-colors">
                  Search
                </button>
              </div>

              {/* Explore More Link */}
              <div className="mt-12">
                <a href="#" className="text-gray-400 hover:text-white flex items-center justify-center lg:justify-start space-x-2">
                  <span>Explore More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="relative max-w-lg mx-auto">
                {/* Main Illustration Container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
                  {/* Person Illustration */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      {/* Person sitting and reading */}
                      <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-yellow-400 rounded-t-full relative">
                          {/* Hair */}
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-700 rounded-full"></div>
                          {/* Face */}
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-yellow-300 rounded-full">
                            {/* Eyes */}
                            <div className="absolute top-6 left-3 w-2 h-2 bg-black rounded-full"></div>
                            <div className="absolute top-6 right-3 w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          {/* Body */}
                          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-teal-400 rounded-t-3xl"></div>
                          {/* Book */}
                          <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-white rounded shadow-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-16 bg-green-500 rounded-t-full relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-green-400 rounded-t-full"></div>
                    </div>
                  </div>

                  <div className="absolute top-8 right-6">
                    <div className="w-8 h-10 bg-green-600 rounded-t-full"></div>
                  </div>

                  <div className="absolute bottom-8 left-6">
                    <div className="w-10 h-8 bg-red-500 rounded-lg shadow-lg">
                      <div className="w-full h-2 bg-red-600 rounded-t-lg"></div>
                    </div>
                  </div>

                  {/* Quote Bubbles */}
                  <div className="absolute top-16 right-2 bg-gray-700 rounded-lg p-2 text-xs">
                    <p>"understanding<br />your worth"</p>
                  </div>

                  <div className="absolute bottom-16 left-2 bg-gray-700 rounded-lg p-2 text-xs">
                    <p>"never give up<br />keep working"</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-pink-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Focus Area Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Explore by Focus Area
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Explore six curated blocks highlighting key founder challenges—from strategic pivots and leadership to scaling and tech. Get actionable, real-world insights that help you build smarter and grow stronger—no fluff, just proven lessons.
          </p>

          {/* Focus Area Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Build Smart, Break Better */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Smart, Break Better</h3>
              <p className="text-gray-400">Strategic planning, systems, and the patterns that emerge from successful resiliency with purpose.</p>
            </div>

            {/* Inside a Founder's Head */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inside a Founder's Head</h3>
              <p className="text-gray-400">Psychology, risk psychology, and the shared, sole decisions behind great leadership.</p>
            </div>

            {/* What Really Works */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">What Really Works</h3>
              <p className="text-gray-400">Real-world tactics, go-to-market moves, and systems that felt-moment that.</p>
            </div>

            {/* Tech with Tech */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech with Tech</h3>
              <p className="text-gray-400">Emerging technology devoted for those who opt to build, not just observe.</p>
            </div>

            {/* Scaling with Soul */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scaling with Soul</h3>
              <p className="text-gray-400">Equity, inclusion, and the human side of scaling—beyond the boardroom jargon.</p>
            </div>

            {/* Founder Files */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Founder Files</h3>
              <p className="text-gray-400">Case studies, deep dives, and raw reflections from inside the founder's journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Introduction Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-4 h-4 bg-purple-400 rounded-full animate-twinkle"></div>
          <div className="absolute top-8 right-8 w-2 h-2 bg-pink-400 rounded-full animate-twinkle delay-300"></div>
          <div className="absolute bottom-0 left-8 w-3 h-3 bg-blue-400 rounded-full animate-twinkle delay-700"></div>
          <div className="absolute bottom-8 right-0 w-2 h-2 bg-green-400 rounded-full animate-twinkle delay-1000"></div>

          {/* Profile Photo Container */}
          <div className="relative mb-8">
            <div className="relative inline-block">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400 animate-spin" style={{ animationDuration: '20s' }}></div>
              
              {/* Profile Photo */}
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  {/* Placeholder for actual photo */}
                  <div className="w-32 h-32 bg-yellow-300 rounded-full relative">
                    {/* Face features */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-black rounded-full"></div>
                    <div className="absolute top-8 right-8 w-4 h-4 bg-black rounded-full"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-red-400 rounded-full"></div>
                    {/* Hair */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-full"></div>
                    {/* Glasses */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-8">
                      <div className="w-8 h-8 border-2 border-black rounded-full absolute left-0"></div>
                      <div className="w-8 h-8 border-2 border-black rounded-full absolute right-0"></div>
                      <div className="w-4 h-1 bg-black absolute top-3 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Text Around Circle */}
              <div className="absolute top-4 left-4 text-xs text-purple-400 transform -rotate-45">mentoring</div>
              <div className="absolute top-4 right-4 text-xs text-purple-400 transform rotate-45">strategy</div>
              <div className="absolute bottom-4 left-4 text-xs text-purple-400 transform rotate-45">leadership</div>
              <div className="absolute bottom-4 right-4 text-xs text-purple-400 transform -rotate-45">growth</div>
            </div>
          </div>

          {/* Introduction Text */}
          <h2 className="text-4xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Palakjot</span>
          </h2>
          <h3 className="text-2xl text-gray-300 mb-6">
            Founder, Strategist, And A Deliberate Thinker.
          </h3>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            In a world obsessed with speed, I choose to build with intention. 
            Voice of Kaur is my journal—a space for clarity, depth, and the slow 
            art of creating something that truly matters.
          </p>

          {/* Signature */}
          <div className="text-center">
            <div className="text-3xl font-script text-purple-400 mb-2" style={{ fontFamily: 'cursive' }}>
              Palakjot Kaur
            </div>
            <div className="text-sm text-gray-400">—Founder of VoiceofKaur</div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured <span className="text-gray-400">Articles</span></h2>
              <p className="text-gray-400">Sharp insights, real tactics, and clear thinking—for those who build with purpose.</p>
            </div>
            <button className="text-purple-400 hover:text-purple-300 transition-colors">
              View All Posts →
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">23 Nov 2024</div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  Rebuilding After Breaking: What No One Tells...
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elevating technology decisions for those who out it in to build, not just advise.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">20 Nov 2024</div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  What Founders Talk About in Private: Double...
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elevating technology decisions for those who opt to build not just advise.
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-green-600 to-teal-600 relative">
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-400 mb-2">18 Nov 2024</div>
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  Founders Talk About : What No One Tells You
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Elevating technology decisions for those and opt to build not just advise.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-gray-400 mb-2">Build with clarity</p>
            <h2 className="text-4xl font-bold mb-6">One post at a time</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get raw strategy, founder frameworks, and sharp reflections—delivered monthly.
            </p>
          </div>

          {/* Subscription Form */}
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-gray-400 text-sm mt-4">
            No spam. No fluff. Just actionable insights you can use immediately.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <span className="text-xl font-semibold">Voice of Kaur</span>
              </div>
              <p className="text-gray-400 mb-4">
                Real lessons. Clear insights.<br />
                Built for founders who build better.
              </p>
              <div className="text-gray-400 text-sm">
                <p>voiceofkaur@gmail.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support/FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Website Status</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 VoiceofKaur.com</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 2.567-1.645 0-3.768-2.245-3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.378-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-twinkle {
            animation: twinkle 3s ease-in-out infinite;
          }
        `
      }} />
    </div>
  );
};

export default TestBot;
