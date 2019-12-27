import React from 'react'
import ReactDOM from 'react-dom'
import HelloApp from './browserRouter'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <HelloApp />
  </Router>,
  document.getElementById('root')
)