import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "Booking an appointment was so easy and hassle-free. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Priya Deshmukh",
    text: "I got connected to a great doctor within minutes. Excellent service!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Amit Patel",
    text: "Smooth experience, from booking to consultation. Very convenient!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
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
