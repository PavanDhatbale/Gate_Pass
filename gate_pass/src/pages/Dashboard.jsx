import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("requestStatus");

  // Sample request status data
  const requestData = [
    { id: 1, date: "15/01/2025", reason: "Personal", status: "Approved" },
    { id: 2, date: "20/02/2025", reason: "Official", status: "Pending" },
    { id: 3, date: "05/03/2025", reason: "Emergency", status: "Rejected" },
  ];

  // Filter data based on activeTab
  const filteredData =
    activeTab === "requestStatus"
      ? requestData
      : requestData.filter((item) => item.status === activeTab);

  return (
    <div className="dashboard-container">
      <Navbar2 />
      <div className="dashboard-content-wrapper">
        <Sidebar setActiveTab={setActiveTab} />
        <div className="dashboard-content">
          <h2 className="table-title">
            {activeTab === "requestStatus"
              ? "Request Status"
              : `${activeTab} Requests`}
          </h2>
          <table className="status-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.date}</td>
                    <td>{item.reason}</td>
                    <td>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">
                    No {activeTab} requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



