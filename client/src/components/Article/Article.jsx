import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import './Article.css'

const ArticlesPage = () => {
  // const newsapi = new NewsAPI('215f9f133cb64c8f896fbbf3ddc0e96d')
  // const [data, setData] = useState([]);
  const [articles, setArticles] = useState([]);
  const [memoryArticles, setMemoryArticles] = useState([]);

  useEffect(() => {
    var brainUrl =
      'https://newsapi.org/v2/everything?' +
      'q=improve+brain&' +
      'searchIn=title&' +
      'sortBy=popularity&' +
      'apiKey=5326392fc10344bb8a8fe41dd80aa651'

    var MemoryUrl =
    'https://newsapi.org/v2/everything?' +
    'q=improve+memory&' +
    'searchIn=title&' +
    'sortBy=popularity&' +
    'apiKey=5326392fc10344bb8a8fe41dd80aa651'

    var brainReq = new Request(brainUrl)
    var memoryReq = new Request(MemoryUrl)

    fetch(brainReq).then((res) => res.json())
    .then((data) => {
      console.log(data)
      const articleHtml = data.articles.map(article => {
        return (
          <div id="card-div">
            <div>
              <img src={article.urlToImage}></img>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a target='_blank' href={article.url}>Go to article</a>
            </div>
          </div>
        )
      })
      setArticles(articleHtml);
    })

    fetch(memoryReq).then((res) => res.json())
    .then((data) => {
      console.log(data)
      const articleHtml = data.articles.map(article => {
        return (
          <div id="card-div">
            <div>
              <img src={article.urlToImage}></img>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a target='_blank' href={article.url}>Go to article</a>
            </div>
          </div>
        )
      })
      setMemoryArticles(articleHtml);
    })
  }, [])

  return (
    <>
    <Navbar></Navbar>
    <div id="card-section">
      {memoryArticles}
        {articles}
    </div>
    </>
  )
}

export default ArticlesPage
