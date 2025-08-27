"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const page = () => {
  return (
    <>
         <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-6 rounded-2xl shadow-2xl bg-gray-900/60 backdrop-blur-md border border-gray-700"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <Clock size={64} className="text-yellow-400" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg outline-none text-gray-900"
          />
          <button className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition">
            Notify Me
          </button>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default page