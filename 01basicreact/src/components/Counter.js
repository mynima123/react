// Counter.js
import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleNext = () => {
    setCount(count + 1);
  };

  const handlePrev = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-container">
      <p className="counter-text">Current Value: {count}</p>
      <button className="counter-button" onClick={handlePrev}>
        Prev
      </button>
      <button className="counter-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Counter;
