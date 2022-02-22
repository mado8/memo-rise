import React from 'react'
import './navbar.css'
// import LoginForm from '../LoginSignup.js/Login'
// import { Link } from 'react-router-dom';
  
  export default function Navbar() {
    return (
        <div>
            <ul id="nav-list">
                {/* <a className="nav-link" href="#">Features</a> */}
                <li>
                  <a href="/dashboard">home</a>
                </li>
                <li>
                  <a href="/">Logout</a>
                </li>
            </ul>
        </div>
    )
  }
