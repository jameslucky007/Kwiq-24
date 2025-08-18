import React from "react";
import { FaPenNib, FaCode, FaGlobe, FaMobileAlt, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Branding",
    desc: "Creating an identity that is unique, consistent and captivating. Let us craft a brand story that resonates with your audience.",
    icon: <FaPenNib size={28} className="text-blue-500" />,
  },
  {
    title: "Logo Design",
    desc: "Transform your company’s first impression with a logo that truly represents your business and its values.",
    icon: <FaPaintBrush size={28} className="text-blue-500" />,
  },
  {
    title: "Development",
    desc: "Customized development solutions that are visually stunning, user-friendly, and seamlessly functional.",
    icon: <FaCode size={28} className="text-blue-500" />,
  },
  {
    title: "Website Design",
    desc: "Your website is your business’s digital face. Let’s make it an unforgettable one with user-centered designs.",
    icon: <FaGlobe size={28} className="text-blue-500" />,
  },
  {
    title: "App Design",
    desc: "Impress your mobile audience with a user-friendly app that is visually appealing and engaging.",
    icon: <FaMobileAlt size={28} className="text-blue-500" />,
  },
  {
    title: "Marketing",
    desc: "From strategy creation to execution, we provide comprehensive marketing services to help your business thrive.",
    icon: <FaBullhorn size={28} className="text-blue-500" />,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Transform your <span className="text-blue-500">business</span> with our services
      </h2>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-full mt-4 hover:bg-green-700 transition">
        Book a call →
      </button>

      {/* Services Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-start"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm text-left">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
