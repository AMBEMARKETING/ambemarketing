import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Contact Us</h2>
        <p className="text-center text-xs sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-16 px-2">
          We're here to help. Get in touch with us for any inquiries or business opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16">
          {/* LEFT COLUMN: Form + Location */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Form */}
            <div className="bg-white border-2 border-gray-200 p-4 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-base text-gray-700 font-bold mb-1 sm:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-400 transition-colors text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-base text-gray-700 font-bold mb-1 sm:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-400 transition-colors text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-base text-gray-700 font-bold mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-400 transition-colors text-sm sm:text-base"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-base text-gray-700 font-bold mb-1 sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 hover:border-gray-400 transition-colors text-sm sm:text-base"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Location Map Section */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-700">Bangalore, Karnataka</p>
                  <p className="text-xs sm:text-sm text-gray-600">Ground Floor, No 96, Sadar Patrappa Road</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Information Cards */}
          <div className="space-y-3 sm:space-y-6">
            {/* Office Address */}
            <div className="bg-blue-50 border-2 border-blue-200 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">📍 Office Address</h3>
              <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
                <strong>AMBE MARKETING</strong><br />
                Ground Floor, No. 96, Sadar Patrappa Road<br />
                Bangalore, Bengaluru (Bangalore) Urban<br />
                Karnataka 560002<br />
                India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-blue-50 border-2 border-blue-200 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">📞 Phone</h3>
              <a
                href="tel:+919036289719"
                className="text-xs sm:text-lg text-blue-600 hover:text-blue-800 font-bold break-all"
              >
                +91 90362 89719
              </a>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">Available for calls and inquiries</p>
            </div>

            {/* Email */}
            <div className="bg-red-50 border-2 border-red-200 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-2xl font-bold text-red-800 mb-3 sm:mb-4">✉️ Email</h3>
              <a
                href="mailto:admin@ambemarketing.in"
                className="text-xs sm:text-lg text-blue-600 hover:text-blue-800 font-bold block mb-3 break-all"
              >
                admin@ambemarketing.in
              </a>
              <p className="text-xs sm:text-sm text-gray-600">Professional inquiries and support</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border-2 border-green-200 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-2xl font-bold text-green-800 mb-3 sm:mb-4">💬 WhatsApp</h3>
              <a
                href="https://wa.me/919036289719"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-lg text-green-600 hover:text-green-800 font-bold"
              >
                Chat with us on WhatsApp
              </a>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">Quick responses to your messages</p>
            </div>

            {/* GST Information */}
            <div className="bg-yellow-50 border-2 border-yellow-200 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-base sm:text-2xl font-bold text-yellow-800 mb-3 sm:mb-4">📋 Business Details</h3>
              <p className="text-xs sm:text-base text-gray-700 mb-2">
                <strong>GST Number:</strong> 29AGOPU2897F1ZI
              </p>
              <p className="text-xs sm:text-base text-gray-700">
                <strong>Platform:</strong> Registered on GeM (Government e-Marketplace)
              </p>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 sm:p-12 rounded-lg text-center">
          <h3 className="text-lg sm:text-3xl font-bold mb-4 sm:mb-6">Quick Contact Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <a
              href="tel:+919036289719"
              className="bg-white bg-opacity-30 hover:bg-opacity-50 p-4 sm:p-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
            >
              <p className="text-4xl sm:text-6xl mb-3 sm:mb-4">📞</p>
              <p className="font-bold text-lg sm:text-2xl text-zinc-700 mb-2 sm:mb-3">Call Now</p>
              <p className="text-sm sm:text-lg text-zinc-700 font-semibold">+91 90362 89719</p>
              <p className="text-xs sm:text-sm text-zinc-700 mt-2">Tap to make a call</p>
            </a>

            <a
              href="https://wa.me/919036289719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-30 hover:bg-opacity-50 p-4 sm:p-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
            >
              <p className="text-4xl sm:text-6xl mb-3 sm:mb-4">💬</p>
              <p className="font-bold text-lg sm:text-2xl text-zinc-700 mb-2 sm:mb-3">WhatsApp</p>
              <p className="text-sm sm:text-lg text-zinc-700 font-semibold">919036289719</p>
              <p className="text-xs sm:text-sm text-zinc-700 mt-2">Send a message instantly</p>
            </a>

            <a
              href="mailto:admin@ambemarketing.in"
              className="bg-white bg-opacity-30 hover:bg-opacity-50 p-4 sm:p-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
            >
              <p className="text-4xl sm:text-6xl mb-3 sm:mb-4">✉️</p>
              <p className="font-bold text-lg sm:text-2xl text-zinc-700 mb-2 sm:mb-3">Email</p>
              <p className="text-xs sm:text-lg text-zinc-700 font-semibold break-all">admin@ambemarketing.in</p>
              <p className="text-xs sm:text-sm text-zinc-700 mt-2">Send us an email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
