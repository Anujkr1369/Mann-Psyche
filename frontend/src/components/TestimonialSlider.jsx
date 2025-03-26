import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { assets } from '../assets/assets'

const testimonials = [
  {
    name: "Adarsh",
    text: "Dr Saurabh is truly empathetic and professional. He created a safe space for me to explore my feelings, and his advice was both practical and compassionate",
    image: assets.adarshreview,
  },
  {
    name: "Srinivas Reddy",
    text: `Dr. Saurabh is an excellent psychologist. His guidance has been life-changing

Highly professional and compassionate. Mann Psyche is the best place for mental health support

A great listener and advisor. I feel much better after every session with Dr. Saurabh

The best psychologist in Dwarka! Helped me manage stress and anxiety effectively

Dr. Saurabh provides a safe and supportive environment.
Highly recommend Mann Psyche`,
    image: assets.SrinivasReview,
  },
  {
    name: "Rahika Singh",
    text: "i had an amazing Dr. Saurabh his warm approach and insightfull guidance helped me over come my anxiety and overcome my confident",
    image: assets.RahikaSinghReview,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-x-hidden flex justify-center bg-yellow-50 py-6">
      <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg sm:max-w-xl md:max-w-3xl lg:max-w-4xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 sm:w-24 sm:h-24"
              />
              <p className="text-base sm:text-lg italic text-gray-700 px-4">{testimonial.text}</p>
              <h3 className="mt-3 text-lg sm:text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
