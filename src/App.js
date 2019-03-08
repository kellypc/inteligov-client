import React, { Component } from 'react';
import './App.css';
import ProjectsContainer from './components/ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">Welcome to Inteligov!</h3>
        </header>
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;