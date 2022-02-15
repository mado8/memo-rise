import React from 'react'


function DashboardComponent ({ handlePageChange }) {    

    return (
        <div>
             {/* on click this button will go to Daily Activity component href*/}
             <button   href="#startDaily" onClick={() => handlePageChange('startDaily')} 
             className="button button1">START DAILY ACTIVITY</button>



            {/* on click this button will got to My memories component href */}
             <button href="myMemories" onClick={() => handlePageChange('myMemories')}
             className="button button2">My Memories</button>



            {/* on click this button will go to make a new memory  */}
             <button href="#createMemory" onClick={() => handlePageChange('createMemory')}
             className="button button3">Create Memory</button>


            {/* this is for future developments  
             <button href="#quiz" onClick={() => handlePageChange('quiz')}
             className="button button4">Quiz My Memory</button>*/}

        </div>
    )
}
export default DashboardComponent