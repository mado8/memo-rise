import React from 'react'
import './navbar.css'
import Auth from '../../utils/auth';
import { useState } from 'react'
// import LoginForm from '../LoginSignup.js/Login'
// import { Link } from 'react-router-dom';

export default function Navbar() {
  const [setShowModal] = useState(false);
  return (
    
    <div>      
    <ul id="nav-list">
      {/* <a className="nav-link" href="#">Features</a> */}
    {Auth.loggedIn() ? ( 
      <>
        <li>
          <a href="/dashboard">Home</a>
        </li>
          
        <li>
          <a href="/" onClick={Auth.logout}>Logout</a>
        </li>
      </>
      ):(
        <li>
          <a href="/login" onClick={() => setShowModal(true)}>Login/Sign Up</a>
        </li>      
    )}
    
    </ul>
  </div>
  )
}
