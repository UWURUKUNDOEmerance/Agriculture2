import React, { useState } from "react";
import "../Styles/cooperativeForm.css";

const CooperativeForm = () => {
  const [formData, setFormData] = useState({
    cooperativeName: "",
    contactPerson: "",
    location: {
      province: "",
      district: "",
      sector: "",
    },
    products: "",
    logo: null,
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location: { ...formData.location, [name]: value },
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Register Your Cooperative</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="cooperativeName" placeholder="Cooperative Name" required onChange={handleChange} />
        <input type="text" name="contactPerson" placeholder="Contact Person" required onChange={handleChange} />
        
        <div className="location">
          <input type="text" name="province" placeholder="Province" required onChange={handleLocationChange} />
          <input type="text" name="district" placeholder="District" required onChange={handleLocationChange} />
          <input type="text" name="sector" placeholder="Sector" required onChange={handleLocationChange} />
        </div>

        <textarea name="products" placeholder="List of Products" required onChange={handleChange}></textarea>
        
        <label className="file-upload">
          Upload Logo/Image:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>

        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />

        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default CooperativeForm;
