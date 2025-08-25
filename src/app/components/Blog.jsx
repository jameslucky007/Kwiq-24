'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lock, Shield, Users } from 'lucide-react';

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(5); // Start from middle set
  const slidesToShow = 3;

  const blogPosts = [
    {
      id: 1,
      image: '/api/placeholder/400/250',
      icon: <Lock className="w-12 h-12 text-blue-500" />,
      title: 'Red Secure VAPT & Cybersecurity Services',
      description: 'Cyber criminals are continuously targeting enterprise applications, mobile applications and APIs.',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      image: '/api/placeholder/400/250',
      icon: <Shield className="w-12 h-12 text-teal-500" />,
      title: 'Cyber Security, VAPT & Infra Solutions',
      description: 'We have expertise in a wide range of security products like Firewall / UTM, Endpoint Security.',
      bgColor: 'bg-gray-100'
    },
    {
      id: 3,
      image: '/api/placeholder/400/250',
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: 'Best Security Practices designed to beat systems before attackers do it',
      description: 'Cybersecurity is a shared responsibility and it boils down to this: In Cybersecurity.',
      bgColor: 'bg-gray-800'
    },
    {
      id: 4,
      image: '/api/placeholder/400/250',
      icon: <Lock className="w-12 h-12 text-purple-500" />,
      title: 'Advanced Threat Detection & Response',
      description: 'Implement cutting-edge solutions to detect and respond to advanced persistent threats.',
      bgColor: 'bg-purple-100'
    },
    {
      id: 5,
      image: '/api/placeholder/400/250',
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cloud Security Architecture',
      description: 'Secure your cloud infrastructure with our comprehensive security architecture services.',
      bgColor: 'bg-green-100'
    }
  ];

  // Create infinite scroll by duplicating posts
  const extendedPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  // Handle infinite scroll transitions
  useEffect(() => {
    if (currentSlide >= blogPosts.length * 2) {
      setTimeout(() => {
        setCurrentSlide(blogPosts.length);
      }, 500);
    } else if (currentSlide <= 0) {
      setTimeout(() => {
        setCurrentSlide(blogPosts.length);
      }, 500);
    }
  }, [currentSlide, blogPosts.length]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Latest Blogs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest insights and trends in cybersecurity
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-lg">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${
                currentSlide <= 0 || currentSlide >= blogPosts.length * 2 ? 'transition-none' : ''
              }`}
              style={{ 
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {extendedPosts.map((post, index) => (
                <div
                  key={`${post.id}-${Math.floor(index / blogPosts.length)}`}
                  className="px-3 flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    {/* Image Section */}
                    <div className={`${post.bgColor} p-8 relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/20 rounded-full"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        {post.icon}
                        <div className="mt-4 w-24 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-16 h-10 bg-white/30 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index + blogPosts.length)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  Math.abs((currentSlide - blogPosts.length) % blogPosts.length) === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;