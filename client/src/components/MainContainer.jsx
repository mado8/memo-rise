import React from 'react';
// import LoginForm from './LoginSignup.js/Login';
// import MyMemories from './myMemories/MyMemories';
// import DashboardComponent from './Dashboard/Dashboard';
// import DailyActivites from './DailyActivities/DailyActivites';
import Home from './Home/home'

// import components into main container and conditionally render them.



const MainContainter = () => {
    return (
        <div>
            {/* <LoginForm></LoginForm> */}

            {/* <LoginForm></LoginForm> */}
            <Home></Home>
            {/* <DailyActivites></DailyActivites> */}
            {/* <MyMemories></MyMemories> */}
            {/* <DashboardComponent></DashboardComponent> */}

        </div>
    )
}

export default MainContainter;