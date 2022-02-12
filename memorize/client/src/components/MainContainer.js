import React from 'react';
import LoginForm from './LoginSignup.js/Login';
import Dashboard from './Dashboard.js/Dashboard';
// import components into main container and conditionally render them.


const MainContainter = () => {
    return (
        <div>
            <LoginForm></LoginForm>
            
        </div>
    )
}

export default MainContainter;