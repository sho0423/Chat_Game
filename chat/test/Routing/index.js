import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HelloApp from './HelloApp'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <HelloApp />
  </BrowserRouter>,
  document.getElementById("root")
)
