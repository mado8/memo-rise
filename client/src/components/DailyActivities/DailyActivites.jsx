import React, { useState, useEffect } from 'react';

import { GET_ME } from '../../utils/querie';
// import components into main container and conditionally render them.
// import Auth from '../utils/auth';
// const [getME, { error }] = useQuery(GET_ME);



const DailyActivites = () => {
    
      const [seconds, setSeconds] = useState(120);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
        
  

  return (
    <div>
      <div>
        <h1> Daily Activities</h1>
        <h2>{seconds}</h2>
        <p>Memory Question</p>
        <input placeholder='Answer Here'></input>
        <button>Submit</button>
      </div>
        <div>
          <div>
            
          </div>
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