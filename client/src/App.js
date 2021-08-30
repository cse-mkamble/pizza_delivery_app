import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Cartscreen from './screens/Cartscreen'

const App = () => {
  return (
    <div className='App' >
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
      </BrowserRouter>
    </div>
  )
}

export default App