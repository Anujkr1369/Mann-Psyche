import React from 'react'
import { assets } from '../assets/assets'
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const iconStyle = "w-6 h-6 text-[#262626] transition-transform hover:scale-110";
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Rz C1 Patel Garden , Mahila Park <br /> Neat Old Palam Road New Delhi-110078 </p>
          <p className=' text-gray-500'>Tel: 9289102955 <br /> Email: infomannpsyche@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT MANN PSYCHE</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Call Us: 9289102955</button>
        </div>
        <div className="flex gap-6 justify-center py-6">
      <a href="https://www.instagram.com/mannpsyche?igsh=MW1icDdkMDVndHo3aA==" target="_blank" rel="noopener noreferrer">
        <Instagram className={iconStyle} />
      </a>
      {/* <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <Twitter className={iconStyle} />
      </a> */}
      <a href="https://www.linkedin.com/company/mann-psyche-india/" target="_blank" rel="noopener noreferrer">
        <Linkedin className={iconStyle} />
      </a>
      <a href="https://www.facebook.com/share/14rbdNMB2bE/" target="_blank" rel="noopener noreferrer">
        <Facebook className={iconStyle} />
      </a>
      <a href="https://youtube.com/@mannpsyche?si=kwVl7WUhWm2RjbtE" target="_blank" rel="noopener noreferrer">
        <Youtube className={iconStyle} />
      </a>
    </div>
      </div>

    </div>
  )
}

export default Contact
