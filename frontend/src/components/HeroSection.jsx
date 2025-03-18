import React from 'react';
import { assets } from '../assets/assets'
import { NavLink } from "react-router-dom"


const HeroSection = () => {
  return (
    
    <div className='m-4'>
     <section className="bg-yellow-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Side Content */}
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold text-blue-500 mb-2 uppercase tracking-wide">
              About Us
            </h4>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
              Whatever Your Healthcare Needs, We Are Here to Help
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Welcome to Mann Psyche, a compassionate and dedicated clinic committed to enhancing your mental and physical well-being. We provide a wide range of healthcare services, including psychiatric care, dental treatments, and comprehensive mental health support.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
            We believe everyone deserves to live a healthy, fulfilling life. With our welcoming environment, state-of-the-art facilities, and empathetic approach, we ensure you receive the highest quality care.
            </p>
            {/* Beautiful Button */}
            {/* <button  className="mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition transform hover:scale-105 hover:shadow-lg">
              Discover More
            
          </button> */}
          <br></br>
             <NavLink className="mt-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md transition transform hover:scale-105 hover:shadow-lg" to="/About">
      <button>Discover More</button>
    </NavLink>

          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img
              src={assets.img14}
              alt="Doctor"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
     </div>
  );
};

export default HeroSection;
