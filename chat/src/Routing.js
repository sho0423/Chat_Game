import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './secondpage/App'
import About from './firstpage/About'

class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routing