import React from 'react'
import './navbar.css'
// import { useState } from 'react'
// import SignUp from './LoginSignup/Login1';
import LoginForm from './LoginSignup/Login';

import {
    BrowserRouter as
      Router, Route,
    Link, Switch
  } from 'react-router-dom';
  
  
  export default function Navbar() {
    return (
      <Router>    

            <div>
              <ul>

                <li className="nav-item">
                  
                 <button id='logoutButton'> <Link to="/logout">Sign Out </Link></button>
                </li>          
              
              </ul>
            </div>
              
        
  
  
  
  
          <Switch>
            <Route path="/logout">
              < LoginForm/>
            </Route>

          </Switch>
  
  
  
  
        
      </Router>
  
    )
  }