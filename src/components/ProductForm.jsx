import React, { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      alert("Product Name and Price are required.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: product.name,
      description: product.description || "No description available",
      price: Number(product.price),
      image:
        product.image ||
        "https://via.placeholder.com/300x200.png?text=No+Image",
    };

    onAddProduct(newProduct); // ✅ send to parent

    // ✅ reset form
    setProduct({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Add New Product</h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded bg-light border"
      >
        <div className="mb-3">
          <label className="form-label">Product Name *</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Price ($) *</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
            min="1"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Enter image link (optional)"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3">
          ✅ Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;