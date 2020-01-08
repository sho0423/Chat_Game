import React from 'react'
import {
  BrowerRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//React Touterを使ったメインコンポーネントの定義

const HelloApp = () => (
  <Router>
    <div style={{margin: 20}}>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/ja' component={HelloJapanese} />
      <Route exact path ='/en' component={HelloEnglish} />
    </div>
  </Router>
)

//ホーム画面を表すコンポーネントを定義

const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>言語を選択してください</p>
    <ul>
      <li><a href='/ja'>日本語</a></li>
      <li><a href='/ja'>英語</a></li>
    </ul>
  </div>
)

//日本語画面を表すコンポーネントを定義
const HelloJapanese = () => (
  <div>
    <h1>こんにちは</h1>
    <p><a href='/'>戻る</a></p>
  </div>
)

//英語画面を表すコンポーネントを定義
const HelloEnglish = () => (
  <div>
    <h1>Hello</h1>
    <p><a href='/'>Back</a></p>
  </div>
)

export default HelloApp