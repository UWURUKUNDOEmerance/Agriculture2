import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Cooperatives from "./Components/cooperatives";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Auth from "./Components/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="/cooperatives" element={<Cooperatives />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Auth" element={<Auth/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import React from "react";
// import "./App.css";

// const App = () => {
//   return (
//     <div className="app">
//       <header className="header">
//         <div className="logo">🌱 CoopMarket</div>
//         <nav>
//           <ul>
//             <li>Home</li>
//             <li>Cooperatives</li>
//             <li>Products</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Login/Register</li>
//           </ul>
//         </nav>
//         <input type="text" placeholder="Search..." className="search-bar" />
//       </header>
      
//       <section className="hero">
//         <h1>Connecting Cooperatives to Markets</h1>
//         <p>Find fresh produce directly from cooperatives</p>
//         <button className="cta">Browse Products</button>
//         <button className="cta secondary">Register Cooperative</button>
//       </section>
      
//       <section className="featured">
//         <h2>Featured Cooperatives</h2>
//         <div className="cooperative-list">
//           <div className="cooperative">Coop A</div>
//           <div className="cooperative">Coop B</div>
//           <div className="cooperative">Coop C</div>
//         </div>
//       </section>
      
//       <footer className="footer">
//         <p>Contact Info | Social Links | Terms & Conditions</p>
//       </footer>
//     </div>
//   );
// };

// export default App;
