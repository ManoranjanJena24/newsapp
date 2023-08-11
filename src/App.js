import React, { Component } from 'react'
import NewsNavBar from './components/NewsNavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Switch,


} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'






export default class App extends Component {


  pageSize = 6
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })

  }
  render() {
    return (
      <div>
        <Router>
          <NewsNavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={10}

          />

          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apiKey} Key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apiKey} Key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apiKey} Key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apiKey} Key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apiKey} Key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apiKey} Key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apiKey} Key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apiKey} Key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
// import React, { Component } from 'react'
// import NewsNavBar from './components/NewsNavBar';
// import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,


// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'




// export default class App extends Component {


//   pageSize = 6
//   render() {
//     return (
//       <div>
//         <Router>
//           <NewsNavBar />
//           <LoadingBar
//             color='#f11946'
//             progress={10}

//           />

//           <Switch>
//             <Route exact path="/"><News setProgress={this.setProgress} apikey={this.apiKey} Key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
//             <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apiKey} Key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
//             <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apiKey} Key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
//             <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apiKey} Key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
//             <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apiKey} Key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
//             <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apiKey} Key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
//             <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apiKey} Key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
//             <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.apiKey} Key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
