import React from "react";
import "./OrderDetails.css"; // Import OrderDetails styles

const OrderDetails = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="order-details-modal">
      <div className="order-details-content">
        <h3>Order Details</h3>
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Buyer Name:</strong> {order.buyer}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <h4>Ordered Items:</h4>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>{item.name} - {item.quantity}</li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OrderDetails;