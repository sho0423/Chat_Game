import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Routerを覚える</h1>
        
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    )
  }
}

export default App