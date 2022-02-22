import React, { useState, useEffect } from 'react';
import './DailyActivites.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { GET_ME } from '../../utils/querie';
import { ADD_QUESTION } from '../../utils/mutation'
import { useMutation, useQuery } from '@apollo/client';
// import components into main container and conditionally render them.
// import Auth from '../utils/auth';
// const [getME, { error }] = useQuery(GET_ME);

const DailyActivites = () => {
  const {loading, data} = useQuery(GET_ME);
  const userData = data?.me || {};

  console.log(userData)

  
  const [addQuestion] = useMutation(ADD_QUESTION);
  const [questionInput, setQuestionInput] = useState({ question: '', answer: '' });
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = [
    {
      question: "Spend some time thinking of why you wanted to remember _",
    },
    {
      question: "Relate _ to something that shares similar traits.",
    },
    {
      question: "Spend some time thinking of a memory that reminds you of _",
    },
    {
      question: "Recall the initial time you encountered _",
    },
    {
      question: "Think of a place that will require you to know _",
    },
    {
      question: "Who might you know also remembers _",
    },
    {
      question: "What is it you wanted to remeber?",
    }
  ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    console.log({ ...questionInput })
    setQuestionInput({ ...questionInput, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("inside try")
      setQuestionInput({...questionInput, "question": questions[currentQuestion]})
      const response = await addQuestion({ variables: {questionData: questionInput} });
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
        <div className='question'>
         {questions[currentQuestion].question}
        </div>
        <div className='answerbox'>
          <input 
          placeholder='Answer Here' 
          value={questionInput.answer} 
          onChange={handleInputChange}
          name="answer"
          ></input>
        </div>
        <div>
        <button className='subbutton' onClick={handleFormSubmit}>Submit</button>
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