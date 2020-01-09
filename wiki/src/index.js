import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import WikiEdit from './wiki_edit'
import WikiShow from './wiki_show'
import Header from './header'
import Footer from './footer'

const WikiApp = () => (
  <Router>
    <div>
      <Route path='/wiki/:name' component={WikiShow} />
      <Route path='/edit/:name' component={WikiEdit} />
    </div>
  </Router>
)

//DOMにメインコンポーネントを書き込む
ReactDOM.render(
  <Header />,
  document.getElementById('header')
)
ReactDOM.render(
  <WikiApp />,
  document.getElementById('root')
)
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
)