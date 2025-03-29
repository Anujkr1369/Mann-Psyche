import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 px-4 md:px-8 border-b border-b-[#ADADAD] sticky top-0 bg-white z-50">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-30 h-20 object-contain cursor-pointer"
        src={assets.anlogo}
        alt="Logo"
      />

      {/* Main Navigation (Hidden on Mobile) */}
      <ul className="md:flex items-center gap-5 font-medium hidden text-black">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors/NeuroMuscular%20Consultant">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
        <NavLink to="/BlogsPage">
          <li className="py-1">BLOGS</li>
        </NavLink>
        <NavLink to="/GalleryPage">
          <li className="py-1">GALLERY</li>
        </NavLink>
      </ul>

      {/* Book Appointment & Account Buttons (Visible on all screens) */}
      <div className="flex items-center gap-4">
        <motion.button
          id="book-appointment-btn"
          className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg hover:bg-blue-700"
          onClick={() => navigate("/Doctors")}
          animate={{ y: [30, -30, 30] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: .5 }}
        >
          Book Appointment
        </motion.button>

        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="User" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-black px-6 py-2 rounded-full font-medium hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* ---- Mobile Menu ---- */}
      {showMenu && (
        <div className="md:hidden fixed w-full right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all px-5">
          <div className="flex items-center justify-between py-6">
            <img src={assets.anlogo} className="w-36" alt="Logo" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7 cursor-pointer"
              alt="Close"
            />
          </div>

          {/* Mobile Nav Items */}
          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p>HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors/NeuroMuscular%20Consultant">
              <p>ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p>ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p>CONTACT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/BlogsPage">
              <p>BLOGS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/GalleryPage">
              <p>GALLERY</p>
            </NavLink>
          </ul>

          {/* Mobile "Book Appointment" & "Create Account" Buttons */}
          <div className="flex flex-col items-center mt-5 gap-4">
            <motion.button
              id="book-appointment-btn"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg hover:bg-blue-700 w-full max-w-xs"
              onClick={() => {
                navigate("/Doctors");
                setShowMenu(false);
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 1 }}
            >
              Book Appointment
            </motion.button>

            {!token && (
              <button
                onClick={() => {
                  navigate("/login");
                  setShowMenu(false);
                }}
                className="bg-primary text-black px-6 py-2 rounded-full font-medium w-full max-w-xs"
              >
                Create Account
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
