import React from 'react';
// import CreateMemory from './CreateMemory/CreateMemory';
import Home from './Home/home'


// import components into main container and conditionally render them.

const MainContainter = () => {
    return (
        <div>
            {/* <CreateMemory></CreateMemory> */}
            <Home />
        </div>
    )
}

export default MainContainter;