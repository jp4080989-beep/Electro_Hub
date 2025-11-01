import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section id="about" className="section-padding py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="About ElectroHub"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <h2 className="section-heading text-start mb-4">About ElectroHub</h2>
            <p>
              ElectroHub was founded with a passion for technology and a mission
              to bring the latest electronic innovations directly to you. We
              believe in quality, affordability, and exceptional customer
              service.
            </p>
            <p>
              Our curated selection features top brands and cutting-edge
              gadgets, ensuring you always have access to the best tech on the
              market. We're more than just a retailer; we're your trusted
              partner in the world of electronics.
            </p>
            <a href="#" className="btn btn-primary mt-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;