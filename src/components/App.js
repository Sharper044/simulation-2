//This is the subshell for simulation-2. Its purpose is to act as a base where the other pages can be rendered inside as they are routed.
import React, { Component } from 'react';
import routes from '../router.js';
import '../reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

export default App;