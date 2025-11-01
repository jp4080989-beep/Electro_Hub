import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Categories = () => {
  const categories = [
    { icon: "fa-mobile-alt", name: "Smartphones" },
    { icon: "fa-laptop", name: "Laptops" },
    { icon: "fa-headphones", name: "Audio" },
    { icon: "fa-stopwatch", name: "Wearables" },
    { icon: "fa-keyboard", name: "Accessories" },
    { icon: "fa-home", name: "Smart Home" },
  ];

  return (
    <section id="categories" className="section-padding py-5">
      <div className="container">
        <h2 className="section-heading text-center mb-5">Shop by Category</h2>
        <div className="row g-4 justify-content-center">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6 d-flex">
              <div className="category-card w-100 text-center p-3 shadow-sm rounded">
                <a href="#" className="text-decoration-none text-dark">
                  <i className={`fas ${category.icon} fa-2x mb-3`}></i>
                  <h5>{category.name}</h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;