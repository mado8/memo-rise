import React, { useState, useEffect } from 'react';
// const CreateMemo
import '../components/CreateMemory/CreateMemory.css'
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../utils/mutation';


const AddQuestion = (props) => {
  const [addQuestion, { error, data }] = useMutation(ADD_QUESTION)
  const [questionInput, setquestionInput] = useState({ question: '', answer: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setquestionInput({ ...questionInput, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("inside try")
      const response = await addQuestion({ variables: {questionData: questionInput} });
      props.handlePageChange('')
    } catch (err) {
      alert("catch")
      console.log("inside in memory cache block")
      console.log(err);
      // setShowAlert(true);
    }
  }

  return (
    <>
      <div>
        <div id='memory-form-container'>
          <form id='memory-form' onSubmit={handleFormSubmit}>
            <div id='form-container'>
              <div id='form-header'>
                <h3>Questions</h3>
              </div>
              <div id="form-input-container">
                <label>
                  <input
                    className='form-input'
                    name='title'
                    type='text'
                    placeholder='Add a Question'
                    onChange={handleInputChange}
                    value={questionInput.question}
                    required
                  />
                </label>
                <label>
                  <input
                    className='form-input'
                    name='Answer'
                    type='text'
                    placeholder='Add an Answer'
                    onChange={handleInputChange}
                    value={questionInput.answer}
                    required
                  />
                </label>
              </div>
              <div id="form-buttons">
                <button id='memory-submit' type='submit' >
                  Submit Question
                </button>
              </div>
            </div>
          </form>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='wave-container-2'
        >
          <path
            fill='#F09B41'
            fillOpacity='1'
            d='M0,224L60,192C120,160,240,96,360,106.7C480,117,600,203,720,218.7C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div id='orange-section'></div>
    </>
  )
}

export default AddQuestion
