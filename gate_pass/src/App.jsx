import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import GatePassForm from './pages/GatePassForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/gatepassform" element={<GatePassForm/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>



     </Routes>
     </BrowserRouter>










      {/* <div>
        <Login/>
        <hr />
        <Register/>
        <hr />
        <Dashboard/>
        <hr />
        <GatePass/>
      </div> */}
    </>
  )
}

export default App
