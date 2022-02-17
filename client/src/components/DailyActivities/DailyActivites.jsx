import React, { useState, useEffect } from 'react';
import './DailyActivites.css'
// import { QUERY_USER } from '../utils/queries';
// import { GET_ME } from '../../utils/querie';
// import components into main container and conditionally render them.
// import Auth from '../utils/auth';
// const [getME, { error }] = useQuery(GET_ME);



const DailyActivites = () => {

  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1);
      if (seconds === 0) clearInterval(interval);
    }, 1000);
    return console.log("OUT OF TIME")
  }, []);



  return (
    <body>
      <div>
        <h1 className='title'> Daily Activities</h1>
        <h2 className='timer'>{seconds}</h2>
        <div className='question'>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
    
        <input className='answerbox' placeholder='Answer Here'></input>
        <button className='subbutton'>Submit</button>
      </div>
      <div>
      </div>
    </body>
  )
}













// Button rende
// Forum to Render for user input
// once timer is expired submit user Input
// once timer is expired render success page/message
// Pop user memories



export default DailyActivites;