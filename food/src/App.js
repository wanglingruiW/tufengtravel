import React, { Component } from 'react';
import './style/usage/core/reset.scss'
import Home from './pages/home/views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      // <Home></Home>
      <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        {/* <Route path='/detail/:id/:from' component={Detail}/> */}
      </Switch>
    </Router>
    )
  }
}

export default App
