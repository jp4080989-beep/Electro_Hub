import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Products = () => {
  const products = [
    {
      name: "Smartphone X",
      description:
        "Latest generation smartphone with AI camera and stunning display.",
      price: "$999",
      img: "https://images.unsplash.com/photo-1709528922659-8f86b0f02b9b?q=80&w=1526&auto=format&fit=crop",
    },
    {
      name: "Laptop Pro",
      description:
        "Powerful and lightweight laptop for professionals on the go.",
      price: "$1499",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1632&auto=format&fit=crop",
    },
    {
      name: "Smartwatch S",
      description:
        "Track your fitness and stay connected with this sleek smartwatch.",
      price: "$299",
      img: "https://images.unsplash.com/photo-1617625802912-cde586faf331?q=80&w=1632&auto=format&fit=crop",
    },
    {
      name: "Headphones Z",
      description:
        "Immersive sound quality with noise-cancelling technology.",
      price: "$199",
      img: "https://images.unsplash.com/photo-1674658556545-f18d4080ab6c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "Camera Alpha",
      description:
        "Professional mirrorless camera with outstanding image quality.",
      price: "$1999",
      img: "https://images.unsplash.com/photo-1621958054700-7af166501105?w=500&auto=format&fit=crop",
    },
    {
      name: "Gaming Mouse X1",
      description:
        "High-precision gaming mouse with customizable RGB lighting.",
      price: "$79",
      img: "https://images.unsplash.com/photo-1613141412501-9012977f1969?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "UltraSharp 4K Monitor",
      description:
        "Stunning 27-inch 4K monitor for creative professionals.",
      price: "$599",
      img: "https://images.unsplash.com/photo-1666771410003-8437c4781d49?q=80&w=1374&auto=format&fit=crop",
    },
    {
      name: "Immersive VR Headset",
      description:
        "Step into virtual worlds with this comfortable VR headset.",
      price: "$399",
      img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1470&auto=format&fit=crop",
    },
    {
      name: "PaperLite E-Reader",
      description:
        "Read comfortably anywhere with this glare-free e-reader.",
      price: "$129",
      img: "https://images.unsplash.com/photo-1609895314390-cb64c186466a?w=500&auto=format&fit=crop",
    },
    {
      name: "Portable BT Speaker",
      description:
        "Waterproof Bluetooth speaker with rich bass sound.",
      price: "$99",
      img: "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?q=80&w=1481&auto=format&fit=crop",
    },
    {
      name: "Pro HD Webcam",
      description:
        "Crystal clear video calls with this 1080p HD webcam.",
      price: "$69",
      img: "https://images.unsplash.com/photo-1657357092389-49b1b254c1ac?q=80&w=1530&auto=format&fit=crop",
    },
    {
      name: "1TB External SSD",
      description:
        "Fast and reliable portable storage for your files.",
      price: "$149",
      img: "https://images.unsplash.com/photo-1739742473328-eddb0e0fd3a0?q=80&w=1374&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="section-padding py-5 bg-white">
      <div className="container">
        <h2 className="section-heading text-center mb-5 fw-bold">
          Featured Products
        </h2>
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-lg-3 col-md-6 d-flex" key={index}>
              <div className="product-card w-100 card shadow-sm border-0">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted small">
                      {product.description}
                    </p>
                    <p className="price fw-bold text-primary">{product.price}</p>
                  </div>
                  <a href="#cart" className="btn btn-secondary mt-auto">
                    Buy Now
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

export default Products;