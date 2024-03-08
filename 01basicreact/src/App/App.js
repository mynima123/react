// App.js
import React from 'react';
import Counter from '../components/Counter';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-heading">React Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
