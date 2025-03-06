import React from "react";
import  "../Styles/home.css";
import { VscArrowRight } from "react-icons/vsc";
import coffee from "../assets/coffee.jpeg";
import rice from "../assets/rice.jpg";
import maize from "../assets/maize.jpg";
export const Cooperatives = [
  { name: "coffee", image:coffee},
  { name: "rice", image:rice},
  { name: "maize", image:maize},
];
const Home = () => {
  return (
    <div className="about-container">
    <div className="content">
<h1 className="about">About us</h1>
<div className="barg">Home<span className="blog"><VscArrowRight />Blog Standard</span></div>
</div>

      
      <section className="about-intro">
      <div className="part">
      <div className="about-info">
        <h2>Connecting Cooperatives to Markets</h2>
        <p>
        Find fresh produce directly from cooperatives
        </p>
        <button className="cta">Browse Products</button>
        <button className="cta secondary">Register Cooperative</button>
        </div>
       </div>
      </section>
       
      <section className="featured">
        <h2>Featured Cooperatives</h2>
        <div className="cooperative-list">
       
          <div className="cooperative">
            {Cooperatives.map((item,index)=>(
           <div key={index}>
           <img src={item.image} alt={item.name} style={{ width: "400px", height: "400px", padding: "15px", margin: "20px" }} />
           <h3>{item.name}</h3>
         </div>   
            ))}
           
         
          </div>
        </div>
      </section>
    
      
      {/* <section className="faq">
      
        <h2>Do You Have Any Questions?</h2>
        <p>
          It is a long established fact that a reader will be distracted by readable content.
        </p>
        <ul>
          <li>Many desktop publishing packages and web pages?</li>
          <li>Contrary to popular belief, Lorem Ipsum is not simply?</li>
          <li>Lorem Ipsum is simply dummy text?</li>
        </ul>
      </section>
      
      <section className="steps">
      <div className="img">
        <img src={image4} alt="image4" className="image"/>
        </div> 
        <h2>Steps In The Agriculture Process</h2>
        <div className="steps-grid">
          <div className="step">Planning</div>
          <div className="step">Growing</div>
          <div className="step">Harvesting</div>
          <div className="step">Processing</div>
        </div>
      </section> */}
      
      
     </div>
  );
};

export default Home;
