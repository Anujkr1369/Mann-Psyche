import React from 'react'
import { assets } from '../assets/assets'
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';
import { motion } from "framer-motion";


const Contact = () => {
  const iconStyle = "w-6 h-6 text-[#262626] transition-transform hover:scale-110";
  return (
    <div className='bg-yellow-50'>

      <div className='bg-yellow-50 text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
       
      <div className='bg-yellow-50 my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>Rz C1 Patel Garden , Mahila Park <br /> Near Old Palam Road New Delhi-110078 </p>
          <p className=' text-gray-500'>Tel: 9289102955 / 9643122455 <br /> Landline: +911145601304  <br /> Email: infomannpsyche@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT MANN PSYCHE</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-gradient-to-r from-red-500 to-pink-500 hover:text-white transition-all duration-500'>Call Us: 9289102955</button>
          <a 
  href="https://www.google.com/maps/place/mann+psyche/@28.6160654,77.0258506,17z/data=!4m16!1m9!3m8!1s0x390d05dad9f84877:0x8327770e38c0de54!2smann+psyche!8m2!3d28.6160607!4d77.0284255!9m1!1b1!16s%2Fg%2F11y9bjnyh_!3m5!1s0x390d05dad9f84877:0x8327770e38c0de54!8m2!3d28.6160607!4d77.0284255!16s%2Fg%2F11y9bjnyh_?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D" 
  target="_blank" 
  rel="noopener noreferrer"
  className='border border-black px-8 py-4 text-sm hover:bg-gradient-to-r from-red-500 to-pink-500 hover:text-white transition-all duration-500'
>
  Visit Us
</a>
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
    

      <div className="flex justify-center items-center w-full mt-8">
      <motion.div 
  className="w-full flex justify-center items-center mt-0 pb-8"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <iframe
    className="w-full max-w-2xl h-64 rounded-lg shadow-md"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.456900190258!2d77.02585057520206!3d28.616065384828886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dad9f84877%3A0x8327770e38c0de54!2smann%20psyche!5e0!3m2!1sen!2sin!4v1742907000208!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</motion.div>


</div>


    </div>
  )
}

export default Contact
