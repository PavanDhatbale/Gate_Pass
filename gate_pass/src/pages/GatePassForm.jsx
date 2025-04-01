import React from 'react'
import Navbar2 from '../components/Navbar2'
const GatePass = () => {
  return (
    <div>
      <Navbar2 />
      <div className="gatepass-container">
      <div className="gatepass-box">
        <h2 className="gatepass-title">M.V.P. SAMAJ’S KBTCOE, NASHIK</h2>
        <h3 className="gatepass-subtitle">Gate Pass</h3>

        <form className="gatepass-form">
          <div className="row">
            <div className="input-group">
              <label>Date :</label>
              <input type="text" className="underline-input" />
            </div>
            <div className="input-group">
              <label>Time In :</label>
              <input type="date" className="small-input date" />
            </div>
            <div className="input-group">
              <label>Time Out :</label>
              <input type="date" className="small-input date" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Full Name :</label>
              <input type="text" className="underline-input" />
            </div>
            <div className="input-group">
              <label>Employee ID :</label>
              <input type="text" className="small-input" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Designation :</label>
              <input type="text" className="underline-input" />
            </div>
            <div className="input-group">
              <label>Department :</label>
              <input type="text" className="small-input" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Purpose (Personal/Official):</label>
              <input type="text" className="underline-input full-width" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Reason:</label>
              <input type="text" className="underline-input full-width" />
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default GatePass
