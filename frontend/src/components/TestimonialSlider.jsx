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
    <div className="max-w-2xl mx-auto p-6 bg-yellow-50 rounded-lg shadow-lg">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-lg italic text-gray-700">{testimonial.text}</p>
            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
