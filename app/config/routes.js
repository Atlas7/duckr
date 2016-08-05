import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  AuthenticateContainer,
  FeedContainer,
  LogoutContainer,
  GreetContainer
} from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Router path='/' component={MainContainer}>
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <Route path='greet' component={GreetContainer} />
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
      </Router>
    </Router>
  )
}