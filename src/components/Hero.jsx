import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <section id="hero" className="py-5 bg-light text-center">
      <div className="container py-5">
        <h1 className="display-4 fw-bold mb-3">Discover the Future of Tech</h1>
        <p className="lead text-muted mb-4">
          Explore our curated selection of the latest and greatest electronic
          gadgets, from smartphones to smart home devices.
        </p>
        <a href="#products" className="btn btn-primary btn-lg">
          Explore Products
        </a>
      </div>
    </section>
  );
};

export default Hero;