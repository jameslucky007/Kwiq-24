import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">Graphy</h2>
          <p className="mt-4 text-sm text-gray-600">
            Graphy empowers teams to transform raw data into clear, compelling
            visuals — making insights easier to share, understand, and act on.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-xl text-gray-600">
            <Link href="#"><FaXTwitter className="hover:text-black transition" /></Link>
            <Link href="#"><FaInstagram className="hover:text-black transition" /></Link>
            <Link href="#"><FaLinkedin className="hover:text-black transition" /></Link>
            <Link href="#"><FaGithub className="hover:text-black transition" /></Link>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold text-gray-900">Product</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black">Features</Link></li>
            <li><Link href="#" className="hover:text-black">Pricing</Link></li>
            <li><Link href="#" className="hover:text-black">Integrations</Link></li>
            <li><Link href="#" className="hover:text-black">Changelog</Link></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="font-semibold text-gray-900">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black">Documentation</Link></li>
            <li><Link href="#" className="hover:text-black">Tutorials</Link></li>
            <li><Link href="#" className="hover:text-black">Blog</Link></li>
            <li><Link href="#" className="hover:text-black">Support</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-gray-900">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li><Link href="#" className="hover:text-black">About</Link></li>
            <li><Link href="#" className="hover:text-black">Careers</Link></li>
            <li><Link href="#" className="hover:text-black">Contact</Link></li>
            <li><Link href="#" className="hover:text-black">Partners</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Graphy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms of Service</Link>
            <Link href="#" className="hover:text-black">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
