import React, { Component } from 'react'
import NewsNavBar from './components/NewsNavBar';
import News from './components/News';


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
