import React from 'react';
// import LoginForm from './LoginSignup.js/Login';
import MyMemories from './myMemories/MyMemories';
import DashboardComponent from './Dashboard/Dashboard';

// import components into main container and conditionally render them.



const MainContainter = () => {
    return (
        <div>
            {/* <LoginForm></LoginForm> */}

            <LoginForm></LoginForm>


            <MyMemories></MyMemories>
            <DashboardComponent></DashboardComponent>

        </div>
    )
}

export default MainContainter;