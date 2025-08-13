import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-sm">
        {/* Top Navbar Section: Contact, Logo, Social Media */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center py-3 px-4">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm md:text-base text-gray-700 order-2 md:order-1 justify-center md:justify-start">
            <a
              href="tel:9876543210"
              className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2"
            >
              <Image
                src="/icons/call.svg"
                alt="Call icon"
                width={16}
                height={16}
              />
              +91 9876543210
            </a>
            <a
              href="mailto:info@kwiq24.com"
              className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-2"
            >
              <Image
                src="/icons/mail.svg"
                alt="Mail icon"
                width={16}
                height={16}
              />
              info@kwiq24.com
            </a>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center md:justify-center py-4 md:py-0 order-1 md:order-2">
            {/* IMPORTANT: Update with your logo path. Ensure the file exists in your public directory. */}
            <Link href="/" aria-label="Home">
              <Image
                src="/path/to/your/logo.png" // <--- REMEMBER TO UPDATE THIS PATH
                alt="Company Logo"
                width={120} // Adjust width as needed
                height={40} // Adjust height as needed
              />
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center md:justify-end gap-3 order-3 md:order-3">
            <a
              href="https://facebook.com/kwiq24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="block p-2 rounded-full hover:bg-blue-50 transition-colors group"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://instagram.com/kwiq56"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="block p-2 rounded-full hover:bg-pink-50 transition-colors group"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="block p-2 rounded-full hover:bg-green-50 transition-colors group"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Main Navigation Menus */}
        <div className="bg-blue-600 shadow-md">
          <div className="container mx-auto">
            <ul className="flex flex-wrap justify-center md:content-center gap-x-8 gap-y-2 py-4 text-white font-medium">
              <li>
                <Link href="/" className=" transition-colors  hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/updates" className=" transition-colors  hover:underline">
                 Services
                </Link>
              </li>
              <li>
                <Link href="/products" className=" transition-colors  hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className=" transition-colors  hover:underline">
                Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" transition-colors  hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className=" transition-colors  hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
