

import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <Link to="/GatePassForm" style={{ textDecoration: "none" }}>
        <button className="menu-item" onClick={() => setActiveTab("applyGatePass")}>
          Apply For Gate Pass
        </button>
      </Link>
      <button className="menu-item" onClick={() => setActiveTab("requestStatus")}>
        Request Status
      </button>
      <button className="menu-item" onClick={() => setActiveTab("Pending")}>
        Pending
      </button>
      <button className="menu-item" onClick={() => setActiveTab("Approved")}>
        Approved
      </button>
      <button className="menu-item" onClick={() => setActiveTab("Rejected")}>
        Rejected
      </button>
    </div>
  );
};

export default Sidebar;
