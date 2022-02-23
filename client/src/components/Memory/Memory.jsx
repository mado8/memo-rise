import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MEMORY } from '../../utils/querie'

const useMemory = ({ _id }) => {
  console.log(_id)
  const { data: memory } = useQuery(GET_MEMORY, {
    variables: { _id },
  })
  const memoryTitle = memory?.memory.title
  const memoryDesc = memory?.memory.description
  // const memoryTitle = memory.title;

  if (memory !== null) {
    console.log(memoryTitle)
    console.log(memoryDesc)
  }

  return (
    <div class="memory-div">
      <p class="memory-item">{memoryTitle}</p>
      <p class="memory-item"> {memoryDesc}</p>
    </div>
  )
}

export default useMemory
