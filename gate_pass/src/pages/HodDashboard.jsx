import React, { useState } from "react";
import Sidebar2 from "../components/Sidebar2";
import Navbar2 from "../components/Navbar2";

const HodDashboard = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  // Dummy data (Replace this with API data later)
  const gatePassRequests = {
    Pending: [
      {
        date: "2025-03-31",
        facultyName: "Hondu Virug",
        employeeId: "123",
        timeOut: "01:44",
        timeIn: "02:44",
        purpose: "Official",
        reason: "xyz",
      },
    ],
    Approved: [
      {
        date: "2025-03-30",
        facultyName: "John Doe",
        employeeId: "456",
        timeOut: "10:30",
        timeIn: "12:00",
        purpose: "Meeting",
        reason: "Approved",
      },
    ],
    Rejected: [
      {
        date: "2025-03-29",
        facultyName: "Jane Smith",
        employeeId: "789",
        timeOut: "14:00",
        timeIn: "16:00",
        purpose: "Personal",
        reason: "Not Approved",
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <Navbar2 />

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Sidebar */}
        <Sidebar2 setActiveTab={setActiveTab} />

        {/* Content Area */}
        <div className="content-area">
          <h2>{activeTab} Gate Pass Requests</h2>
          
          {/* Table for Gate Pass Requests */}
          <table className="request-table_new">
            <thead>
              <tr>
                <th>Date</th>
                <th>Faculty Name</th>
                <th>Employee ID</th>
                <th>Time Out</th>
                <th>Time In</th>
                <th>Purpose</th>
                <th>Reason</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {gatePassRequests[activeTab].length > 0 ? (
                gatePassRequests[activeTab].map((request, index) => (
                  <tr key={index}>
                    <td>{request.date}</td>
                    <td>{request.facultyName}</td>
                    <td>{request.employeeId}</td>
                    <td>{request.timeOut}</td>
                    <td>{request.timeIn}</td>
                    <td>{request.purpose}</td>
                    <td>{request.reason}</td>
                    <td>
                      {activeTab === "Pending" && (
                        <>
                          <button className="approve-btn">Approve</button>
                          <button className="reject-btn">Reject</button>
                        </>
                      )}
                      {activeTab === "Approved" && <span>✔ Approved</span>}
                      {activeTab === "Rejected" && <span>❌ Rejected</span>}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No requests found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HodDashboard;


