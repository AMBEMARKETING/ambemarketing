import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavigationHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <div className="bg-white border-b-2 border-blue-600 shadow-md sticky top-12 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-4 flex justify-between items-center gap-2 sm:gap-4">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-fit">
          <img
            src="/logo.jpeg"
            alt="Ambe Marketing Logo"
            className="h-10 sm:h-14 w-auto transition-transform duration-300 hover:scale-110"
          />
          <div className="hidden sm:block">
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-800">AMBE MARKETING</h1>
            <p className="text-xs lg:text-sm text-blue-600 font-semibold">GST: 29AGOPU2897F1ZI</p>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex gap-1 lg:gap-4 items-center justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group py-3 px-4 lg:px-5 rounded-lg transition-all duration-300 font-semibold text-sm lg:text-base whitespace-nowrap ${isActive(link.path)
                  ? 'text-blue-600 border-b-3 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
                }`}
              title={link.label}
            >
              {link.label}
              {!isActive(link.path) && (
                <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="flex flex-col bg-white border-t-2 border-blue-600">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 border-l-4 transition-all duration-300 text-sm font-semibold ${isActive(link.path)
                  ? 'bg-blue-50 text-blue-600 border-l-blue-600'
                  : 'text-gray-700 border-l-transparent hover:bg-gray-50 hover:text-blue-600 hover:border-l-blue-300'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}