import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ME, GET_MEMORY } from '../../utils/querie'
import Memory from '../Memory/Memory'
import './MyMemories.css'
// need to grab user's memories and render each as a div with a image and a button

const MyMemories = () => {
    const { data: user } = useQuery(GET_ME);
    const userData = user?.user || {};
    let arr = [];

    const returnMemories = () => {
        const memoryIdArr = userData.memories;
        if (memoryIdArr !== undefined) {
            console.log(memoryIdArr[0]._id)

            const memoryItems = memoryIdArr.map((memory) => {
                return (
                    <Memory _id={memory._id}></Memory>
                )
            })

            memoryItems.forEach(memory => {
                arr.push(memory)
            })

            return arr;
        }
    }

    return (
        <div id="memory-component">
            <div class="memory-container">
                {returnMemories()}
            </div>
        </div>
    )
}

export default MyMemories;