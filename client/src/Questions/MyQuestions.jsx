// import React from 'react'
// import { useMutation, useQuery } from '@apollo/client'
// import { ADD_QUESTION } from '../utils/mutation'


// const AddQuestionButton = ({ _id }) => {
//   console.log(_id)
//   const [addQuestion] = useMutation(ADD_QUESTION)
  
//   const HandleAddQuestion = () =>{
//     // const { data: question } = useMutation(ADD_QUESTION, {
//     //   variables: { _id },
//     // })
//     try{
//       const { data } = await addQuestion({variables: {questionData: }});
//     }catch(err){
//       console.log(err)
//     }

//   }

//   return (

//   <button onClick={HandleAddQuestion}>Add Question</button>
//   )
// }

// export default AddQuestionButton