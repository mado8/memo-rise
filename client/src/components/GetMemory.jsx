import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MEMORY } from '.././utils/querie'


const GetMemory = ({_id}) => {
    console.log(_id)
    const { data: memory } = useQuery(GET_MEMORY, {
        variables: { _id },
      })

    const memoryTitle = memory?.memory.title
    const memoryDesc = memory?.memory.description

    const questions = [
        {
          question: `Spend some time thinking of why you wanted to remember ${memoryDesc}`,
        },
        {
          question: `Relate ${memoryDesc} to something that shares similar traits.`,
        },
        {
          question: `Spend some time thinking of a memory that reminds you of ${memoryDesc}`,
        },
        {
          question: `Recall the initial time you encountered ${memoryDesc}`,
        },
        {
          question: `Think of a place that will require you to know ${memoryDesc}`,
        },
        {
          question: `Who might you know also remembers ${memoryDesc}`,
        },
        {
          question: `What is the ${memoryTitle} you wanted to remeber?`,
        }
      ]
    
      var randomItem = questions[Math.floor(Math.random() * questions.length)];

    // if (memory !== null && memory !== undefined) {
    //     console.log(memoryTitle)
    //     console.log(memoryDesc)
    // }

    return (
        <p className='question' id="questionInput">
         {randomItem.question}
        </p>
    )
}

export default GetMemory;