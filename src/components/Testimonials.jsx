import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Amit Sharma",
    text: "ElectroHub offers amazing gadgets at great prices! My shopping experience was smooth and fast.",
  },
  {
    name: "Priya Verma",
    text: "I love the quality of the products. The delivery was quick, and customer service was fantastic!",
  },
  {
    name: "Ravi Patel",
    text: "Best online store for electronics! The variety and prices are unbeatable.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, text } = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="section-padding py-5 bg-light">
      <div className="container text-center">
        <h2 className="section-heading mb-5">What Our Customers Say</h2>

        {/* Testimonial Slider */}
        <div className="testimonial-slider position-relative">
          <div className="slider-content p-4 mx-auto" style={{ maxWidth: "700px" }}>
            <p className="fs-5 fst-italic text-muted">"{text}"</p>
            <h5 className="mt-3 fw-bold">- {name}</h5>
          </div>

          {/* Slider Controls */}
          <div className="slider-controls mt-4 d-flex justify-content-center gap-3">
            <button
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              className="btn btn-outline-secondary rounded-circle"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              className="btn btn-outline-secondary rounded-circle"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;