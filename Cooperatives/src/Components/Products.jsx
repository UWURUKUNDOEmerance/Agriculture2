import React, { useState } from "react";

import "../Styles/Product.css"

const productData = [
  {
    id: 1,
    name: "Organic Bananas",
    description: "Fresh and naturally grown bananas from local farms.",
    price: "1000 Rwf/kg",
    category: "Agriculture",
    location: "Kigali",
    seller: "Green Harvest Cooperative",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Fresh Milk",
    description: "Pure, high-quality dairy milk from local farmers.",
    price: "1200 Rwf/liter",
    category: "Dairy",
    location: "Huye",
    seller: "Dairy Delight Cooperative",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Handmade Basket",
    description: "Beautiful handwoven baskets made by skilled artisans.",
    price: "5000 Rwf",
    category: "Handicrafts",
    location: "Musanze",
    seller: "Handicraft Hub",
    image: "https://via.placeholder.com/150"
  }
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const filteredProducts = productData.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category) &&
    (location === "" || product.location === location)
  );

  return (
    <div className="products-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover High-Quality Products from Trusted Cooperatives</h1>
        <p>Connecting you to fresh produce, dairy, and handmade goods.</p>
        <button className="cta-button">Explore Products</button>
      </section>

      {/* Filters Section */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Dairy">Dairy</option>
          <option value="Handicrafts">Handicrafts</option>
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Kigali">Kigali</option>
          <option value="Huye">Huye</option>
          <option value="Musanze">Musanze</option>
        </select>
      </div>

      {/* Product Listing */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <p className="seller">{product.seller} - {product.location}</p>
              <button className="view-more">View Details</button>
            </div>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>List Your Products Today!</h2>
        <button className="cta-button">Register as a Seller</button>
      </div>
    </div>
  );
};

export default Products;