import React from "react";
import "../styles/contact.css"; 

const Contact = () => {
  
  return (
    <div>
      
      <section className="hero">
        <div className="hero-content">
          <h1>Get in Touch with Us</h1>
          <p>We’re here to help. Reach out for inquiries, support, or partnership opportunities.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

   
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@cooperativeplatform.com</p>
        <p><strong>Phone:</strong> +250 123 456 789</p>
        <p><strong>Address:</strong> Kigali, Rwanda</p>
      </section>

    
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">📌 Register Your Cooperative</div>
          <div className="step">📌 List Your Products</div>
          <div className="step">📌 Receive Orders</div>
          <div className="step">📌 Deliver & Get Paid</div>
        </div>
      </section>
    </div>
  );
};

export default Contact;