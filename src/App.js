import React, { Component } from 'react'
import NewsNavBar from './components/NewsNavBar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


export default class App extends Component {



  render() {
    return (
      <div>
        <NewsNavBar />
        <News pageSize={6} country="in" category="sports" />

      </div>
    )
  }
}
