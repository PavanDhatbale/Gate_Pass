import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <div className='Nav_container'>
        <img src="/KBT_LOGO.jpg" alt="" />
        <div className='Nav_text'>
            <p >Maratha Vidya Prasarak Samaj's</p>
            <p className='blue_text'>Karmaveer Adv.Baburao Ganpatrao Thakare College Of Engineering</p>
            <p>Udoji Maratha Boarding Campus, Near Pumping Station, Gangapur Road, Nashik</p>
            <p className='blue_text'>An Autonomous Institute Parmanently Affiliated To Savitribai Phule Pune University</p>
        </div>
        <div className='Nav_Logo'>
            <img src="/Grade_Logo.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Navbar
