import React from "react";
import "./Dashboard.css";
import { FaHome, FaBox, FaMoneyBill, FaShoppingCart, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <h2>Coop Dashboard</h2>
        <nav>
          <Link to="/dashboard"><FaHome /> Dashboard</Link>
          <Link to="/orders"><FaShoppingCart /> Orders</Link>
          <Link to="/payments"><FaMoneyBill /> Payments</Link>
          <Link to="/products"><FaBox /> Products</Link>
          <Link to="/settings"><FaCog /> Settings</Link>
          <Link to="/logout"><FaSignOutAlt /> Logout</Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Statistics Summary */}
        <section className="stats">
          <div className="stat-card">Total Products: 10</div>
          <div className="stat-card">Total Orders: 25</div>
          <div className="stat-card">Pending Orders: 5</div>
          <div className="stat-card">Completed Orders: 20</div>
          <div className="stat-card">Earnings: 500,000 Rwf</div>
        </section>

        {/* Recent Orders Table */}
        <section className="orders">
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
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>1002</td>
                <td>Beans</td>
                <td>100kg</td>
                <td>Processing</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>1003</td>
                <td>Tomatoes</td>
                <td>30kg</td>
                <td>Delivered</td>
                <td><button>View</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
