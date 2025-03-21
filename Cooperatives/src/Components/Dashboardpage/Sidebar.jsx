import React from "react";
import { Link } from "react-router-dom";
import "../Dashboardpage/DashboardStyle/sidebar.css"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaJediOrder } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/Dashboard" className="side"><AiOutlineDashboard className="icon"/>Dashboard</Link>
      <Link to="/Orders" className="side"><FaJediOrder className="icon"/>Orders</Link>
      <Link to="/Payment"className="side" ><MdOutlinePayment className="icon"/>
      Payments</Link>
     <Link to="/Setting"className="side" > <IoSettings className="icon"/>
      Settings</Link>
      <Link to="/Logout" className="side"><RiLogoutCircleFill className="icon"/>Logout</Link>
    </div>
  );
};

export default Sidebar;
