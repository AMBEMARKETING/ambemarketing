

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">About AMBE MARKETING</h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mb-8 sm:mb-16">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">Who We Are</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              AMBE MARKETING is a professional trading and distribution enterprise committed to providing high-quality products
              and exceptional service to our valued clients. We specialize in sourcing, procurement, and supply of premium products
              from world-renowned brands.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our expertise spans across multiple product categories, ensuring we can meet diverse client needs with professionalism
              and integrity. We are proud to be registered on GeM (Government e-Marketplace), enabling us to serve government
              organizations and public sector undertakings.
            </p>
          </div>

          <div className="bg-blue-50 p-4 sm:p-8 rounded-lg">
            <h3 className="text-lg sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">Our Mission</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-xl sm:text-2xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-gray-700">To deliver authentic, high-quality products with competitive pricing</p>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-xl sm:text-2xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-gray-700">To maintain highest standards of professionalism and customer service</p>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-xl sm:text-2xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-gray-700">To build long-term partnerships based on trust and reliability</p>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="text-blue-600 text-xl sm:text-2xl flex-shrink-0">✓</span>
                <p className="text-sm sm:text-base text-gray-700">To support government procurement initiatives through GeM platform</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Values */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 sm:p-12 rounded-lg mb-8 sm:mb-16">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl sm:text-4xl mb-3">🎯</p>
              <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-2">Integrity</h4>
              <p className="text-xs sm:text-sm text-gray-600">Honest dealings and transparent practices in all transactions</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl sm:text-4xl mb-3">⭐</p>
              <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-2">Quality</h4>
              <p className="text-xs sm:text-sm text-gray-600">Only authentic products from authorized distributors</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl sm:text-4xl mb-3">🤝</p>
              <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-2">Reliability</h4>
              <p className="text-xs sm:text-sm text-gray-600">Consistent delivery and dependable customer support</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <p className="text-3xl sm:text-4xl mb-3">💡</p>
              <h4 className="text-sm sm:text-lg font-bold text-gray-800 mb-2">Innovation</h4>
              <p className="text-xs sm:text-sm text-gray-600">Adapting to market trends and customer needs</p>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="bg-white border-2 border-gray-200 p-6 sm:p-12 rounded-lg">
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">Company Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-blue-600 mb-4">Office Location</h4>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                <strong>AMBE MARKETING</strong>
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                Ground Floor, No. 96, Sadar Patrappa Road
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Bangalore, Bengaluru (Bangalore) Urban, Karnataka 560002
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-blue-600 mb-4">Contact Information</h4>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:+919036289719" className="text-blue-600 hover:underline">+91 90362 89719</a>
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:admin@ambemarketing.in" className="text-blue-600 hover:underline">admin@ambemarketing.in</a>
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                <strong>GST No:</strong> 29AGOPU2897F1ZI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
