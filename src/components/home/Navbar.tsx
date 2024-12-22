"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import Head from 'next/head'; // Import Head

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white text-gray-900 shadow-lg' : 'bg-transparent text-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 text-2xl font-bold">
              <Plane className="w-8 h-8" />
              Rome My Way
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="" className="hover:text-blue-500 transition-colors">
                Home
              </a>
              <a href="/destination" className="hover:text-blue-500 transition-colors">
                Destinations
              </a>
              <a href="about" className="hover:text-blue-500 transition-colors">
                About
              </a>
              <a href="/services" className="hover:text-blue-500 transition-colors">
                Services
              </a>
              <a href="/contact" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
              <button
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Generate
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white text-gray-900 absolute top-20 left-0 w-full shadow-lg">
              <div className="flex flex-col p-4 space-y-4">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Destinations
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Services
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  About
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Contact
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
