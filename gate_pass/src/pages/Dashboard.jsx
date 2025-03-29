


// import React from "react";
// import Navbar2 from "../components/Navbar2";
// import Sidebar from "../components/Sidebar";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <Navbar2 />
//       <div className="dashboard-content-wrapper">
//         <Sidebar />
//         <div className="dashboard-content">
//           {/* Add content dynamically here */}
//           <h2>Welcome to the Faculty Gate Pass System</h2>
//           <p>Select an option from the sidebar to proceed.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Sample request status data
  const requestData = [
    { id: 1, date: "15/01/2025", reason: "Personal", status: "Approved" },
    { id: 2, date: "20/02/2025", reason: "Official", status: "Pending" },
  ];

  return (
    <div className="dashboard-container">
      <Navbar2 />
      <div className="dashboard-content-wrapper">
        <Sidebar setActiveTab={setActiveTab} />
        <div className="dashboard-content">
          {activeTab === "home" && (
            <>
              <h2>Welcome to the Faculty Gate Pass System</h2>
              <p>Select an option from the sidebar to proceed.</p>
            </>
          )}

          {activeTab === "requestStatus" && (
            <>
              <h2 className="table-title">Request Status</h2>
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
                  {requestData.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.date}</td>
                      <td>{item.reason}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
