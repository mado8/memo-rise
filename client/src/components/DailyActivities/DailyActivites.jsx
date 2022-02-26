import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './DailyActivites.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { GET_ME } from '../../utils/querie'
import { ADD_QUESTION } from '../../utils/mutation'
import { useMutation, useQuery } from '@apollo/client'
import GetMemory from '../GetMemory'

const DailyActivites = () => {
  const { data: user } = useQuery(GET_ME)
  const userData = user?.user || {}
  const memoryIdArr = userData?.memories
  const [start, setStart] = useState('pending')
  const [questions, setQuestions] = useState([])
  const [increment, setIncrement] = useState(0)

  useEffect(() => {
    if (memoryIdArr !== undefined) {
      const memoryItems = memoryIdArr.map((memory) => {
        return <GetMemory _id={memory._id}></GetMemory>
      })
      setQuestions(memoryItems)
    }
  }, [start])

  const [addQuestion] = useMutation(ADD_QUESTION)
  const [questionInput, setQuestionInput] = useState('')
  const [answerInput, setAnswerInput] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setAnswerInput(value)
    setQuestionInput(document.getElementById('questionInput').innerHTML)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    console.log('------------questions and answer ----------')
    console.log(questionInput)
    console.log(answerInput)

    const memoryQuestion = { question: questionInput, answer: answerInput }
    console.log(memoryIdArr[increment]._id)

    try {
      console.log('inside try')
      await addQuestion({ variables: {questionData: memoryQuestion, memoryID: memoryIdArr[increment]._id} });

      setQuestionInput('')
      setAnswerInput('')
      if (increment !== memoryIdArr.length - 1) {
        setIncrement(increment + 1)
      } else {
        handleStart('finished')
      }
    } catch (err) {
      alert('catch')
      console.log(err)
    }
  }

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <>Done!</>
    }
    return (
      <div className='timer'>
        <div className='value'>{remainingTime}</div>
      </div>
    )
  }

  const handleStart = (startInput) => {
    setStart(startInput)
  }

  const returnPage = () => {
    if (start === 'pending') {
      return (
        <div id='activity-container'>
          <p id='small-title'> M y ☀️ d a i l y </p>
          <h1 className='title'>Activity</h1>
          <a id='home-arrow' href="/dashboard">
            <FontAwesomeIcon color="#fff" icon={faAngleLeft} />
          </a>
          <div id='button-div'>
            <button id='start-button' onClick={() => handleStart('start')}>
              Start
            </button>
          </div>
          <div className='question'>
            <p className='question' id='start-text'>
              Spend 5 minutes a day to increase your memorisation capabilities!
            </p>
          </div>
        </div>
      )
    } else if (start === 'start') {
      return (
      <div id='activity-container'>
        <p id='small-title'> M y ☀️ d a i l y </p>
        <h1 className='title'>Activity</h1>
        <a id='home-arrow' href="/dashboard">
          <FontAwesomeIcon color="#fff" icon={faAngleLeft} />
        </a>
        <div>
          <div className='App'>
            <div className='timer-wrapper'>
              <CountdownCircleTimer
                isPlaying
                strokeWidth={6}
                trailStrokeWidth={1}
                duration={300}
                colors={'#fff'}
                trailColor={'#ffd2b8'}
                children={{ color: '#fff' }}
                colorsTime={[120, 90, 60, 0]}
                onComplete={() => ({ shouldRepeat: true, delay: 1 })}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
          </div>
          <div className='question' value={questions[increment]}>
            {questions[increment]}
          </div>
          <div className='answerbox'>
            <input
              placeholder='Answer Here'
              value={answerInput}
              onChange={handleInputChange}
              name='answer'
            ></input>
          </div>
          <div id='button-div'>
            <button className='subbutton' onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div></div>
      </div>
      )
    } else {
      return (
        <div id='activity-container'>
          <p id='small-title'> M y ☀️ d a i l y </p>
          <h1 className='title'>Activity</h1>
          <a id='home-arrow' href="/dashboard">
            <FontAwesomeIcon color="#fff" icon={faAngleLeft} />
          </a>
          <div id='button-div'>
            <a href="/dashboard" id='finished-button'>
              Return to Home
            </a>
          </div>
          <div className='question'>
            <p className='question' id='start-text'>
              All finished!
            </p>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      {returnPage()}
    </div>
  )
}

export default DailyActivites
