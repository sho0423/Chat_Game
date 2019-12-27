import React from './node_modules/react'

export class Hello extends React.Component {
  render () {
    return <h1><a href="/firstpage">Hello!</a></h1>
  }

}

export class World extends React.Component {
  render () {
    return <h1><a href="/secondpage">World</a></h1>
  }
  
}