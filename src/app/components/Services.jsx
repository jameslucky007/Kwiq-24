import { Link } from "lucide-react";
import React from "react";
// Removed react-icons/fa import to resolve the compilation error.
// We will use inline SVG for the arrow icon and suggest alternatives for others.

// Define the service data
const allServices = [
  {
    title: "Graphic Design",
    desc: "Transform your company’s first impression with a logo that truly represents your business and its values.",
    // icon: <FaPaintBrush size={28} className="text-blue-500" />, // Icon removed, suggest adding custom SVG or emoji
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z"/>
        </svg>
    ),
  },
  {
    title: "Website Design",
    desc: "Your website is your business’s digital face. Let’s make it an unforgettable one with user-centered designs.",
    // icon: <FaGlobe size={28} className="text-blue-500" />, // Icon removed
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z"/>
        </svg>
    ),
  },
  {
    title: "App Design",
    desc: "Impress your mobile audience with a user-friendly app that is visually appealing and engaging.",
    // icon: <FaMobileAlt size={28} className="text-blue-500" />, // Icon removed
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z"/>
        </svg>
    ),
  },
  {
    title: "Marketing",
    desc: "From strategy creation to execution, we provide comprehensive marketing services to help your business thrive.",
    // icon: <FaBullhorn size={28} className="text-blue-500" />, // Icon removed
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V9h2v8zm4 0h-2V9h2v8z"/>
        </svg>
    ),
  },
];

// Inline SVG for the arrow icon
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);


// Reusable component for a service section
const ServiceSection = ({ title, services, sectionId }) => (
  <div id={sectionId} className="mb-20"> {/* Added mb-20 for spacing between sections */}
    <h2 className="text-2xl md:text-2xl font-bold mb-8 text-black text-left flex items-center ml-6 sm:ml-12 md:ml-20 lg:ml-32">
      <ArrowRightIcon /> {/* Used inline SVG for Arrow Icon */}
      {title} <span className="text-blue-500"> Services</span>
    </h2>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-start bg-white"
        >
          <div className="mb-4">{service.icon}</div> {/* Placeholder for original icons */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
          <p className="text-gray-600 text-sm text-left">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        We offer various <span className="text-blue-500">Services</span>
      </h2>
      {/* Centered HR with specific width and color */}
      <hr className="border-t-2 border-gray-400 w-24 mx-auto mb-16" />

      {/* Development Services Section */}
      <ServiceSection
        title="Development"
        services={allServices}
        sectionId="development-services"
      />

      {/* Creative Services Section */}
      <ServiceSection
        title="Creative"
        services={allServices}
        sectionId="creative-services"
      />

      {/* Digital Services Section */}
      <ServiceSection
        title="Digital"
        services={allServices}
        sectionId="digital-services"
      />

      {/* Know More Button */}
      <div className="mt-12">
       <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Know More
        </button> 
      
      </div>
    </section>
  );
};

export default Services;
