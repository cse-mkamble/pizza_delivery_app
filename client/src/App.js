import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import "bootstrap"
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen'
import Cartscreen from './screens/Cartscreen'
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'

const App = () => {
  return (
    <div className='App' >
      <Navbar />
      <BrowserRouter>
        
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/register" exact component={Registerscreen} />

      </BrowserRouter>
    </div>
  )
}

export default App