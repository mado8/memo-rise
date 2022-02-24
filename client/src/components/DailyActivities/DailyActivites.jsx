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
  const memoryIdArr = userData?.memories;
  const [start, setStart] = useState(false);
  let arr = [];
  let increment = 0;

  // useEffect(() => {
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
        console.log(arr)
    }
  // }, [start, increment]);

  const [addQuestion] = useMutation(ADD_QUESTION);
  const [questionInput, setQuestionInput] = useState({ question: '', answer: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(arr[increment])
    setQuestionInput({ ...questionInput, answer: value });
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

  const handleStart = (startInput) => {
    setStart(startInput)
  }

  const renderPage = () => {
    if(start === false) {
      return <button onClick={() => handleStart(true)}>Start</button>
    } else if (start === true) {
      return (
        <div id='activity-container'>
      <p id="small-title"> M y  ☀️  d a i l y </p>
      <h1 className='title'>Activity</h1>
      <div>
        <div className='App'>
          <div className='timer-wrapper'>
            <CountdownCircleTimer
              isPlaying
              strokeWidth={6}
              trailStrokeWidth={1}
              duration={120}
              colors={'#fff'}
              trailColor={'#ffd2b8'}
              children={({color: "#fff"})}
              colorsTime={[120, 90, 60, 0]}
              onComplete={() => ({ shouldRepeat: false, delay: 1 })}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className='question'>
          <p>{arr[increment]}</p>
        </div>
        <div className='answerbox'>
          <input
            placeholder='Answer Here'
            value={questionInput.answer}
            onChange={handleInputChange}
            name='answer'
          ></input>
        </div>
        <div id="button-div">
          <button className='subbutton' onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div></div>
    </div>
      )
    }
  }

  return (
    <div>
      {renderPage()}
    </div>
  )
}













// Button rende
// Forum to Render for user input
// once timer is expired submit user Input
// once timer is expired render success page/message
// Pop user memories



export default DailyActivites;