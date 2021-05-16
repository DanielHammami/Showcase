import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

// Redux
import { connect } from 'react-redux'

// Bootstarp
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'

// CSS
import '../App.css'

const MY_API_KEY = 'e70b9cd8e8774eeaa25edb59f0059ff5' // a3a1d54c0750465f8d2d07447e71648b

function Home(props) {
  const [sourceList, setSourceList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(5)

  // Fetch data from API
  useEffect(() => {
    const APIResultsLoading = async () => {
      const data = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${ MY_API_KEY }`)
      const body = await data.json()
      setSourceList(body.articles)
    }

    APIResultsLoading()
  }, [sourceList])

  // Get current articles
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = sourceList.slice(indexOfFirstArticle, indexOfLastArticle)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  //Loop on all articles
  let myArticlesList = currentArticles.map((article, i) => (
    <div key={ i } style={{ display:'flex', justifyContent:'center' }}>
      <Card style={{ width: '16rem', margin: 20 }}>
        <Card.Img
          variant="top"
          src={ article.urlToImage === null ? "../banner.png" : article.urlToImage }
        />
        <Card.Body>
          <Card.Title>{ article.title }</Card.Title>
          <Card.Text>
            { article.description }
          </Card.Text>
          <Link to='/myarticle'>
            <Button onClick={ () => props.addArticle(article) } variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  ))

  return (
    <div className='pageContainer'>
      <h1>React Showcase project</h1>
      <h3>News</h3>
      <div className="HomeThemes">
        <div className="Card">
          { myArticlesList }
        </div>
      </div>
      <Pagination
        articlesPerPage = { articlesPerPage }
        totalArticles = { sourceList.length }
        paginate = { paginate }
      />
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    addArticle: function(article) {
      console.log(article)
      dispatch({
        type: 'addArticle',
        article: article
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Home)