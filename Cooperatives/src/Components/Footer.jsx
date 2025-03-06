import React from "react";

import "../Styles/footer.css"
const Footer =()=>{
    return(
        <footer className="footer">
        <div className="subscribe">
          <input type="email" placeholder="Your email address" />
          <button>Subscribe Now</button>
        </div>
        <div className="footer-info">
          <div className="contact">
            <p>Contact Us</p>
            <p>yourcompany@gmail.com</p>
            <p>+014-202-400203</p>
          </div>
          <div className="contact">
            <p>Address</p>
            <p>444 Brooklyn, New York, America</p>
          </div>
          <div className="contact">
            <p>Links</p>
            <ul>
              <li>Home Section</li>
              <li>Our Team Section</li>
              <li>About Us Section</li>
              <li>Privacy Section</li>
              <li>FAQ Section</li>
            </ul>
          </div>
        </div>
        <p className="all"> All Rights Reserved 2025</p>
      </footer>
    )
}
export default Footer;