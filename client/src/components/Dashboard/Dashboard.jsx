import React from 'react'
import { useState } from 'react'
import CreateMemory from '../CreateMemory/CreateMemory'
import MyMemories from '../myMemories/MyMemories'
import Articles from '../Article/Article'
import MemoryGame from '../MemoryGame/Board'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBrain,
  faCrown,
  faCodeBranch,
  faBook,
  faArrowRightFromBracket
  
} from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css'

function DashboardComponent() {
  const [pageChange, setPageChange] = useState('dashboard')

  const handlePageChange = (page) => {
    setPageChange(page)
  }

  const conditionallyRendering = () => {
    if (pageChange === 'myMemories') {
      return <MyMemories handlePageChange={handlePageChange}></MyMemories>
    } else if (pageChange === 'createMemory') {
      return <CreateMemory handlePageChange={handlePageChange}></CreateMemory>
    } else if (pageChange === 'articles') {
      return <Articles handlePageChange={handlePageChange}></Articles>
    } else if (pageChange === 'games') {
      return <MemoryGame handlePageChange={handlePageChange}></MemoryGame>
    } else {
      return (
        <div id='dashboard'>
          <div id='dashboard-form-container'>
            <div id='sub-main'>

              {/* on click this button will go to Daily Activity component href*/}
              <a
                href='/activity'
                className='button button-circle button-highlight'
              >
                Start Daily Activities{' '}
              </a>

              {/* on click this button will got to My memories component href */}
              <div id='page-container'>
                <a onClick={() => handlePageChange('myMemories')}>
                  <button id='dash-submit'>
                    <FontAwesomeIcon size="20" icon={faBrain} id="dashboard-icon" className='page-icon' />
                    <p>My Memories</p>
                  </button>
                </a>

                {/* on click this button will go to make a new memory  */}
                <a onClick={() => handlePageChange('createMemory')}>
                  <button id='dash-submit'>
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className='page-icon'
                    />
                    <p>Create Memory</p>
                  </button>
                </a>

                <a onClick={() => handlePageChange('articles')}>
                  <button id='dash-submit'>
                    <FontAwesomeIcon icon={faBook} className='page-icon' />
                    <p>Articles</p>
                  </button>
                </a>

                <a onClick={() => handlePageChange('games')}>
                  <button id='dash-submit'>
                    <FontAwesomeIcon icon={faCrown} className='page-icon' />
                    <p>Memory Games</p>
                  </button>
                </a>
                
              </div>
              <div id='nav-div'>
                <a id='logout' href='/'>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  return <>{conditionallyRendering()}</>
}

export default DashboardComponent
