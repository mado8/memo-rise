import React, { useEffect, useState } from 'react'

const ArticlesPage = () => {

    // const newsapi = new NewsAPI('215f9f133cb64c8f896fbbf3ddc0e96d')
    // const [data, setData] = useState([]);

    useEffect(() => {
        let url = 'https://memo-rise.herokuapp.com/https://newsapi.org/v2/?' +
        'q=memory&' +
        'category=science' +
        'sortBy=popularity&' +
        'apiKey=5326392fc10344bb8a8fe41dd80aa651';

        var req = new Request(url);

        fetch(req, {
            mode: 'no-cors'
        })
            .then(function(response) {
            console.log(response)
        })
    },[])

    return (
        <div>Articles Page!</div>
    )
}

export default ArticlesPage