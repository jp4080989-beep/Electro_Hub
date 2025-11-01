import React, { useState } from "react";

const Cart = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    paymentMethod: "Credit Card",
  });

  const [cartTotal] = useState(299.99); // Example total price

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nThank you, ${formData.name}!`);
    console.log("Order Details:", { ...formData, total: cartTotal });
  };

  return (
    <section id="cart" className="section-padding">
      <div className="container" style={{ maxWidth: "600px" }}>
        <h2 className="section-heading text-center mb-4">Checkout</h2>
        <form onSubmit={handleSubmit} className="cart-form">
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Shipping Address</label>
            <textarea
              className="form-control"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* City */}
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          {/* Payment Method */}
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>

          {/* Total */}
          <div className="mb-3">
            <h5>Total: ${cartTotal.toFixed(2)}</h5>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Place Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Cart;