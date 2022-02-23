import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ME, GET_MEMORY } from '../../utils/querie'
import Memory from '../Memory/Memory'
// need to grab user's memories and render each as a div with a image and a button

const MyMemories = async () => {
    const { data: user } = await useQuery(GET_ME);
    const userData = user?.user || {};

    const returnMemories = () => {
        const memoryIdArr = userData.memories;
        if(memoryIdArr !== undefined) {
            console.log(memoryIdArr[0]._id)

            const memoryItems = memoryIdArr.map((memory) => {
                return (
                    <Memory _id={memory._id}></Memory>
                )
            })
            return memoryItems;
        }
    }

    return (
        <div>
            <div>
              {returnMemories()}
            </div>
        </div>
    )
}

export default MyMemories;