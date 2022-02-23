import React from "react";
import { useQuery } from "@apollo/client"; 
import { GET_MEMORY } from '../../utils/querie';

const useMemory = ({ _id }) => {
    console.log(_id)
    const { data: memory } = useQuery(GET_MEMORY, {
        variables: { _id }
    });
    const memoryTitle = memory;

    console.log(memoryTitle)

    return (
        <p>
            {memoryTitle}
        </p>
    )
}

export default useMemory;