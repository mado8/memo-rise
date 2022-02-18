import React, { useState, useEffect } from 'react';
// const CreateMemo
import './CreateMemory.css'


const CreateMemory = () => {

  return (
    <>
      <div>
        <div id='memory-form-container'>
          <form id='memory-form'>
            <div id='form-container'>
              <div id='form-header'>
                <h3>Memory</h3>
              </div>
              <div id="form-input-container">
                <label>
                  <input
                    class='form-input'
                    name='memory'
                    type='text'
                    placeholder='Add a Memory'
                  />
                </label>
                <label>
                  <input
                    class='form-input'
                    name='answer'
                    type='text'
                    placeholder='Add an Answer'
                  />
                </label>
              </div>
              <div id="form-buttons">
                <button id='memory-submit' type='submit'>
                  Submit Memory
                </button>
              </div>
            </div>
          </form>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          class='wave-container-2'
        >
          <path
            fill='#F09B41'
            fill-opacity='1'
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