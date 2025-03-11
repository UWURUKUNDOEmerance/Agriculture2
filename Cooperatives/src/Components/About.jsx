import React from "react";
import "../styles/about.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Cooperatives, Connecting Markets</h1>
          <p>
            We bridge the gap between cooperatives and consumers, ensuring fair
            trade and sustainable growth.
          </p>
          <button className="cta-button">Learn More About Us</button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower cooperatives by providing a digital marketplace for their
            products.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>A thriving economy where local cooperatives have global reach.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">📌 <strong>Step 1:</strong> Cooperatives Register</div>
          <div className="step">📌 <strong>Step 2:</strong> They List Their Products</div>
          <div className="step">📌 <strong>Step 3:</strong> Customers Browse & Order</div>
          <div className="step">📌 <strong>Step 4:</strong> Cooperatives Deliver & Get Paid</div>
        </div>
      </section>

      {/* Meet Our Cooperatives */}
      <section className="cooperatives">
        <h2>Meet Our Cooperatives</h2>
        <p>Connecting local producers to buyers through a digital marketplace.</p>
        <button className="cta-button">Join Our Network</button>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Members Say</h2>
        <blockquote>
          "This platform has transformed our cooperative, giving us access to more
          buyers and fair pricing!"
          <cite>- Cooperative Member</cite>
        </blockquote>
      </section>

    
      <section className="cta-section">
        <h2>Join Our Mission!</h2>
        <div className="cta-buttons">
          <button className="cta-button">Register as a Cooperative</button>
          <button className="cta-button secondary">Explore Products</button>
        </div>
      </section>
    </div>
  );
};

export default About;
