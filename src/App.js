import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MyArticle from './components/MyArticle'

import './App.css'

// Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import article from './reducers/article'

const store = createStore(combineReducers({ article }))

export default function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ MyArticle } path="/myarticle" exact />
        </Switch>
      </Router>
    </Provider>
  )
}