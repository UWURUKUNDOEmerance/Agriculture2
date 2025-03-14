import React, { useState } from "react";
import "../Dashboardpage/DashboardStyle/setting.css";

const Settings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "********",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({
      ...user,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="settings">
      <h3>User Settings</h3>
      <form className="settings-form">
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="notifications"
            checked={user.notifications}
            onChange={handleChange}
          />
          Enable Notifications
        </label>
        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;