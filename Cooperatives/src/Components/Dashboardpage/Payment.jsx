import React, { useState } from "react";
import '../Dashboardpage/DashboardStyle/payment.css'
const Payments = () => {
  const [payments] = useState([
    { date: "10-Mar", orderId: 1001, amount: "50,000 Rwf", status: "Pending" },
    { date: "12-Mar", orderId: 1002, amount: "120,000 Rwf", status: "Paid" },
    { date: "15-Mar", orderId: 1003, amount: "80,000 Rwf", status: "Pending" },
  ]);

  const totalEarnings = payments.reduce((sum, payment) => sum + parseInt(payment.amount.replace(/\D/g, "")), 0);
  const pendingPayments = payments.filter(p => p.status === "Pending").length;
  const paidOrders = payments.filter(p => p.status === "Paid").length;

  return (
    <div className="payments">
      {/* Earnings Overview */}
      <div className="earnings-overview">
        <h3>Earnings Overview</h3>
        <div className="earnings-cards">
          <div className="card total-sales">Total Sales: {totalEarnings} Rwf</div>
          <div className="card pending-payments">Pending Payments: {pendingPayments}</div>
          <div className="card paid-orders">Paid Orders: {paidOrders}</div>
        </div>
      </div>

      {/* Payment History Table */}
      <div className="payment-history">
        <h3>Payment History</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.date}</td>
                <td>{payment.orderId}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;