import React, { useState } from "react";

const Sidebar2 = ({ setActiveTab }) => {
  const [selectedTab, setSelectedTab] = useState("Pending");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setActiveTab(tabName);
  };

  return (
    <div className="sidebar">
      <button
        className={`menu-item ${selectedTab === "Pending" ? "active" : ""}`}
        onClick={() => handleTabClick("Pending")}
      >
        Pending
      </button>
      <button
        className={`menu-item ${selectedTab === "Approved" ? "active" : ""}`}
        onClick={() => handleTabClick("Approved")}
      >
        Approved
      </button>
      <button
        className={`menu-item ${selectedTab === "Rejected" ? "active" : ""}`}
        onClick={() => handleTabClick("Rejected")}
      >
        Rejected
      </button>
    </div>
  );
};

export default Sidebar2;



