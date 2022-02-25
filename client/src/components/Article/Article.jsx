import React, { useEffect, useState } from 'react'

const ArticlesPage = () => {
  // const newsapi = new NewsAPI('215f9f133cb64c8f896fbbf3ddc0e96d')
  // const [data, setData] = useState([]);

  useEffect(() => {
    var url =
      'https://newsapi.org/v2/everything?' +
      'q=Memorization&' +
      'searchIn=title&' +
      'sortBy=popularity&' +
      'apiKey=5326392fc10344bb8a8fe41dd80aa651'

    var req = new Request(url)

    fetch(req).then(function (response) {
      console.log(response.json())
    })
  }, [])

  return <div>Articles Page!</div>
}

export default ArticlesPage
