import React from 'react'
import './dashboard.css'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import CreateMemory from '../CreateMemory/CreateMemory'
import MyMemories from '../myMemories/MyMemories'
import Auth from '../../utils/auth'
import { Redirect, Route } from 'react-router-dom'

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

                    <svg className="wave-container-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F09B41" d="M0,192L48,213.3C96,235,192,277,288,245.3C384,213,480,107,576,90.7C672,75,768,149,864,197.3C960,245,1056,267,1152,272C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <div className="orange-div"></div>

                </div>
        )}
    }

    return (
        <>
            {/* {Auth.loggedIn() ? ( */}
                <>
                <Navbar></Navbar>
                {conditionallyRendering()}
                </>
            {/* ) : ( */}
                {/* <Redirect to="/"></Redirect> */}
            {/* )} */}
        </>
    )
}

export default DashboardComponent