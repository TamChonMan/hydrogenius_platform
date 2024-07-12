import React, { useState } from 'react';
import './RightContent.css';
import Result from './Result/Result';
import Parameter from './Parameter/Parameter';

const RightContent = () => {
  const [capitalValue, setCapitalValue] = useState(890); // 初始 Capital 值
  const handleCapitalChange = (value) => {
    setCapitalValue(parseFloat(value));
  };
  
  // const [omValue, setOmValue] = useState(890); // 初始 O&M 值
  // const handleOmChange = (value) => {
  //   setOmValue(parseFloat(value));
  // };

  const resultValue = ((capitalValue)* 2).toFixed(2); // Model build here

  return (
    <div className="right-content">
      <div className="result-container">
        <Result value={resultValue} />
      </div>
      <div className="parameter-container">
        <Parameter 
          onCapitalChange={handleCapitalChange} 
          // onOmChange={handleOmChange} 
          capitalDefaultValue={890} 
          // omDefaultValue={80} 
        />
      </div>
    </div>
  );
};

export default RightContent;
