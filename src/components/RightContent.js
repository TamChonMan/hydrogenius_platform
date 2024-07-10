import React, { useState } from 'react';
import './RightContent.css';
import Result from './Result/Result';
import Parameter from './parameter/Parameter';

const RightContent = () => {
  const [capitalValue, setCapitalValue] = useState(890); // 初始 Capital 值
  // const [omValue, setOmValue] = useState(890); // 初始 O&M 值

  const handleCapitalChange = (value) => {
    setCapitalValue(parseFloat(value));
  };

  // const handleOmChange = (value) => {
  //   setOmValue(parseFloat(value));
  // };

  const resultValue = (capitalValue * 2).toFixed(2); //Model bulid here

  return (
    <div className="right-content">
      <Result value={resultValue} />
      <Parameter 
        onCapitalChange={handleCapitalChange} 
        // onOmChange={handleOmChange} 
        capitalDefaultValue={890} 
        // omDefaultValue={890} 
      />
    </div>
  );
};

export default RightContent;
