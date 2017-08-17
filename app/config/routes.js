import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  ListContainer, QuestionContainer } from 'containers'

function getRoutes(history) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='authenticate' component={AuthenticateContainer} />
        <Route path='list' component={ListContainer} />
        <Route path='question' component={QuestionContainer} />
      </Router>
    </Router>
  )
}

export default getRoutes
