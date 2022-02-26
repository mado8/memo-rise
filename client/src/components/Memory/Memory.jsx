import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_MEMORY } from '../../utils/querie'
import Question from '../../Questions/AddQuestion'
import AddQuestion from '../../Questions/AddQuestion'


const useMemory = ({ _id, handlePage }) => {
  // console.log(_id)
  const { data: memory } = useQuery(GET_MEMORY, {
    variables: { _id },
  })
  const memoryTitle = memory?.memory.title
  const memoryDesc = memory?.memory.description
  const memoryQuestionsArr = memory?.memory.questions
  console.log(memoryQuestionsArr);

  const memoryQuestions = memory?.memory.questions || [{
    _id : "one two three",
    question: "this a question?",
    answer: "answer"
  }]
  // const memoryTitle = memory.title;
  // console.log(memoryQuestions)

  // if (memory !== null) {
  //   console.log(memoryTitle)
  //   console.log(memoryDesc)
  // }

  return (
    <div className="memory-div">
      <h3 className="memory-title"> My Memory</h3>
      <p className="memory-item">{memoryTitle}</p>
      {/* <h3> Description </h3> */}
      <p className="memory-item"> {memoryDesc}</p>
      {/* <a id="questions-button" questionsID={1} onClick={()=> handlePage('questions')}>See questions!</a> */}
    </div>
  )
}

export default useMemory
