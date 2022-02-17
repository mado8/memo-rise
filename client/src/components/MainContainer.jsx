import React from 'react';
import Home from './Home/home'
import createMemory from './CreateMemory/CreateMemory';

// import components into main container and conditionally render them.

const MainContainter = () => {
    return (
        <div>
            <Home></Home>
        </div>
    )
}

export default MainContainter;