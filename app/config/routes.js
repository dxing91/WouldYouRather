import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  ListContainer, QuestionContainer } from 'containers'

const routes = (
  <Router history={hashHistory}>
    <Router path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='authenticate' component={AuthenticateContainer} />
      <Route path='list' component={ListContainer} />
      <Route path='question' component={QuestionContainer} />
    </Router>
  </Router>
)

export default routes
