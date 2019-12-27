import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import header from './firstpage/header'
import World from './secondpage/Hello'
import Hello from './secondpage/Hello'

const HelloApp = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={ Hello } />
        <Route path='/firstpage' component={ header } />
        <Route path='/secondpage' component={ World } />
    </Switch>
  </BrowserRouter>
)

export default HelloApp