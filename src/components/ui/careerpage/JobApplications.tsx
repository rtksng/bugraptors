import React, { useState } from 'react';

const JobApplications: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    file: null as File | null
  });

  const jobs = [
    {
      title: "Manual QA Test Engineer",
      requirements: [
        "Minimum 2 years of experience in testing mobile applications on both Android and iOS platforms.",
        "Understanding of QA and release processes.",
        "Attention to detail and strong organizational skills.",
        "Analytical and problem-solving aptitude.",
        "Strategic understanding of automation tools like Selenium, Appium."
      ]
    },
    {
      title: "Big Data Engineer",
      requirements: [
        "3+ years of experience in Big Data technologies.",
        "Proficiency in Hadoop, Spark, and Kafka.",
        "Experience with data pipeline development.",
        "Knowledge of SQL and NoSQL databases.",
        "Understanding of cloud platforms like AWS or Azure."
      ]
    },
    {
      title: "Sr Java Developer",
      requirements: [
        "5+ years of experience in Java development.",
        "Strong knowledge of Spring Framework and Spring Boot.",
        "Experience with microservices architecture.",
        "Proficiency in RESTful API development.",
        "Knowledge of database design and optimization."
      ]
    },
    {
      title: "React Native Developer",
      requirements: [
        "3+ years of experience in React Native development.",
        "Strong knowledge of JavaScript and TypeScript.",
        "Experience with mobile app deployment.",
        "Understanding of native mobile development concepts.",
        "Knowledge of state management libraries like Redux."
      ]
    },
    {
      title: "API & Database Tester",
      requirements: [
        "2+ years of experience in API testing.",
        "Proficiency in tools like Postman, Newman.",
        "Strong SQL skills and database testing experience.",
        "Knowledge of REST and SOAP protocols.",
        "Experience with automation testing frameworks."
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData, 'for job:', jobs[selectedJob].title);
  };

  return (
    <section className="relative py-20 bg-[#020317] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
            Apply Now For A Brighter Future
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Job Listings */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Current Openings</h3>
              
              <div className="space-y-2">
                {jobs.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedJob(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedJob === index
                        ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-400/50 text-white'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{job.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Job Details and Application Form */}
          <div className="lg:col-span-8">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Job Details */}
              <div className="lg:col-span-7">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {jobs[selectedJob].title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {jobs[selectedJob].requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Application Form */}
              <div className="lg:col-span-5">
                <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-6">Send your CV</h4>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Attach File
                      </label>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition-colors duration-300"
                      />
                    </div>

                    {/* reCAPTCHA Placeholder */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-gray-300 text-sm">I'm not a robot</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobApplications; 