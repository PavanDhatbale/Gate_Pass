import React from 'react'
import Navbar from '../components/Navbar'
import '../App.css'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <>
        <Navbar/>
      <div className='Register_container'>
        <form className='Register_form' >
            <div className='Register'>
            <h1>Register</h1>
                <label htmlFor="name">Full Name :</label>
                <input type="text" id="name" />

                <label htmlFor="email">Email-Id :</label>
                <input type="email" id="email" />

                <label htmlFor="Emp-id">Employee Id :</label>
                <input type="text" id="Emp-id" />

                <label htmlFor="password">Password :</label>
                <input type="password" id="password" />

                <label htmlFor="Designation">Designation :</label>
                <input type="text" id="Designation" />

                <Link to="/Dashboard" style={{ textDecoration: "none"}}>
                <button id="Reg-Btn" >Register</button>
                </Link>
            </div>
        </form>
      </div>
    </>
  )
}

export default Register
