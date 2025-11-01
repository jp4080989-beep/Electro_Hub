import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-5 bg-dark text-light">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <h5 style={{ color: "var(--primary-color)" }}>
              <FaBolt className="me-2" /> ElectroHub
            </h5>
            <p>
              Your one-stop shop for the latest electronics and gadgets. Quality
              products, great prices.
            </p>
            <p>
              <FaMapMarkerAlt className="me-2" />
              123 Tech Street, Silicon Valley, CA 94000
            </p>
            <p>
              <FaPhone className="me-2" /> +1 234 567 890
            </p>
            <p>
              <FaEnvelope className="me-2" /> support@electrohub.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#hero" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#products" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#categories" className="text-light text-decoration-none">Categories</a></li>
              <li><a href="#about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#testimonials" className="text-light text-decoration-none">Testimonials</a></li>
              <li><a href="#" className="text-light text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Smartphones</a></li>
              <li><a href="#" className="text-light text-decoration-none">Laptops</a></li>
              <li><a href="#" className="text-light text-decoration-none">Smartwatches</a></li>
              <li><a href="#" className="text-light text-decoration-none">Audio Devices</a></li>
              <li><a href="#" className="text-light text-decoration-none">Accessories</a></li>
              <li><a href="#" className="text-light text-decoration-none">Smart Home</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-lg-3 col-md-6">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a href="#" aria-label="Facebook" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="text-light fs-5"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="text-light fs-5"><FaLinkedinIn /></a>
              <a href="#" aria-label="YouTube" className="text-light fs-5"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center mt-5 border-top pt-3">
          © {currentYear} <strong>ElectroHub</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;