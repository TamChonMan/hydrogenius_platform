import React from 'react';
import './Result.css';

const Result = ({ value }) => {
  return (
    <div className="result">
      <div className="slider-value-display">Value: {value}</div> 
    </div>
  );
};

export default Result;
