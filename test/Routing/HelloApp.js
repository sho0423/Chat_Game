import React from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

//React Routerを使ったメインコンポーネントの定義

const HelloApp = () => (
  
  <BrowserRouter>
    <div style={{margin: 20}}>
      <Route exact path='/test/Routing/main' component={Home} />
      <Route path ='/ja' component={HelloJapanese} />
      <Route path ='/en' component={HelloEnglish} />
    </div>
  </BrowserRouter>
)

//ホーム画面を表すコンポーネントを定義

const Home = () => (
  <div>
    <h1>Hello App</h1>
    <p>言語を選択してください</p>
    <ul>
      <li><Link to='/ja'>日本語</Link></li>
      <li><Link to='/en'>英語</Link></li>
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