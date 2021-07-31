import React from 'react'
import './App.css'
import Body from './components/body/Body'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className="container" >
      <Header className="header" />
      <Body />
    </div>
  )
}

export default App