import React, { useState } from "react";
import "../Styles/auth.css"

const Auth = () => {
    
    const [isLogin, setIsLogin] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isLogin ? "Logging in..." : "Registering...");
      };
      

  return (
    <div>
     
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Empowering cooperatives, connecting markets.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Browse Products</button>
            <button className="btn-secondary">Register Cooperative</button>
          </div>
        </div>
      </section>

      
      <section className="auth-container">
        <div className="auth-box">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <form onSubmit={handleSubmit}>
  {!isLogin && <input type="text" placeholder="Full Name" required />}
  <input type="email" placeholder="Email Address" required />
  <input type="password" placeholder="Password" required />
  {!isLogin && <input type="password" placeholder="Confirm Password" required />}
  
  {isLogin && (
    <label className="remember-me">
      <input type="checkbox" /> Remember Me
    </label>
  )}

  <button type="submit" className="btn-primary">
    {isLogin ? "Login" : "Register"}
  </button>
</form>


          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? " Register here" : " Login here"}
            </span>
          </p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        
        <div className="steps">
  {["📌 Register Your Cooperative", "📌 List Your Products", "📌 Receive Orders", "📌 Deliver & Get Paid"].map((step, index) => (
    <div key={index} className="step">{step}</div>
  ))}
</div>

       
      </section>

     
    </div>
  );
};

export default Auth;