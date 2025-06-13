import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight
} from 'react-icons/fa';
import SectionTitle from './SectionTittle';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    isRobot: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      isRobot: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const contactInfo = [
    {
      title: "Call Us",
      subtitle: "Ready to talk?",
      value: "+1 (888) 123-4567",
      description: "Mon-Fri 9AM-6PM EST",
      icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Us",
      subtitle: "Drop us a line",
      value: "info@bugraptors.com",
      description: "We'll respond within 24 hours",
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Visit Us",
      subtitle: "Come say hello",
      value: "Multiple Locations",
      description: "Global offices worldwide",
      icon: <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24   overflow-hidden">
      {/* Creative Background - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className=""></div>
        <div className=""></div>

        {/* Creative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Mobile Optimized */}

        <div className='mb-4 md:mb-6 lg:mb-8'>
          <SectionTitle
            tag="Get In Touch"

            title="Let's Start Something Great"
            subtitle="Share your QA requirements with us and our experts will get back to you" />

        </div>

        {/* Creative Two-Column Layout - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Info Cards */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Decorative Element */}
            <div className="relative">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Get In Touch</h3>
                  <p className="text-gray-400 text-sm sm:text-base">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
                </div>

                {/* Contact Cards - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className="group relative p-4 sm:p-6 bg-custom-transparent rounded-xl sm:rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Creative Background Accent */}
                      <div className={`absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br ${info.gradient} opacity-5 rounded-full translate-x-6 sm:translate-x-8 -translate-y-6 sm:-translate-y-8`}></div>

                      <div className="relative flex items-start space-x-3 sm:space-x-4">
                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl custom-bg-color bg-opacity-20  flex-shrink-0`}>
                          <div className="text-white">
                            {info.icon}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <h4 className="text-white font-semibold text-sm sm:text-base">{info.title}</h4>
                            <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                          </div>
                          <p className="text-gray-400 text-xs sm:text-sm mb-1">{info.subtitle}</p>
                          <p className="text-purple-300 font-medium text-sm sm:text-base break-all">{info.value}</p>
                          <p className="text-gray-500 text-xs mt-1">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info - Mobile Optimized */}
                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-lg sm:rounded-xl border border-green-500/20">
                  <div className="flex items-center space-x-3">
                    <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">Quick Response</p>
                      <p className="text-gray-400 text-xs">We typically respond within 2-4 hours during business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form - Mobile Optimized */}
          <div className="relative order-1 lg:order-2">
            {/* Creative Form Container */}
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 rounded-2xl sm:rounded-3xl blur-xl"></div>

              <div className="relative bg-gradient-to-br from-[#0a102a]/90 to-[#151b3d]/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-500/20 p-4 sm:p-6 lg:p-8">
                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send us a Message</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Tell us about your project and we'll get back to you</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-gray-300">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-[#0a0f2e]/80 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-300 text-sm sm:text-base"
                        required
                      />
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-xs sm:text-sm font-medium text-gray-300">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-[#0a0f2e]/80 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-300 text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-300">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-[#0a0f2e]/80 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-300">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-[#0a0f2e]/80 rounded-lg border border-purple-500/20 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 text-white placeholder-gray-400 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <label htmlFor="privacy" className="flex items-start space-x-3 cursor-pointer select-none">
                      <div className="relative flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="isRobot"
                          checked={formData.isRobot}
                          onChange={handleChange}
                          className="peer sr-only"
                        />
                        <div
                          className={`w-4 h-4 sm:w-5 sm:h-5 rounded border cursor-pointer transition-all duration-300
                      ${formData.isRobot
                              ? 'border-purple-500 bg-gradient-to-r from-purple-600 to-blue-600'
                              : 'border-purple-500/30 bg-[#0a0f2e]/80'
                            }`}
                        >
                          <FaCheckCircle
                            className={`w-full h-full p-[1px] text-white transition-all duration-300
                            ${formData.isRobot ? 'opacity-100' : 'opacity-0'}`}
                          />
                        </div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        I agree to the privacy policy and terms of service
                      </span>
                    </label>

                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 sm:px-6 sm:py-4 custom-bg-color text-white rounded-full  disabled:opacity-70 disabled:cursor-not-allowed hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group text-sm sm:text-base cursor-pointer"
                  >
                    <div className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FaPaperPlane className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </button>

                  {/* Form Footer */}
                  <div className="text-center pt-3 sm:pt-4 border-t border-purple-500/10">
                    <p className="text-xs text-gray-500">
                      Your information is secure and will not be shared with third parties
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 