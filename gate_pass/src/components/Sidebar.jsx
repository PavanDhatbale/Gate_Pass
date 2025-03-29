// // import React from 'react'

// // const Sidebar = () => {
// //   return (
// //     <div>
// //       <aside className="sidebar">
// //       <ul>
// //         <li className="active">Apply For Gate Pass</li>
// //         <li>Request Status</li>
// //       </ul>
// //     </aside>
// //     </div>
// //   )
// // }

// // export default Sidebar

// import React from "react";

// const Sidebar = ({ setActiveTab }) => {
//   return (
//     <div className="sidebar">
//       <button className="sidebar-btn" onClick={() => setActiveTab("dashboard")}>
//         Apply For Gate Pass
//       </button>
//       <button className="sidebar-btn" onClick={() => setActiveTab("requestStatus")}>
//         Request Status
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

// import React from "react";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <button className="menu-item">Apply For Gate Pass</button>
//       <button className="menu-item active">Request Status</button>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <Link to="/GatePassForm" style={{ textDecoration: "none"}}>
      <button className="menu-item" onClick={() => setActiveTab("applyGatePass")}>
        Apply For Gate Pass
      </button>
      </Link>
      <button className="menu-item active" onClick={() => setActiveTab("requestStatus")}>
        Request Status
      </button>
    </div>
  );
};

export default Sidebar;
