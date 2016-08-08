import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  GreetContainer,
  AuthenticateContainer,
  FeedContainer,
  LogoutContainer,
  UserContainer,
  DuckDetailsContainer
} from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} onEnter={checkAuth} />
        <Route path='greet' component={GreetContainer} />
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='feed' component={FeedContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <Route path='/:uid' component={UserContainer} onEnter={checkAuth} />
        <Route path='/duckDetail/:duckId' component={DuckDetailsContainer} onEnter={checkAuth} />
      </Router>
    </Router>
  )
}