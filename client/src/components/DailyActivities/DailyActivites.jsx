import React, { useState, useEffect } from 'react';
import './DailyActivites.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import { QUERY_USER } from '../utils/queries';
// import { GET_ME } from '../../utils/querie';
// import components into main container and conditionally render them.
// import Auth from '../utils/auth';
// const [getME, { error }] = useQuery(GET_ME);



const DailyActivites = () => {

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }
  
    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };



  return (
    <div id='activity-container'>
      <div>
        <h1 className='title'> Daily Activities</h1>
        <div className="App">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={120}
          colors={["#F09B41", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[120, 90, 60, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
        <div className='question'>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
        <div className='answerbox'>
        <input placeholder='Answer Here'></input>
        </div>
        <div>
        <button className='subbutton'>Submit</button>
        </div>
      </div>
      <div>
      </div>
      </div>
  )
}













// Button rende
// Forum to Render for user input
// once timer is expired submit user Input
// once timer is expired render success page/message
// Pop user memories



export default DailyActivites;