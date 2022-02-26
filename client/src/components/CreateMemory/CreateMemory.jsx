import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar'
import './CreateMemory.css'
import { useMutation } from '@apollo/client';
import { ADD_MEMORY } from '../../utils/mutation';


const CreateMemory = (props) => {
  const [addMemory, { error, data }] = useMutation(ADD_MEMORY);
  const [memoryInput, setmemoryInput] = useState({ title: '', description: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setmemoryInput({ ...memoryInput, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("inside try")
      const response = await addMemory({ variables: {memoryData: memoryInput} });
      console.log(response)
      props.handlePageChange('dashboard')
    } catch (err) {
      alert("catch")
      console.log("inside in memory cache block")
      console.log(err);
      // setShowAlert(true);
    }
  }

  return (
    <>
    <Navbar></Navbar>
      <div>
        <div id='memory-form-container'>
          <form id='memory-form' onSubmit={handleFormSubmit}>
            <div id='form-container'>
              <div id='form-header'>
                <h3>Memory</h3>
              </div>
              <div id="form-input-container">
                <label>
                  <input
                    className='form-input'
                    name='title'
                    type='text'
                    placeholder='Add a Memory'
                    onChange={handleInputChange}
                    value={memoryInput.name}
                    required
                  />
                </label>
                <label>
                  <input
                    className='form-input'
                    name='description'
                    type='text'
                    placeholder='Add an Answer'
                    onChange={handleInputChange}
                    value={memoryInput.name}
                    required
                  />
                </label>
              </div>
              <div id="form-buttons">
                <button id='memory-submit' type='submit' >
                  Submit Memory
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

export default CreateMemory

// Insert Memory Box
// Insert Answer box
// CREATE_MEMORY