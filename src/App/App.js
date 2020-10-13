import React, { Component } from 'react';
import './App.scss';
import Students from './components/Students';
import Groups from './components/Groups';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Groups />
        <Students />
      </div>
    );
  }
}

export default App;
