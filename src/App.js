import React, { Component } from 'react'
import NewsNavBar from './components/NewsNavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch,


} from "react-router-dom";




export default class App extends Component {


  pageSize = 6
  render() {
    return (
      <div>
        <Router>
          <NewsNavBar />
          <Switch>
            <Route exact path="/"><News Key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News Key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News Key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News Key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News Key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News Key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News Key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News Key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
