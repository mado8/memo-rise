import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MEMORY } from '../../utils/querie'
import Question from '../../Questions/AddQuestion'
import AddQuestion from '../../Questions/AddQuestion'


const useMemory = ({ _id }) => {
  console.log(_id)
  const { data: memory } = useQuery(GET_MEMORY, {
    variables: { _id },
  })
  const memoryTitle = memory?.memory.title
  const memoryDesc = memory?.memory.description
  const memoryQuestions = memory?.memory.questions || [{
    _id : "one two three",
    question: "this a question?",
    answer: "answer"
  }]
  // const memoryTitle = memory.title;
  console.log(memoryQuestions)

  if (memory !== null) {
    console.log(memoryTitle)
    console.log(memoryDesc)
  }

  return (
    <div className="memory-div">
      <h3> My Memory</h3>
      <p className="memory-item">{memoryTitle}</p>
      <h3> Description </h3>
      <p className="memory-item"> {memoryDesc}</p>
      {/* < AddQuestion _id={memory._id} /> */}
    </div>
  )
}

export default useMemory
