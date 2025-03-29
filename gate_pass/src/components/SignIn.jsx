import React from 'react'
import '../App.css'
import Register from '../pages/Register'
import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <>
            <div className='SignIn'>
                <div className='left_side'>
                    <h1>Gate Pass For Faculty</h1>
                    <div className="login-container">
                        <h1>Sign In</h1>
                        <button className='Google_Btn'><img src="/Google_Logo.webp" alt="" />Sign in with Google</button>
                        <div className="separator">
                            <span className="line"></span> <p>or</p> <span className="line"></span>
                        </div>
                        <form className="login-form">
                            <div className='gap'>
                            <label>Email ID:</label>
                            <input type="text" placeholder="Enter your ID" />
                            </div>

                            <div className='gap'>
                            <label>Password:</label>
                            <input type="password" placeholder="Enter your password" />
                            </div>

                            <button type="submit">Sign In</button>
                        </form>
                        <p className="register-text">
                            Don't have an account? <Link to="/Register">register</Link>
                        </p>
                    </div>
                </div>
                <div className='right_side'>

                </div>
            </div>
        </>
    )
}

export default SignIn
