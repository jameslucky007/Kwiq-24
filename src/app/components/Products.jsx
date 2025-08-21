'use client'  
import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      category: "DRIVING LICENCE",
      title: "Andhra Pradesh Driving Licence PVC Card smart card Print",
      price: "₹50.00",
      image: ""
    },
    {
      id: 2,
      category: "DRIVING LICENCE", 
      title: "Assam Driving License",
      price: "₹50.00",
      image: ""
    },
    {
      id: 3,
      category: "DRIVING LICENCE",
      title: "Assam Vehicle Registration Certificate (RC)",
      price: "₹50.00", 
      image: ""
    },
    {
      id: 4,
      category: "DRIVING LICENCE",
      title: "Bihar Driving License",
      price: "₹50.00",
      image: ""
    },
    {
      id: 5,
      category: "DRIVING LICENCE",
      title: "Delhi Driving License PVC Card",
      price: "₹50.00",
      image: ""
    },
    {
      id: 6,
      category: "DRIVING LICENCE",
      title: "Gujarat Driving License Smart Card",
      price: "₹50.00",
      image: ""
    },
    {
      id: 7,
      category: "DRIVING LICENCE", 
      title: "Karnataka Driving License",
      price: "₹50.00",
      image: ""
    },
    {
      id: 8,
      category: "DRIVING LICENCE",
      title: "Maharashtra Driving License",
      price: "₹50.00",
      image: ""
    },
 
  ];

  const handleBuyNow = (productId) => {
    console.log(`Buy now clicked for product ${productId}`);
    // Add your buy now logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-600">Choose from our wide range of driving license services</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group mb-10"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 leading-5 min-h-[2.5rem]">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 ml-1">GST</span>
                  </div>
                </div>

                <button
                  onClick={() => handleBuyNow(product.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;