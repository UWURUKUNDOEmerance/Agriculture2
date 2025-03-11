import React from "react";
import { useState } from "react";
import "../Styles/navbar.css"
import{Link} from "react-router-dom"
import {FaSearch} from "react-icons/fa";
const Navbar =()=>{
return(
    <>
     
     <div className="navbar">
     <div className="logo">🌱 CoopMarket</div>
      <div className="menu">
        <ul>
       <li> <Link to="/" className="list">Home</Link></li>
       <li> <Link to="/Cooperatives" className="list">Cooperatives</Link></li>
       <li><Link to="/Products" className="list">Products</Link></li>
       <li><Link to="/About" className="list">About </Link></li>
       <li> <Link to="/Contact" className="list">Contact</Link></li>
       <li><Link to="/Auth" className="list">Login/Register</Link></li>
       </ul>
      
      </div>
   <div className="product">
      <input type="text" placeholder="Search products..." className="search"/>
          
          <button className="btn"><FaSearch /></button>
          </div>
    </div>
     
    </>
)
}
export default Navbar;