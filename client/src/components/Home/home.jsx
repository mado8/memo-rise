import React, { useState } from 'react';
import './home.css'

const AppHome = () => {
  const [renderForm, setRenderForm] = useState("home");

  const renderFormHandler = (page) => {
    setRenderForm(page)
  }

  const renderPage = () => {
      if(renderForm === "signup") {
          return (
              <div>import signup component here</div>
          )
      } else if(renderForm === "login") {
          return (
              <div>import login component here</div>
          )
      } else {
        return (
            <div id="app-home-container">
            <div id='home-container'>
              <div>
                <div id='home-logo'>
                  <p>Memorise</p>
                </div>
                <div id='home-login-buttons'>
                  <button id='login-button' onClick={()=> renderFormHandler("login")}>Login</button>
                  <button id='signup-button' onClick={()=> renderFormHandler("signup")}>Signup</button>
                </div>
              </div>
            </div>
            <svg class="wave-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F09B41" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,245.3C384,213,480,107,576,90.7C672,75,768,149,864,197.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div class="orange-div"></div>
            </div>
          )
      }
  }

  return (
    <>
    {renderPage()}
    </>
  )
}

export default AppHome