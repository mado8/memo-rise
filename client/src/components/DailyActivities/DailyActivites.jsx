import React, { useState, useEffect } from 'react';
import './DailyActivites.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { GET_ME } from '../../utils/querie';
import { ADD_QUESTION } from '../../utils/mutation'
import { useMutation, useQuery } from '@apollo/client';
import GetMemory from '../GetMemory'

const DailyActivites = () => {
  const {data: user} = useQuery(GET_ME);
  const userData = user?.user || {};
  const memoryIdArr = userData.memories;
  const [start, setStart] = useState(false);
  let arr = [];
  let increment = 0;

  const getMemory = () => {
      if (memoryIdArr !== undefined) {
          console.log('this data is being accessed')
          const memoryItems = memoryIdArr.map((memory) => {
              return (
                  <GetMemory _id={memory._id}></GetMemory>
              )
          })
          memoryItems.forEach(memory => {
              arr.push(memory)
          })
      }
  };

  getMemory();


  const [addQuestion] = useMutation(ADD_QUESTION);
  const [questionInput, setQuestionInput] = useState({ question: arr[increment], answer: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    console.log({ ...questionInput })
    setQuestionInput({ ...questionInput, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    increment ++;
    console.log(increment)

    try {
      // console.log("inside try")
      // setQuestionInput({...questionInput, "question": questions[currentQuestion]})
      // const response = await addQuestion({ variables: {questionData: questionInput} });
    } catch (err) {
      alert("catch")
      console.log(err);
    }
  }

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
        {arr[increment]}
        <form onSubmit={handleFormSubmit}>
          <div className='answerbox'>
            <input 
            placeholder='Answer Here' 
            value={questionInput.answer} 
            onChange={handleInputChange}
            name="answer"
            ></input>
          </div>
          <div>
            <button className='subbutton' type="submit">Submit</button>
          </div>
        </form>
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