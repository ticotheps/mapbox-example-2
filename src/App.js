import React, { Component } from 'react';
import './App.css';

import Mapbox from './mapbox/Mapbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Mapbox />
      </div>
    );
  }
}

export default App;
