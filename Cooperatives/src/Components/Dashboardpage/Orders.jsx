// import { useEffect, useState } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/orders").then((res) => setOrders(res.data));
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">📦 Orders</h1>
//       <table className="w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-4">Order ID</th>
//             <th className="p-4">Buyer</th>
//             <th className="p-4">Total</th>
//             <th className="p-4">Status</th>
//             <th className="p-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((o) => (
//             <tr key={o._id} className="text-center">
//               <td>{o._id}</td>
//               <td>{o.buyerName}</td>
//               <td>{o.totalAmount} Rwf</td>
//               <td>{o.status}</td>
//               <td>
//                 <button className="bg-green-500 px-2 py-1 text-white">Update</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orders;
import React, { useState } from "react";
import "../Dashboardpage/DashboardStyle/order.css"

const Orders = () => {
  const [filter, setFilter] = useState("All");

  const orders = [
    { id: 1001, product: "Maize", quantity: "50kg", status: "Pending", buyer: "John Doe", payment: "Mobile Money" },
    { id: 1002, product: "Beans", quantity: "100kg", status: "Processing", buyer: "Alice Smith", payment: "Bank Transfer" },
    { id: 1003, product: "Tomatoes", quantity: "30kg", status: "Delivered", buyer: "David Brown", payment: "Mobile Money" },
  ];

  const filteredOrders = filter === "All" ? orders : orders.filter(order => order.status === filter);

  return (
    <div className="orders">
      {/* Order Status Dashboard */}
      <div className="order-status">
        <h3>Order Status</h3>
        <div className="filters">
          <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
          <button className={filter === "Pending" ? "active" : ""} onClick={() => setFilter("Pending")}>Pending</button>
          <button className={filter === "Processing" ? "active" : ""} onClick={() => setFilter("Processing")}>Processing</button>
          <button className={filter === "Delivered" ? "active" : ""} onClick={() => setFilter("Delivered")}>Delivered</button>
        </div>
      </div>

      {/* Order Details Table */}
      <div className="order-details">
        <h3>Orders</h3>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Buyer</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
                <td>{order.buyer}</td>
                <td>{order.payment}</td>
                <td><button className="update-btn">Update Status</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
