import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={apiResponse:""}
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" component={HomeScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
