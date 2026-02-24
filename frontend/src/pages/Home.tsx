import { useState, useEffect } from 'react';

export default function Home() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  const brands = [
    { name: 'Acer', image: '/agif.svg', color: 'from-green-400 to-green-600' },
    { name: 'Apple', image: '/agif.svg', color: 'from-gray-700 to-gray-900' },
    { name: 'Brother', image: '/agif.svg', color: 'from-blue-500 to-blue-700' },
    { name: 'Epson', image: '/agif.svg', color: 'from-purple-500 to-purple-700' },
    { name: 'GeM', image: '/agif.svg', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Kyocera', image: '/agif.svg', color: 'from-red-500 to-red-700' },
    { name: 'Microsoft', image: '/agif.svg', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Samsung', image: '/agif.svg', color: 'from-blue-600 to-blue-800' },
    { name: 'HP', image: '/agif.svg', color: 'from-indigo-500 to-indigo-700' },
  ];

  // Auto-rotate carousel (right to left movement)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [brands.length]);

  const handlePrev = () => {
    setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const handleNext = () => {
    setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Welcome to AMBE MARKETING
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">
            Your trusted partner for sourcing and procurement through GeM (Government e-Marketplace)
          </p>
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          <div className="bg-blue-50 p-4 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">About Us</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              AMBE MARKETING is a professional trading and distribution company specializing in product sourcing and supply.
              We are registered on GeM (Government e-Marketplace) and provide world-class products from leading brands.
            </p>
          </div>

          <div className="bg-green-50 p-4 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Our Location</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 sm:mb-4">
              <strong>Address:</strong> Ground Floor, No 96, Sadar Patrappa Road,
              Bangalore, Bengaluru (Bangalore) Urban, Karnataka 560002
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              <strong>GST No:</strong> 29AGOPU2897F1ZI
            </p>
          </div>
        </div>

        {/* GeM Marketplace Info */}
        <div className="bg-yellow-50 border-2 border-yellow-300 p-4 sm:p-8 rounded-lg mb-8 sm:mb-16">
          <h3 className="text-lg sm:text-2xl font-bold text-yellow-800 mb-3 sm:mb-4">🏛️ Government e-Marketplace (GeM)</h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            AMBE MARKETING is registered with GeM, the Government e-Marketplace, allowing us to serve government organizations,
            public sector undertakings, and other authorized buyers with authentic, quality products from trusted international brands.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-16">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center">
            <h4 className="text-base sm:text-xl font-bold text-gray-800 mb-2">📞 Phone</h4>
            <a href="tel:+919036289719" className="text-sm sm:text-base text-blue-600 hover:text-blue-800 font-semibold break-all">
              +91 90362 89719
            </a>
          </div>

          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center">
            <h4 className="text-base sm:text-xl font-bold text-gray-800 mb-2">✉️ Email</h4>
            <a href="mailto:admin@ambemarketing.in" className="text-sm sm:text-base text-blue-600 hover:text-blue-800 font-semibold break-all">
              admin@ambemarketing.in
            </a>
          </div>

          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg text-center">
            <h4 className="text-base sm:text-xl font-bold text-gray-800 mb-2">💬 WhatsApp</h4>
            <a href="https://wa.me/919036289719" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-green-600 hover:text-green-800 font-semibold">
              Click to message
            </a>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="bg-white py-8 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h3 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">Our Brand Partners</h3>

          {/* Mobile View - Single Column */}
          <div className="md:hidden">
            <div className="flex justify-center gap-2 overflow-x-auto pb-4">
              {brands.map((brand, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentBrandIndex(idx)}
                  className={`flex-shrink-0 rounded-lg p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 ${idx === currentBrandIndex
                    ? `bg-gradient-to-br ${brand.color} text-white font-bold`
                    : 'bg-gray-200 text-gray-800'
                    }`}
                >
                  <p className="text-sm sm:text-base whitespace-nowrap">{brand.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop View - Carousel */}
          <div className="hidden md:block relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 z-20 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Previous brand"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="flex justify-center items-center gap-3 md:gap-4 overflow-hidden mx-12 md:mx-20 min-h-40 md:min-h-48">
              {[...Array(3)].map((_, i) => {
                const index = (currentBrandIndex + i - 1 + brands.length) % brands.length;
                const isCenter = i === 1;
                return (
                  <div
                    key={i}
                    className={`transition-all duration-500 ${isCenter
                      ? 'scale-100 opacity-100 w-32 h-32 md:w-48 md:h-48'
                      : 'scale-75 opacity-50 w-24 h-24 md:w-32 md:h-32'
                      }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${brands[index].color} rounded-lg shadow-lg p-4 md:p-8 flex items-center justify-center h-full cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                    >
                      <div className="text-center">
                        <p className="text-white text-xs md:text-xl font-bold">{brands[index].name}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-20 bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
              aria-label="Next brand"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators - Desktop Only */}
          <div className="hidden md:flex justify-center gap-2 mt-12">
            {brands.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBrandIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentBrandIndex ? 'bg-blue-600 w-8' : 'bg-gray-400 w-3 hover:bg-blue-400'
                  }`}
                aria-label={`Go to brand ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
