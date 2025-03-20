import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    
   <div>
 <footer className="footer bg-white text-base-content p-10">
  <aside>
    <img   className="w-30   h-20 object-contain cursor-pointer" src={assets.anlogo} alt="" />
    <p>
      MannPsyche Pvt. Ltd.
      <br />
      Providing reliable help since a long
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link className="link link-hover" to="/Doctors">NeuroMotor consultant</Link>
    <Link className="link link-hover" to="/Doctors">Dental Surgeon</Link>
    <Link className="link link-hover" to="/Doctors">Development Delays</Link>
    <Link className="link link-hover" to="/Doctors">Pshychologist</Link>
  </nav>
  <nav>
  <h6 className="footer-title">Company</h6>
  <Link className="link link-hover" to="/About">About Us</Link>
  <Link className="link link-hover" to="/Contact">Contact</Link>
  <Link className="link link-hover" to="/BlogsPage">Blogs</Link>
  <Link className="link link-hover" to="/GalleryPage">Gallery</Link>
</nav>

  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
   </div>
  )
}
export default footer;