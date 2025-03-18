import React from 'react'
import { assets } from '../assets/assets'
import TestimonialSlider from "../components/TestimonialSlider";

const About = () => {
  return (
    <div className=''>
        <div className='bg-yellow-50'>
      <div className='bg-yellow-50 text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='bg-yellow-50 my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Mann Psyche, a compassionate and dedicated clinic committed to enhancing your mental and physical well-being. We provide a wide range of healthcare services, including Psychological care, dental treatments, and comprehensive mental health support.</p>
          <p>At Mann Psyche, our experienced team of skilled psychiatrists, dentists, and mental health professionals work together to deliver personalized care designed to meet your unique needs. Whether you are seeking therapy, dental care, or specialized treatment for mental health challenges, we are here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We believe everyone deserves to live a healthy, fulfilling life. With our welcoming environment, state-of-the-art facilities, and empathetic approach, we ensure you receive the highest quality care.</p>
          <b>Your wellness is our priority. Let us help you find the right path to healing and happiness.</b>
        </div>
      </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EASY ACCESS: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
     <TestimonialSlider/>
    </div>
    
  )
}

export default About
