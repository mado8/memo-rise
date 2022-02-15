import React from 'react';
// import LoginForm from './LoginSignup.js/Login';
import MyMemories from './myMemories/MyMemories';
import DashboardComponent from './Dashboard/Dashboard';
import DailyActivites from './DailyActivities/DailyActivites';

// import components into main container and conditionally render them.



const MainContainter = () => {
    return (
        <div>
            {/* <LoginForm></LoginForm> */}

            {/* <LoginForm></LoginForm> */}

            <DailyActivites></DailyActivites>
            {/* <MyMemories></MyMemories> */}
            {/* <DashboardComponent></DashboardComponent> */}

        </div>
    )
}

export default MainContainter;