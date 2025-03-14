// import { useEffect, useState } from "react";
// import axios from "axios";

// const Dashboard = () => {
//   const [stats, setStats] = useState({ products: 0, orders: 0, pending: 0, completed: 0, earnings: 0 });

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/stats").then((res) => setStats(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>
//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-blue-500 text-white p-6 rounded-lg">📦 Products: {stats.products}</div>
//         <div className="bg-green-500 text-white p-6 rounded-lg">📋 Orders: {stats.orders}</div>
//         <div className="bg-yellow-500 text-white p-6 rounded-lg">⌛ Pending: {stats.pending}</div>
//         <div className="bg-purple-500 text-white p-6 rounded-lg">✅ Completed: {stats.completed}</div>
//         <div className="bg-red-500 text-white p-6 rounded-lg">💰 Earnings: {stats.earnings} Rwf</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import "../Dashboardpage/DashboardStyle/dashboard.css"


const Dashboard = () => {
  return (
    <div className="dashboard">
    
      <div className="stats">
        <div className="stat-card">Total Products: 150</div>
        <div className="stat-card">Total Orders: 120</div>
        <div className="stat-card">Pending Orders: 10</div>
        <div className="stat-card">Completed Orders: 90</div>
        <div className="stat-card">Total Earnings: 5,000,000 Rwf</div>
      </div>

     
      <div className="recent-orders">
        <h3>Recent Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Maize</td>
              <td>50kg</td>
              <td>Pending</td>
              <td><button className="view-btn">View</button></td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Beans</td>
              <td>100kg</td>
              <td>Processing</td>
              <td><button className="view-btn">View</button></td>
            </tr>
            <tr>
              <td>1003</td>
              <td>Tomatoes</td>
              <td>30kg</td>
              <td>Delivered</td>
              <td><button className="view-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>

 
      <div className="notifications">
        <h3>Notifications</h3>
        <ul>
          <li>📢 New order received!</li>
          <li>✅ Payment confirmation for Order #1002</li>
          <li>🔔 Platform update scheduled for next week</li>
        </ul>
      </div>
     
    </div>
  );
};

export default Dashboard;
