import React from 'react'


function DashboardComponent ({ handlePageChange }) {    

    return (
        <div>
             {/* on click this button will go to Daily Activity component href*/}
            <a  href="#startDaily" onClick={() => handlePageChange('startDaily')} >
                <button className="button button1">
                   START DAILY ACTIVITY
                </button>
             </a>


            {/* on click this button will got to My memories component href */}
            <a  href="myMemories" onClick={() => handlePageChange('myMemories')}>
                <button className="button button2">
                My Memories
                </button>
            </a>        



            {/* on click this button will go to make a new memory  */}
            <a  href="#createMemory" onClick={() => handlePageChange('createMemory')}>
                <button className="button button3">
                   Create Memory
                </button>
            </a>



            {/* this is for future developments  
             <button href="#quiz" onClick={() => handlePageChange('quiz')}
             className="button button4">Quiz My Memory</button>*/}

        </div>
    )
}
export default DashboardComponent