import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer,
  ListContainer, DecisionContainer, LogoutContainer } from 'containers'

function getRoutes(history, checkAuth) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
        <Route path='authenticate' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='list' component={ListContainer} onEnter={checkAuth} />
        <Route path='decision/:decisionId' component={DecisionContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
      </Router>
    </Router>
  )
}

export default getRoutes
