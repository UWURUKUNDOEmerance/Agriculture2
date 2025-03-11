import React from "react";
import  "../Styles/home.css";
import { VscArrowRight } from "react-icons/vsc";
import Coffee from "../assets/Coffee.jpeg";
import Rice from "../assets/Rice.jpg";

import image5 from "../assets/image5.jpg"
export const Cooperatives = [
  { name: "Tea Cooperatives 🍵",image:Coffee},
  { name: "Cooperative B", image:Rice},
  { name: " Maize and Grain Cooperatives 🌽", image:image5},
];
const Home = () => {
  return (
    <section className="about-container">
    <div className="content">
<h1 className="about">Welcome</h1>
<div className="barg">Home<span className="blog"><VscArrowRight />Blog Standard</span>
</div>
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
           <img src={item.image} alt={item.name} style={{ width: "350px", height: "350px", padding: "5px", margin: "10px" }} />
           <h3>{item.name}</h3>
         </div>   
            ))}
           
         
          </div>
        </div>
        
<div  className="subscribe">
         <input type="text" placeholder=" Your Email Adress  " className="search-input"/>
          <button className="sub">Subscribe Now</button>
      </div> 
      </section>
    
    
      
      
     </section>
  );
};

export default Home;
