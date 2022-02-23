import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ME, GET_MEMORY } from '../../utils/querie'
// need to grab user's memories and render each as a div with a image and a button

const MyMemories = () => {
    const {loadingUser, data} = useQuery(GET_ME);
    // const {loadingMemory, data1} = useQuery
    const user = data?.user || {};
    const memoryIdArr = user.memories
    // console.log(memoryIdArr)
    console.log(user)
    // const memories = memoriesArr.map(memory => {
    //     return (
    //         <div>
    //             <p>
    //                 memory.title
    //             </p>
    //             <p>
    //                 memory.description
    //             </p>
    //         </div>
    //     )
    // })

    return (
        <div>
            <div>
                {/* {memories} */}
                <p>hello world</p>
            </div>
        </div>
    )
}

export default MyMemories;