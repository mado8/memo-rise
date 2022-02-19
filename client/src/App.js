import React from 'react'
// import Container from "./components/MainContainer"
import DashboardComponent from './components/Dashboard/Dashboard';
import Container from "./components/MainContainer"
import DailyActivites from './components/DailyActivities/DailyActivites.jsx'
import CreateMemory from './components/CreateMemory/CreateMemory'
import DashboardComponent from './components/Dashboard/Dashboard'


function App() {
  return (
    <div>

      <DashboardComponent/>
      {/* < Container/> */}
      <CreateMemory />
    
    </div>
  )
}

export default App