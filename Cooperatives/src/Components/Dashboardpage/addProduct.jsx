import React, { useState } from "react";
import "./AddProduct.css"; // Import AddProduct styles

const AddProduct = ({ onAdd }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.category && product.price && product.stock) {
      onAdd(product);
      setProduct({ name: "", category: "", price: "", stock: "", image: "" });
    }
  };

  return (
    <div className="add-product-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label>Name:<input type="text" name="name" value={product.name} onChange={handleChange} required /></label>
        <label>Category:<input type="text" name="category" value={product.category} onChange={handleChange} required /></label>
        <label>Price:<input type="number" name="price" value={product.price} onChange={handleChange} required /></label>
        <label>Stock:<input type="number" name="stock" value={product.stock} onChange={handleChange} required /></label>
        <label>Image URL:<input type="text" name="image" value={product.image} onChange={handleChange} /></label>
        <button type="submit" className="add-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
