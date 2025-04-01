import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import GatePassForm from './pages/GatePassForm'
import { Routes, Route } from "react-router-dom";
import HodDashboard from './pages/HodDashboard'

const App = () => {
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/gatepassform" element={<GatePassForm/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path='/hoddashboard' element={<HodDashboard/>}></Route>
     </Routes>
     
     

    </>
  )
}

export default App







