import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Product Sourcing',
      description: 'We source authentic, high-quality products from leading international brands, ensuring proper documentation and authenticity.',
      icon: '📦'
    },
    {
      title: 'Government Procurement',
      description: 'Specializing in GeM (Government e-Marketplace) transactions for government organizations and public sector undertakings.',
      icon: '🏛️'
    },
    {
      title: 'Distribution Services',
      description: 'Efficient distribution network across India with timely delivery and proper packaging to ensure product safety.',
      icon: '🚚'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality checks and authenticity verification for all products before delivery to customers.',
      icon: '✅'
    },
    {
      title: 'Bulk Orders',
      description: 'Competitive pricing and flexible terms for bulk orders from corporate clients and government departments.',
      icon: '📊'
    },
    {
      title: 'Technical Support',
      description: 'Expert guidance and technical support for product selection, specifications, and optimal usage.',
      icon: '🛠️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Our Services</h2>
        <p className="text-center text-xs sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-16 px-2">
          Comprehensive solutions tailored to meet your procurement and sourcing needs
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-4 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-blue-400"
            >
              <p className="text-3xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</p>
              <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 p-6 sm:p-12 rounded-lg mb-8 sm:mb-16">
          <h3 className="text-lg sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Why Choose AMBE MARKETING?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🌟</span>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">Authentic Products</h4>
                <p className="text-xs sm:text-base text-gray-700">All products are sourced from authorized distributors and come with proper documentation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">💰</span>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">Competitive Pricing</h4>
                <p className="text-xs sm:text-base text-gray-700">Best market prices with transparent pricing structure and no hidden charges.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">⚡</span>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">Fast Delivery</h4>
                <p className="text-xs sm:text-base text-gray-700">Quick order processing and timely delivery across major cities in India.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🤝</span>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">Dedicated Support</h4>
                <p className="text-xs sm:text-base text-gray-700">Professional customer service team ready to assist you at every step.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">📋</span>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">GeM Compliance</h4>
                <p className="text-xs sm:text-base text-gray-700">Fully registered and compliant with Government e-Marketplace regulations.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🔒</span>
              <div>
                <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">Secure Transactions</h4>
                <p className="text-xs sm:text-base text-gray-700">Safe and secure payment methods with proper invoicing and documentation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="bg-white border-2 border-gray-200 p-6 sm:p-12 rounded-lg mb-8 sm:mb-16">
          <h3 className="text-lg sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Brand Partners We Work With</h3>
          <p className="text-center text-xs sm:text-base text-gray-600 mb-6 sm:mb-8">
            We collaborate with leading international brands to bring you the best products:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {['Acer', 'Apple', 'Brother', 'Epson', 'GeM', 'Kyocera', 'Microsoft', 'Samsung', 'HP'].map((brand) => (
              <div key={brand} className="bg-gray-100 p-3 sm:p-6 rounded-lg text-center hover:bg-blue-100 transition-colors duration-300">
                <p className="text-xs sm:text-lg font-bold text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 sm:p-12 rounded-lg text-center">
          <h3 className="text-lg sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
          <p className="text-sm sm:text-lg mb-6 sm:mb-8">
            Contact us today for inquiries, quotes, and business opportunities
          </p>
          <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
            <a
              href="tel:+919036289719"
              className="bg-white text-blue-600 font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block text-sm sm:text-base"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/919036289719"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block text-sm sm:text-base"
            >
              💬 WhatsApp
            </a>
            <a
              href="mailto:admin@ambemarketing.in"
              className="bg-white text-red-600 font-bold py-2 sm:py-3 px-4 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block text-sm sm:text-base"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
