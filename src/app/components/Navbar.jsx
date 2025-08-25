'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Product", label: "Products" },
    { href: "/Services", label: "Services" },
    { href: "/Updates", label: "Updates" },
    { href: "/Blog", label: "Blog" }
  ];

  return (
    <nav className="bg-white shadow-sm">
      {/* Top Section */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex flex-col sm:flex-row gap-3 text-sm text-gray-700">
            <a
              href="tel:9876543210"
              className="hover:text-blue-600 flex items-center gap-2 transition-colors"
            >
              <Phone size={16} />
              +91 9876543210
            </a>
            <a
              href="mailto:info@kwiq24.com"
              className="hover:text-blue-600 flex items-center gap-2 transition-colors"
            >
              <Mail size={16} />
              info@kwiq24.com
            </a>
          </div>

          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center lg:flex-none">
            <Link href="/" aria-label="Home">
              <Image
                src="/logo.svg"   
                alt="Company Logo"
                width={140}
                height={45}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Social Media - Hidden on mobile, Hamburger on mobile */}
          <div className="flex items-center gap-3">
            {/* Social Media - Desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://facebook.com/kwiq24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-blue-50 transition"
              >
                <Image src="/icons/facebook.svg" alt="Facebook" width={22} height={22} />
              </a>
              <a
                href="https://instagram.com/kwiq56"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-pink-50 transition"
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={22} height={22} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full hover:bg-green-50 transition"
              >
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
              </a>
            </div>

            {/* Hamburger Menu - Mobile only */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Desktop */}
      <div className="bg-blue-600 shadow-md sticky top-0 left-0 right-0 z-50 hidden lg:block">
        <div className="container mx-auto">
          <ul className="flex justify-center gap-x-10 py-4 text-white font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href}
                  className="hover:text-blue-200 transition-colors duration-200 px-2 py-1 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        />
        
        {/* Slide-in Menu */}
        <div className="absolute right-0 top-0 h-full w-80 max-w-sm bg-white shadow-xl">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Contact Info - Mobile */}
          <div className="px-4 py-4 border-b border-gray-200">
            <div className="space-y-3">
              <a
                href="tel:9876543210"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
                <span>+91 9876543210</span>
              </a>
              <a
                href="mailto:info@kwiq24.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                <span>info@kwiq24.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={toggleMenu}
                    className="block py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media - Mobile */}
          <div className="px-4 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Follow Us</p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/kwiq24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full hover:bg-blue-50 transition"
              >
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a
                href="https://instagram.com/kwiq56"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full hover:bg-pink-50 transition"
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full hover:bg-green-50 transition"
              >
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;