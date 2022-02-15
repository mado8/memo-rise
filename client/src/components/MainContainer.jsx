import React from 'react';
import LoginForm from './LoginSignup.js/Login';
import MyMemories from './myMemories/MyMemories';
// import components into main container and conditionally render them.



const MainContainter = () => {
    return (
        <div>
            {/* <LoginForm></LoginForm> */}
            <MyMemories></MyMemories>
        </div>
    )
}

export default MainContainter;