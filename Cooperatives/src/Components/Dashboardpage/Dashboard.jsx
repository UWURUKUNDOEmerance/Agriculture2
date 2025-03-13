import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({ products: 0, orders: 0, pending: 0, completed: 0, earnings: 0 });

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg">📦 Products: {stats.products}</div>
        <div className="bg-green-500 text-white p-6 rounded-lg">📋 Orders: {stats.orders}</div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg">⌛ Pending: {stats.pending}</div>
        <div className="bg-purple-500 text-white p-6 rounded-lg">✅ Completed: {stats.completed}</div>
        <div className="bg-red-500 text-white p-6 rounded-lg">💰 Earnings: {stats.earnings} Rwf</div>
      </div>
    </div>
  );
};

export default Dashboard;
