import React, { useEffect, useRef } from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialityMenu = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scroll = () => {
            if (containerRef.current) {
                containerRef.current.scrollLeft += 1; // Slow and continuous scroll
                if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
                    containerRef.current.scrollLeft = 0;
                }
            }
        };
        
        const interval = setInterval(scroll, 30); // Adjust speed here
        return () => clearInterval(interval);
    }, []);

    return (
        <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div ref={containerRef} className='w-full overflow-hidden whitespace-nowrap flex pt-5 relative'>
                <div className='flex gap-8 min-w-max' style={{ display: 'flex' }}>
                    {[...specialityData, ...specialityData].map((item, index) => (
                        <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} 
                            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 w-auto'
                            key={index}
                        >
                            <img className='w-16 sm:w-24 mb-2 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg' src={item.image} alt={item.speciality} />
                            <p>{item.speciality}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialityMenu;
