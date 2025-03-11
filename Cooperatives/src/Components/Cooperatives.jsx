// import React from "react";
import React, { useState } from "react";


import "../Styles/Cooperatives.css";

const cooperativesData = [
  { id: 1, name: "Green Harvest", category: "Agriculture", location: "Kigali", logo: "https://via.placeholder.com/80" },
  { id: 2, name: "Dairy Delight", category: "Dairy", location: "Huye", logo: "https://via.placeholder.com/80" },
  { id: 3, name: "Handicraft Hub", category: "Handicrafts", location: "Musanze", logo: "https://via.placeholder.com/80" },
];

const Cooperatives = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredCooperatives = cooperativesData.filter(coop =>
    coop.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || coop.category === category)
  );

  return (
    <div className="cooperatives-container">
    
      <section className="hero">
        <h1>Discover Trusted Cooperatives</h1>
        <p>Connecting local cooperatives with buyers and partners.</p>
        <button className="cta-button">Register Your Cooperative</button>
      </section>

     
      <div className="filters">
        <input
          type="text"
          placeholder="Search cooperatives..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Dairy">Dairy</option>
          <option value="Handicrafts">Handicrafts</option>
        </select>
      </div>

     
      <div className="cooperative-list">
        {filteredCooperatives.length > 0 ? (
          filteredCooperatives.map((coop) => (
            <div key={coop.id} className="cooperative-card">
              <img src={coop.logo} alt={coop.name} />
              <h3>{coop.name}</h3>
              <p>{coop.category} - {coop.location}</p>
              <button className="view-more">View More</button>
            </div>
          ))
        ) : (
          <p className="no-results">No cooperatives found.</p>
        )}
      </div>

     
      <div className="cta-section">
        <h2>Join the Movement!</h2>
        <button className="cta-button">Register Your Cooperative</button>
      </div>
    </div>
  );
};

export default Cooperatives;