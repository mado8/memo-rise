import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_QUESTION } from '../utils/querie'


const AddQuestionButton = ({ _id }) => {
  console.log(_id)
  const { data: question } = useQuery(GET_ME);
  const userData = question?.question || {};
  let arr = [];

  
  const HandleAddQuestion = () =>{
    try{
    //   const { data } = await addQuestion({variables: {questionData: }});
    }catch(err){
      console.log(err)
    }

  }

  return (

  <button onClick={HandleAddQuestion}>Add Question</button>
  )
}

export default AddQuestionButton