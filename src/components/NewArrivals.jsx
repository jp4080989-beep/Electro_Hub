import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewArrivals = () => {
  const products = [
    {
      title: "Tablet Air",
      img: "https://images.unsplash.com/photo-1636614178501-e03f25a87516?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Ultra-thin tablet perfect for creativity and entertainment.",
      price: "$599",
    },
    {
      title: "Smart Speaker Mini",
      img: "https://images.unsplash.com/photo-1640826808046-6d4d4faa30c8?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Compact smart speaker with powerful sound and voice assistant.",
      price: "$49",
    },
    {
      title: "NextGen Console",
      img: "https://images.unsplash.com/photo-1612801799511-1ee0705f3212?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Experience next-level gaming with stunning graphics and speed.",
      price: "$499",
    },
    {
      title: "Camera Drone Pro",
      img: "https://images.unsplash.com/photo-1543235074-5e7ce5446433?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Capture breathtaking aerial shots with this professional drone.",
      price: "$1199",
    },
    {
      title: "Smart Thermostat E",
      img: "https://images.unsplash.com/photo-1636569608385-58efc32690ea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Save energy and control your home temperature remotely.",
      price: "$169",
    },
    {
      title: "AirBuds Lite",
      img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "True wireless earbuds with long battery life and great sound.",
      price: "$89",
    },
    {
      title: "RoboClean X5",
      img: "https://images.unsplash.com/photo-1603618090561-412154b4bd1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Smart robot vacuum with mapping technology for efficient cleaning.",
      price: "$299",
    },
    {
      title: "Home Hub Display",
      img: "https://images.unsplash.com/photo-1650682009477-52fd77302b78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Control your smart home, watch videos, and more.",
      price: "$129",
    },
    {
      title: "Pocket Projector",
      img: "https://images.unsplash.com/photo-1528395874238-34ebe249b3f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Portable mini projector for movies on the go.",
      price: "$249",
    },
    {
      title: "FitTrack Band 5",
      img: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Monitor your activity, sleep, and heart rate 24/7.",
      price: "$39",
    },
    {
      title: "ActionCam Go",
      img: "https://images.unsplash.com/photo-1604942177421-df466b7410f6?q=80&w=1401&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Rugged and waterproof action camera for adventures.",
      price: "$279",
    },
    {
      title: "Secure Smart Lock",
      img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      desc: "Keyless entry and remote access control for your home.",
      price: "$199",
    },
  ];

  return (
    <section id="new-arrivals" className="section-padding py-5 bg-light">
      <div className="container">
        <h2 className="section-heading text-center mb-5">New Arrivals</h2>
        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-lg-3 col-md-6 d-flex">
              <div className="product-card w-100 card shadow-sm border-0">
                <img
                  src={product.img}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.desc}</p>
                    <p className="price fw-bold">{product.price}</p>
                  </div>
                  <a href="#cart" className="btn btn-secondary mt-auto">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;