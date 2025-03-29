import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    
   <div>
 <footer className="footer bg-white text-base-content p-10">
  <aside>
    <img   className="w-30   text-black h-20 object-contain cursor-pointer" src={assets.anlogo} alt="" />
    <p className='text-black'>
      MannPsyche Pvt. Ltd.
      <br />
      Providing reliable help since a long
    </p>
  </aside>
  <nav className='text-black'>
    <h6 className="footer-title text-black">Services</h6>
    <Link className="link link-hover" to="/doctors/NeuroMuscular Consultant">Neuromuscular consultant</Link>
    <Link className="link link-hover" to="/doctors/Dental Surgeon">Dental Surgeon</Link>
    <Link className="link link-hover" to="/doctors/Development Delays">Development Delays</Link>
    <Link className="link link-hover" to="/doctors/Psychologist">Psychologist</Link>
    <Link className="link link-hover" to="/doctors/Occupational Therapist">Occupational Therapist</Link>
    <Link className="link link-hover" to="/doctors/Head & Neck Cancer Specialist">Head & Neck Cancer Specialist</Link>
    <Link className="link link-hover" to="/doctors/Clinical Nutritionist">Clinical Nutritionist</Link>
    <Link className="link link-hover" to="/doctors/Special Educator">Special Educator</Link>
    <Link className="link link-hover" to="/doctors/Pediatrician">Pediatrician</Link>

    <Link className="link link-hover" to="/doctors/General Physician">General Physician</Link>
    <Link className="link link-hover" to="/doctors/Physical Therapy Aide">Physical Therapy Aide</Link>
    <Link className="link link-hover" to="/doctors/Cognitive behavioral therapist (CBT)">Cognitive behavioral therapist (CBT)</Link>

    






  </nav>
  <nav className='text-black'>
  <h6 className="footer-title text-black">Company</h6>
  <Link className="link link-hover" to="/About">About Us</Link>
  <Link className="link link-hover" to="/Contact">Contact</Link>
  <Link className="link link-hover" to="/BlogsPage">Blogs</Link>
  <Link className="link link-hover" to="/GalleryPage">Gallery</Link>
</nav>

  <nav className='text-black'>
    <h6 className="footer-title text-black">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
   </div>
  )
}
export default footer;