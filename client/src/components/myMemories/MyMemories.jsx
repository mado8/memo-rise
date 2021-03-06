import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ME, GET_MEMORY } from '../../utils/querie'
import Navbar from '../Navbar/Navbar'
import Memory from '../Memory/Memory'
import './MyMemories.css'
// need to grab user's memories and render each as a div with a image and a button

const MyMemories = () => {
  const [page, setPage] = useState('memories')
  const { data: user } = useQuery(GET_ME)
  const userData = user?.user || {}
  let arr = []

  const handlePage = (pageSet) => {
    setPage(pageSet);
  }

  const returnPage = () => {
    if (page === 'questions') {
      return (
          <div id="coming-soon">Coming Soon!  ♡ ◡ ♡</div>
      )
    } else {
      return (
        <div id='memory-component'>
          <div className='memory-container'>{returnMemories()}</div>
        </div>
      )
    }
  }

  const returnMemories = () => {
    const memoryIdArr = userData.memories
    if (memoryIdArr !== undefined) {
      console.log(memoryIdArr[0]._id)

      const memoryItems = memoryIdArr.map((memory) => {
        return <Memory _id={memory._id} handlePage={handlePage}></Memory>
      })

      memoryItems.forEach((memory) => {
        arr.push(memory)
      })

      return arr
    }
  }

  return (
    <>
      <Navbar></Navbar>
      {returnPage()}
    </>
  )

}

export default MyMemories
