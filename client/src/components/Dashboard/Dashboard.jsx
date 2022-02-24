import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import CreateMemory from '../CreateMemory/CreateMemory'
import MyMemories from '../myMemories/MyMemories'
import Auth from '../../utils/auth'
import { Redirect, Route } from 'react-router-dom'
import './Dashboard.css'

function DashboardComponent() {
    
    const [pageChange, setPageChange] = useState('dashboard')
    

    const handlePageChange = (page) => {
        setPageChange(page)
    }

    const conditionallyRendering = () => {
       if (pageChange === 'myMemories') {
            return (
                <MyMemories handlePageChange={handlePageChange}></MyMemories>
            )
        }
        else if (pageChange === 'createMemory') {
            return (
                <CreateMemory handlePageChange={handlePageChange}></CreateMemory>
            )
        }
        else {
            return (

                <div>
                    <div id="dasboard-form-container">
                        <div id="sub-main">
                            {/* on click this button will go to Daily Activity component href*/}

                            <a href="/activity" className="button button-circle button-highlight">Start Daily Activities </a>

                            {/* on click this button will got to My memories component href */}
                            <a onClick={() => handlePageChange('myMemories')}>
                                <button id="dash-submit">
                                    My Memories
                                </button>
                            </a>

                            {/* on click this button will go to make a new memory  */}
                            <a onClick={() => handlePageChange('createMemory')}>
                                <button id="dash-submit">
                                    Create Memory
                                </button>
                            </a>

                            {/* this is for future developments  
                            <button href="#quiz" onClick={() => handlePageChange('quiz')}
                            className="button button4">Quiz My Memory</button>*/}
                        </div>
                    </div>

                    <svg className="wave-container-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#F09B41" fill-opacity="1" d="M0,160L30,144C60,128,120,96,180,90.7C240,85,300,107,360,144C420,181,480,235,540,240C600,245,660,203,720,197.3C780,192,840,224,900,202.7C960,181,1020,107,1080,96C1140,85,1200,139,1260,154.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                    </svg>
                    <div className="orange-div-3"></div>

                </div>
        )}
    }

    return (
        <>
            <>
            <Navbar></Navbar>
            {conditionallyRendering()}
            </>
        </>
    )
}

export default DashboardComponent