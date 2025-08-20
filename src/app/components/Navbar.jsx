import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 gap-4">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-3 text-sm md:text-base text-gray-700">
          <a
            href="tel:9876543210"
            className="hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            <Image src="/icons/call.svg" alt="Call" width={16} height={16} />
            +91 9876543210
          </a>
          <a
            href="mailto:info@kwiq24.com"
            className="hover:text-blue-600 flex items-center gap-2 transition-colors"
          >
            <Image src="/icons/mail.svg" alt="Mail" width={16} height={16} />
            info@kwiq24.com
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"   // ✅ make sure logo.png exists in /public
              alt="Company Logo"
              width={140}
              height={45}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-3">
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
      </div>

      {/* Main Navigation */}
      <div className="bg-blue-600 shadow-md sticky top-0 left-0 right-0 z-50">
        <div className="container mx-auto">
          <ul className="flex justify-center gap-x-10 py-4 text-white font-medium">
            <li> <Link href="/">Home</Link> </li>
            <li><Link href="/Services">Services</Link></li>
            <li><Link href="/Product">Products</Link></li>
            <li><Link href="/Updates">Updates</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
