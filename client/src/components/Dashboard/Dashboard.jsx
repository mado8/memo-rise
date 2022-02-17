import React from 'react'
import './dashboard.css'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'

function DashboardComponent ({ handlePageChange }) {    
const [pageChange, setPageChange] = useState ('dashboard')

const handlePageChange = (page) => {
    setPageChange(page)
}

const conditionallyRendeering = () => {
    if (pageChange === 'DailyActivities'){
        return (
            <div>This is going to be daiyly activities page</div>
        )
    }
    else if (pageChange === 'myMemories'){
        return (
            <div> my memories page</div>
        )
    }
    else if (pageChange === 'createMemory') {
        return (
            <div>create memory</div>
        )
    }
    else {
        return(

        <div>

            <div id="app-dasboard-container"> 
            <div id="dashboard-container">    
            
            <Navbar></Navbar>
             {/* on click this button will go to Daily Activity component href*/}
            <a  href="#startDaily" onClick={() => handlePageChange('DailyActivites')} >
                <button id="button-circle-left">
                   START DAILY ACTIVITY
                </button>
             </a>

             
          


            {/* on click this button will got to My memories component href */}
            <a  href="myMemories" onClick={() => handlePageChange('myMemories')}>
                <button id="mymemories-button">
                My Memories
                </button>
            </a>        



            {/* on click this button will go to make a new memory  */}
            <a  href="#createMemory" onClick={() => handlePageChange('createMemory')}>
                <button id="create-button">
                   Create Memory
                </button>
            </a>



            {/* this is for future developments  
             <button href="#quiz" onClick={() => handlePageChange('quiz')}
             className="button button4">Quiz My Memory</button>*/}
            </div>
            </div>

        </div>


        )
    }
}


    return (
        <>
        {conditionallyRendeering()}
        </>

    )
}
export default DashboardComponent