import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap'

// CSS
import '../App.css'

// Redux
import { connect } from 'react-redux'

function MyArticle(props) {
  return (
    <div className="myArticle">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={ props.myArticles.urlToImage === null ? "../banner.png" : props.myArticles.urlToImage }
        />
        <Card.Body>
          <Card.Title>{ props.myArticles.title }</Card.Title>
          <Card.Text>
            { props.myArticles.description }
          </Card.Text>
          <Link to='/'>
            <Button variant="success">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

function mapStateToProps(state) {
  return { myArticles: state.article }
}

export default connect(
  mapStateToProps,
  null
)(MyArticle)
