import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
// import components into main container and conditionally render them.
// import Auth from '../utils/auth';
import { GET_ME } from '../../utils/querie';
// const [getME, { error }] = useQuery(GET_ME);



const DailyActivites = () => {
  const {activityButton, setActivityButton} = useState("Start Daily Activity")
  const startDailyActivities = () =>{
    setActivityButton = 120
    useInterval(() => {
      // Your custom logic here
      setActivityButton(count - 1);
    }, 1000);
  
  }
  return (
    <div>
      <div>
        <h1> Daily Activities</h1>
        <button>Exit</button>
      </div>
        <div>
          <div>
            <button>{activityButton}</button>
          </div>
        </div>

      <p>Memory Question</p>

      <input placeholder='Answer Here'></input>









    </div>
  )
}











//     try {
//         const { startActivities } = await getME({
//             variables: { ...memories},

//         })
//     }
//     catch (err) {
//         console.log()
//     }

// };

// function Example() {
//     const [count, setCount] = useState(120);

//     useEffect(() => {
//       document.title = `You clicked ${count} times`;
//     });

//     return (
//       <div>
//         <p>Time Remaining {count}</p>
//         <button onClick={() => setCount(count - 1)}>
//           Click me
//         </button>
//       </div>
//     );
//   }


// Button render
// onClick of Button Start Timer then render question and forum
// Forum to Render for user input
// once timer is expired submit user Input
// once timer is expired render success page/message



export default DailyActivites;