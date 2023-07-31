import React, { Component } from 'react'
import NewsNavBar from './components/NewsNavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch,


} from "react-router-dom";




export default class App extends Component {



  render() {
    return (
      <div>
        <Router>
          <NewsNavBar />
          <Switch>
            <Route exact path="/"><News Key="general" pageSize={6} country="in" category="general" /></Route>
            <Route exact path="/business"><News Key="business" pageSize={6} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News Key="entertainment" pageSize={6} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News Key="general" pageSize={6} country="in" category="general" /></Route>
            <Route exact path="/health"><News Key="health" pageSize={6} country="in" category="health" /></Route>
            <Route exact path="/science"><News Key="science" pageSize={6} country="in" category="science" /></Route>
            <Route exact path="/sports"><News Key="sports" pageSize={6} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News Key="technology" pageSize={6} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
