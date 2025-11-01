import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import ProductForm from "../components/ProductForm";
import NewArrivals from "../components/NewArrivals";
import Categories from "../components/Categories";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <ProductForm />
      <NewArrivals />
      <Categories />
      <About />
      <Testimonials />
      <Cart />
      <Footer />
    </>
  );
};

export default HomePage;