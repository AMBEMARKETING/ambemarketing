import React, { useState } from 'react';

// Modal Component
function ProductModal({ category, onClose }: { category: any; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <div
          className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={`bg-gradient-to-r ${category.color} text-white p-4 sm:p-6 sticky top-0 z-10`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="text-3xl sm:text-4xl">{category.icon}</span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold">{category.name}</h2>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">{category.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-4 sm:p-6">
            {/* Products Section */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📦</span> Featured Products ({category.products.length})
              </h3>
              <div className="space-y-3">
                {category.products.map((product: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-sm sm:text-base text-gray-800">{product.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">📍 {product.specs}</p>
                      </div>
                      {/* <p className="font-bold text-blue-600 text-sm sm:text-base whitespace-nowrap">{product.price}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands Section */}
            <div className="border-t pt-6 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>🏢</span> Partner Brands
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.brands.map((brand: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-full text-xs sm:text-sm font-semibold border border-blue-300 hover:border-blue-500 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Choose Us - Quick Benefits */}
            <div className="bg-blue-50 rounded-lg p-4 sm:p-6 border-2 border-blue-200 mb-6">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>⭐</span> Why Choose This Category?
              </h3>
              <ul className="space-y-2">
                <li className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span> 100% Authentic Products
                </li>
                <li className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span> Best Competitive Pricing
                </li>
                <li className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span> Fast & Reliable Delivery
                </li>
                <li className="text-xs sm:text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span> Complete Warranty & Support
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://wa.me/919036289719"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                <span>💬</span> WhatsApp
              </a>
              <a
                href="tel:+919036289719"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                <span>📞</span> Call
              </a>
              <a
                href={`mailto:admin@ambemarketing.in?subject=Product Inquiry - ${category.name}`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                <span>✉️</span> Email
              </a>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const productCategories = [
    {
      id: 'it',
      name: 'IT Products',
      icon: '💻',
      color: 'from-blue-400 to-blue-600',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop&q=80',
      description: 'Computers, laptops, tablets & accessories',
      products: [
        { name: 'Desktop Computers', price: 'From ₹30,000', specs: 'HP, Dell, Acer' },
        { name: 'Laptops & Notebooks', price: 'From ₹40,000', specs: 'Business to Gaming' },
        { name: 'Printers & Scanners', price: 'From ₹8,000', specs: 'Inkjet & Laser' },
        { name: 'Tablets & Accessories', price: 'From ₹15,000', specs: 'Various brands' }
      ],
      brands: ['HP', 'Dell', 'Acer', 'Lenovo', 'ASUS', 'Canon', 'Epson']
    },
    {
      id: 'electrical',
      name: 'Electrical Products',
      icon: '⚡',
      color: 'from-green-400 to-green-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&q=80',
      description: 'AC units, fans, power solutions',
      products: [
        { name: 'Air Conditioning Units', price: 'From ₹25,000', specs: '1-5 Ton capacity' },
        { name: 'Fans & Coolers', price: 'From ₹3,000', specs: 'Ceiling, floor, portable' },
        { name: 'Power UPS & Inverter', price: 'From ₹5,000', specs: 'Home & industrial' },
        { name: 'Water Heaters', price: 'From ₹4,000', specs: 'All capacities' }
      ],
      brands: ['LG', 'Samsung', 'Godrej', 'BlueStar', 'Havells', 'Usha']
    },
    {
      id: 'electronics',
      name: 'Electronics & AV',
      icon: '📺',
      color: 'from-yellow-400 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=600&h=450&fit=crop&q=80',
      description: 'TVs, displays & audio equipment',
      products: [
        { name: 'LED/OLED TVs', price: 'From ₹15,000', specs: '32" to 75"' },
        { name: 'Professional Displays', price: 'From ₹12,000', specs: 'For offices' },
        { name: 'Audio Systems', price: 'From ₹5,000', specs: 'Home & professional' },
        { name: 'Interactive Panels', price: 'From ₹80,000', specs: 'For education' }
      ],
      brands: ['Samsung', 'LG', 'Sony', 'Panasonic', 'Philips']
    },
    {
      id: 'stationery',
      name: 'Stationery & Office Supplies',
      icon: '📝',
      color: 'from-pink-400 to-pink-600',
      image: 'https://images.unsplash.com/photo-1484480974769-658ee75badd1?w=600&h=450&fit=crop&q=80',
      description: 'Paper, pens & office materials',
      products: [
        { name: 'Premium Paper Reams', price: 'From ₹400', specs: 'A4 quality paper' },
        { name: 'Pens & Writing Tools', price: 'From ₹20', specs: 'Ballpoint, gel, ink' },
        { name: 'Office Notebooks', price: 'From ₹50', specs: 'Various sizes' },
        { name: 'Filing Supplies', price: 'From ₹100', specs: 'Folders & binders' }
      ],
      brands: ['JK Paper', 'Century', 'ITC', 'Reynolds', 'Cello']
    },
    {
      id: 'medical',
      name: 'Medical & Surgical',
      icon: '🏥',
      color: 'from-cyan-400 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1631217314830-babd8fc6f89c?w=600&h=450&fit=crop&q=80',
      description: 'Medical supplies & equipment',
      products: [
        { name: 'IV Sets & Syringes', price: 'From ₹10', specs: 'Medical grade' },
        { name: 'Surgical Masks & Gloves', price: 'From ₹2', specs: 'Certified quality' },
        { name: 'Patient Monitoring', price: 'From ₹5,000', specs: 'BP, pulse oximeter' },
        { name: 'Hospital Beds', price: 'From ₹15,000', specs: 'Manual & electrical' }
      ],
      brands: ['Polymed', 'HiTech', 'Liviscare', 'Star Techno']
    },
    {
      id: 'furniture',
      name: 'Office Furniture',
      icon: '🪑',
      color: 'from-emerald-400 to-emerald-600',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop&q=80',
      description: 'Chairs, tables & storage',
      products: [
        { name: 'Executive Chairs', price: 'From ₹8,000', specs: 'Ergonomic design' },
        { name: 'Office Desks', price: 'From ₹6,000', specs: 'Wood & metal' },
        { name: 'Conference Tables', price: 'From ₹15,000', specs: 'Spacious & modern' },
        { name: 'File Cabinets', price: 'From ₹3,000', specs: 'Metal & wooden' }
      ],
      brands: ['Godrej', 'Supreme', 'Avro', 'Nilkamal']
    },
    {
      id: 'lighting',
      name: 'Lighting Solutions',
      icon: '💡',
      color: 'from-orange-400 to-orange-600',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=450&fit=crop&q=80',
      description: 'LED lights & solar solutions',
      products: [
        { name: 'LED Bulbs & Tubes', price: 'From ₹50', specs: 'All wattages' },
        { name: 'Solar Street Lights', price: 'From ₹3,000', specs: 'Complete systems' },
        { name: 'Ceiling Lights', price: 'From ₹500', specs: 'Modern designs' },
        { name: 'Emergency Lights', price: 'From ₹1,000', specs: 'Battery backup' }
      ],
      brands: ['Havells', 'Orient Electric', 'Philips', 'Syska']
    },
    {
      id: 'security',
      name: 'Security & Safety',
      icon: '🔒',
      color: 'from-gray-400 to-gray-600',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=450&fit=crop&q=80',
      description: 'Surveillance & access control',
      products: [
        { name: 'CCTV Cameras', price: 'From ₹3,000', specs: '720p to 4K' },
        { name: 'Biometric Systems', price: 'From ₹8,000', specs: 'Time & attendance' },
        { name: 'Fire Safety Equipment', price: 'From ₹1,000', specs: 'Extinguishers' },
        { name: 'Access Control', price: 'From ₹5,000', specs: 'Card & mobile' }
      ],
      brands: ['Sony', 'Canon', 'Hikvision', 'RealTime']
    },
    {
      id: 'sports',
      name: 'Sports & Cleaning',
      icon: '🏃',
      color: 'from-purple-400 to-purple-600',
      image: 'https://images.unsplash.com/photo-1518611505867-48a0ee7f8313?w=600&h=450&fit=crop&q=80',
      description: 'Sports gear & cleaning supplies',
      products: [
        { name: 'Sports Equipment', price: 'From ₹500', specs: 'Various sports' },
        { name: 'Cleaning Supplies', price: 'From ₹50', specs: 'Chemical & eco' },
        { name: 'Trash Bins', price: 'From ₹200', specs: 'All sizes' },
        { name: 'Safety Equipment', price: 'From ₹300', specs: 'Gloves & gear' }
      ],
      brands: ['Cosco', 'Yonex', '3M', 'SC Johnson']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Our Product Catalog
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2">
            Comprehensive range of premium products & services
          </p>
          <p className="text-xs sm:text-sm text-blue-600 font-semibold">
            Available through GeM (Government e-Marketplace)
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              {/* Product Category Card */}
              <div className={`bg-gradient-to-br ${category.color} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col`}>
                {/* Image Container with Overlay */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 flex-shrink-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop&q=80';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

                  {/* Category Icon Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-3xl sm:text-4xl bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-white p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 font-medium flex-1">{category.description}</p>

                  {/* Click Indicator */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 group-hover:border-blue-300 transition-colors">
                    <span className="text-xs sm:text-sm font-semibold text-blue-600">
                      {category.products.length} Products
                    </span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full group-hover:bg-blue-200 transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 sm:p-12 mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Why Choose AMBE MARKETING?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-sm sm:text-base mb-2">Authentic Products</h3>
              <p className="text-xs sm:text-sm opacity-90">100% genuine from authorized distributors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-sm sm:text-base mb-2">Competitive Pricing</h3>
              <p className="text-xs sm:text-sm opacity-90">Best market rates with bulk discounts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-sm sm:text-base mb-2">Fast Delivery</h3>
              <p className="text-xs sm:text-sm opacity-90">Quick dispatch across major cities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-sm sm:text-base mb-2">Warranty & Support</h3>
              <p className="text-xs sm:text-sm opacity-90">Complete after-sales assistance</p>
            </div>
          </div>
        </div>

        {/* GeM Procurement Process */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-12 mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">Simple Procurement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-3xl sm:text-4xl font-bold mb-4 shadow-lg">
                  1
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 text-center">Browse Catalog</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">Explore our extensive product range</p>
              </div>
              <div className="hidden md:block absolute top-20 sm:top-24 right-0 transform translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 text-white flex items-center justify-center text-3xl sm:text-4xl font-bold mb-4 shadow-lg">
                  2
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 text-center">Request Quote</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">Get instant pricing & availability</p>
              </div>
              <div className="hidden md:block absolute top-20 sm:top-24 right-0 transform translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center text-3xl sm:text-4xl font-bold mb-4 shadow-lg">
                  3
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 text-center">Order & Enjoy</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">Fast fulfillment & delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-lg p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Place Your Order?</h2>
          <p className="text-sm sm:text-base mb-6 opacity-95">
            Contact us today for quotations, bulk orders & special pricing
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/919036289719"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <span className="text-xl">💬</span> WhatsApp Chat
            </a>
            <a
              href="tel:+919036289719"
              className="flex items-center gap-2 px-5 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <span className="text-xl">📞</span> Call Now
            </a>
            <a
              href="mailto:admin@ambemarketing.in"
              className="flex items-center gap-2 px-5 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <span className="text-xl">✉️</span> Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Modal - Render if a category is selected */}
      {selectedCategory && (
        <ProductModal
          category={productCategories.find((cat) => cat.id === selectedCategory)!}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}
