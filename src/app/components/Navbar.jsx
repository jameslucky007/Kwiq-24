'use client'
import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

const SocialIcon = ({ href, label, icon: Icon, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`p-2.5 rounded-full text-white ${colorClass} transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-2`}
  >
    <Icon size={18} className="text-white" />
  </a>
);

const Image = (props) => (
  <img
    src={props.src || "logo.svg"}
    alt={props.alt || "logo"}
    width={props.width || 160}
    height={props.height || 50}
    style={{ objectFit: "contain", display: "block" }}
  />
);

const Link = (props) => <a {...props}>{props.children}</a>;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/Product", label: "Products" },
    { href: "/Services", label: "Services" },
    { href: "/Updates", label: "Updates" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
  ];

  const brandColor = "text-blue-600";
  const brandBgColor = "bg-blue-600";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-sans">
      {/* Top Bar */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          hideTopBar ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-3">
            <div className="hidden lg:flex items-center gap-8 text-gray-700 font-inter">
              <a
                href="tel:918920567481"
                className="flex items-center gap-2 hover:text-blue-700 transition-colors text-base font-semibold"
              >
                <Phone size={20} className={brandColor} />
                <span className="tracking-wide text-gray-800">+91 89205 67481</span>
              </a>
              <a
                href="mailto:info@kwiq24.com"
                className="flex items-center gap-2 hover:text-blue-700 transition-colors text-base font-semibold"
              >
                <Mail size={20} className={brandColor} />
                <span className="text-gray-800">info@kwiq24.com</span>
              </a>
            </div>

            <div className="flex-1 flex justify-center lg:justify-start lg:w-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <Link href="/" aria-label="Home">
                <Image src="/logo.svg" alt="Company Logo" width={160} height={50} />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2">
                <SocialIcon href="https://facebook.com/kwiq24" label="Facebook" icon={Facebook} colorClass="bg-blue-700" />
                <SocialIcon href="https://instagram.com/kwiq56" label="Instagram" icon={Instagram} colorClass="bg-pink-600" />
                <SocialIcon href="https://wa.me/919876543210" label="WhatsApp" icon={MessageCircle} colorClass="bg-green-500" />
              </div>

              <button
                onClick={toggleMenu}
                className={`lg:hidden p-2 rounded-lg ${brandBgColor} text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`shadow-inner hidden lg:block border-t border-blue-500/30 ${brandBgColor}`}>
        <div className="container mx-auto">
          <ul className="flex justify-center gap-x-12 py-3 text-white font-medium text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full py-1"
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
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" onClick={toggleMenu} />

        <div className="absolute right-0 top-0 h-full w-72 max-w-xs bg-white shadow-2xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Image src="/logo.svg" alt="Company Logo" width={120} height={35} />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          <ul className="py-6 space-y-2 border-b border-gray-100">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="block py-3 text-lg text-gray-700 hover:text-white hover:bg-blue-600 rounded-lg px-4 transition-all duration-200 font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-6 space-y-4">
            <p className="text-base font-semibold text-gray-800">Get in Touch</p>
            <a
              href="tel:918920567481"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors font-medium text-base"
            >
              <Phone size={20} className={brandColor} />
              <span>+91 89205 67481</span>
            </a>
            <a
              href="mailto:info@kwiq24.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors font-medium text-base"
            >
              <Mail size={20} className={brandColor} />
              <span>info@kwiq24.com</span>
            </a>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-600 mb-3">Follow Us</p>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://facebook.com/kwiq24" label="Facebook" icon={Facebook} colorClass="bg-blue-700" />
              <SocialIcon href="https://instagram.com/kwiq56" label="Instagram" icon={Instagram} colorClass="bg-pink-600" />
              <SocialIcon href="https://wa.me/919876543210" label="WhatsApp" icon={MessageCircle} colorClass="bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
