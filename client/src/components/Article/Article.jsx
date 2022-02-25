import React from 'react'

const ArticlesPage = () => {
    var url = 'https://newsapi.org/v2/?' +
          'q=memory&' +
          'category=science' +
          'sortBy=popularity&' +
          'apiKey=215f9f133cb64c8f896fbbf3ddc0e96d';

    var req = new Request(url);

    fetch(req)
        .then(function(response) {
        console.log(response.json());
    })

    return (
        <div>Articles Page!</div>
    )
}

export default ArticlesPage