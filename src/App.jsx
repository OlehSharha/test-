import React from 'react';
import './App.css';
import { AboutAll } from './components/FIrstAnswer';
import { AboutAngular } from './components/Angular';
import { AboutNode } from './components/Node.js/Node';

function App() {
  return (
    <div className="App">
      <AboutAll />
      <AboutAngular />
      <AboutNode />
    </div>
  );
}

export default App;
