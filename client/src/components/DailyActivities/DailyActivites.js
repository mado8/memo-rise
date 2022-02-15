import React from 'react';
import { useQuery } from '@apollo/client';
// import components into main container and conditionally render them.
import Auth from '../utils/auth';
import { GET_ME } from '../../utils/querie';
const [getME, { error }] = useQuery(GET_ME);


const DailyActivites = () => {

    try {
        const { startActivities } = await getME({
            variables: { ...memories},
            
        })
    }
    catch (err) {
        console.log()
    }

};

function Example() {
    const [count, setCount] = useState(120);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>Time Remaining {count}</p>
        <button onClick={() => setCount(count - 1)}>
          Click me
        </button>
      </div>
    );
  }

return (
    <div>
        <h1> Daily Activities</h1>
        <button>Exit</button>


<button onClick = {() => Example()} style={{
            height: "5%",
            width: "5%"}}></button>

        <p>{memories}</p>

        <div>answer</div>



    </div>
)


export default DailyActivites;