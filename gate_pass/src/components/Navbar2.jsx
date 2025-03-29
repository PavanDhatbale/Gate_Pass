import React from 'react'
import { Link } from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div>
     <nav className="navbar">
      
      <img src="/KBT_LOGO.jpg" alt="KBTCOE Logo" />

      
      <div className="right-section">
        <span>XYZ Staff</span>
        <Link to="/" style={{ textDecoration: "none"}}>
        <button className="logout-button">⏻</button>
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar2

