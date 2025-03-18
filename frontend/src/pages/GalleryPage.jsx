import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const images = [
    assets.img4, assets.img13, assets.img14, assets.img17, assets.img9,
    assets.img2, assets.img5, assets.img15, assets.img16, assets.img18,
    assets.img19, assets.img06, assets.img7, assets.img8, assets.img10,
    assets.img11, assets.img12, assets.img05,
];

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen p-10 bg-gradient-to-br from-[#ffde59] to-white relative">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-5xl font-bold text-black">Our Gallery</h1>
                <NavLink to={'/Doctors'}> 
                <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-md transition duration-300 hover:bg-[#f0d32e]">
                    Book a Session
                </button>
                </NavLink>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        className="overflow-hidden rounded-2xl shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setSelectedImage(src)}
                    >
                        <motion.img
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        src={selectedImage}
                        alt="Selected"
                        className="max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default GalleryPage;
