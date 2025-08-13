"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  // Array of image URLs for the slider. You can replace these with your actual image paths.
  // Using placeholder images for demonstration.
  const slides = [
    'https://placehold.co/1200x600/ffffff/000000?text=Slide+1',
    'https://placehold.co/1200x600/ffffff/000000?text=Slide+2',
    'https://placehold.co/1200x600/ffffff/000000?text=Slide+3',
    'https://placehold.co/1200x600/ffffff/000000?text=Slide+4',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  // useEffect hook to handle automatic sliding
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(slideInterval);
  }, [currentSlide, slides.length]); // Re-run effect if currentSlide or slides length changes

  return (

    <>
    <section className="relative w-full overflow-hidden bg-white min-h-screen flex items-center justify-center rounded-lg shadow-lg">
      {/* Slider Container */}
      <div className="relative w-full  sm:h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              // Fallback for image loading errors
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x600/cccccc/333333?text=Image+Not+Found"; }}
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300
                          ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>

    {/*--------------- About US ----------- */}

    <div>
    <div className="container aboutcontainer" id="about">
      <div className="row align-items-center">
      
   {/* Left Side - Centered Image */}
   <div
          className="col-12 col-md-6 col-lg-5 d-flex justify-content-center"
          data-aos="fade-right"
        >
          <Image
            className="aboutimg"
            src="/aboutimg.webp"
            alt="About Image"
            width={800}
            height={400}
            priority
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-12 col-md-6 col-lg-7 abouttext" data-aos="fade-left">
          <h2> About Us <iconify-icon icon="material-symbols:bolt-outline"></iconify-icon></h2>
          <p>
            Our Integrator company provides solutions in IT, Networking, Security, and Computer Solutions. We have expertise in a wide range of security products. 
            Our main focus is on Network Security, Endpoint Security, and Backup Solutions for small, medium, and enterprise segment customers.<br /><br />
            We have a complete in-house expertise and a certified technical team on products like Sophos, Fortinet, TrendMicro, ESET, and many more.<br /><br />
            Our mission is to fulfill customers' requirements with the best products and services. We assist customers in choosing the best products based on sizing and price benefits. 
            Our adoption of flexible business practices has benefited our clients, enabling them to operate more efficiently and effectively.
          </p>
        </div>
      </div>
    </div>


    </div>
    </>
  );
};

export default Hero;
