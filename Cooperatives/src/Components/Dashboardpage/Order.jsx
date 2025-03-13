import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Orders</h1>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4">Order ID</th>
            <th className="p-4">Buyer</th>
            <th className="p-4">Total</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o._id} className="text-center">
              <td>{o._id}</td>
              <td>{o.buyerName}</td>
              <td>{o.totalAmount} Rwf</td>
              <td>{o.status}</td>
              <td>
                <button className="bg-green-500 px-2 py-1 text-white">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
